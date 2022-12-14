/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { Ticket } from './../entities/ticket.entity';
import { TicketStatus } from 'src/enums/ticket-status';
import { ReceiveDto } from 'src/dto/receive-ticket.dto';
import { UserService } from './user.service';
import { ConstanteService } from './constante.service';
import { BadRequestException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { printFile, printDirect, getPrinter, getPrinters } from 'printer';
import handlebars from 'handlebars';
import * as puppeteer from 'puppeteer';
import ptp from "pdf-to-printer"

export class TicketService {
  constructor(
    @InjectRepository(Ticket) private ticketRepository: Repository<Ticket>,
    private readonly userService: UserService,
    private readonly constanteService: ConstanteService,
  ) {
    this.templateHtml = fs.readFileSync('public/files/ticket.html', 'utf8');
    this.compiledTemplate = handlebars.compile(this.templateHtml);
  }

  private templateHtml: any;
  private compiledTemplate: any;

  async create(): Promise<any> {
    const ticket: Ticket = new Ticket();
    ticket.order_nber = await this.constanteService.getOrder();
    const savedTicket = await this.ticketRepository.save(ticket);
    this.printFile(savedTicket.order_nber);
    return savedTicket;
  }
  findAll(): Promise<Ticket[]> {
    return this.ticketRepository.find();
  }
  findOne(id: number): Promise<Ticket> {
    return this.ticketRepository.findOneOrFail({ where: { id: id } });
  }

  findByAgent(agentId: number): Promise<Ticket[]> {
    return this.ticketRepository.find({ where: { agent: { id: agentId } } });
  }

  findByStatus(status: TicketStatus): Promise<Ticket[]> {
    return this.ticketRepository.find({ where: { status: status } });
  }

  findWaiter(): Promise<Ticket[]> {
    return this.ticketRepository.find({
      where: { status: TicketStatus.WAITING },
    });
  }

  findWaiterOfDays(): Promise<Ticket[]> {
    const now: Date = new Date();
    const beginDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      0,
      0,
      0,
    );
    return this.ticketRepository.find({
      where: {
        status: TicketStatus.WAITING,
        created_at: MoreThanOrEqual(beginDay),
      },
    });
  }

  findByStatusOfDay(status: TicketStatus): Promise<Ticket[]> {
    const now: Date = new Date();
    const beginDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      0,
      0,
      0,
    );
    return this.ticketRepository.find({
      where: { status: status, created_at: MoreThanOrEqual(beginDay) },
    });
  }

  findCancelOfDay(): Promise<Ticket[]> {
    const now: Date = new Date();
    const beginDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      0,
      0,
      0,
    );
    return this.ticketRepository.find({
      where: {
        status: TicketStatus.WAITING,
        created_at: MoreThanOrEqual(beginDay),
      },
    });
  }

  async receiveOne(body: ReceiveDto): Promise<Ticket> {
    if (body.old_id) {
      const old: Ticket = await this.findOne(body.old_id);
      if (old.status != TicketStatus.FINISH) {
        old.finish_date = new Date();
        old.status = TicketStatus.FINISH;
        await this.ticketRepository.save(old);
      }
    }
    const nevel = await this.findOne(body.id);

    nevel.receive_date = new Date();
    const agent = await this.userService.findOne(body.agent_id);

    nevel.agent = agent;
    nevel.status = TicketStatus.RECEIVE;

    await this.ticketRepository.save(nevel).catch((error) => {
      console.log(error);
      throw new BadRequestException("Une erreur s'est produit");
    });

    return nevel;
  }

  async finishOne(body: ReceiveDto): Promise<Ticket> {
    const old: Ticket = await this.findOne(body.id);
    old.finish_date = new Date();
    old.status = TicketStatus.FINISH;
    await this.ticketRepository.save(old);
    return old;
  }

  async rejetOne(body: ReceiveDto): Promise<Ticket> {
    const old: Ticket = await this.findOne(body.id);
    old.finish_date = null;
    old.status = TicketStatus.WAITING;
    await this.ticketRepository.save(old);
    return old;
  }

  async cancelOne(body: ReceiveDto): Promise<Ticket> {
    const old: Ticket = await this.findOne(body.id);
    old.finish_date = null;
    old.status = TicketStatus.CANCEL;
    await this.ticketRepository.save(old);
    return old;
  }

  async updateStatus(id: number, status: TicketStatus): Promise<Ticket> {
    const ticket: Ticket = await this.findOne(id);
    ticket.status = status;
    return await this.ticketRepository.save(ticket);
  }

  findRecivingByAndAgent(agentId: number): Promise<Ticket[]> {
    return this.ticketRepository.find({
      where: { status: TicketStatus.RECEIVE, agent: { id: agentId } },
    });
  }

  async printFile(ticket_order_number: number) {
    const data = { order_nber: ticket_order_number };

    let templateHtml = fs.readFileSync('public/files/ticket.html', 'utf8');

    let compiledTemplate = handlebars.compile(templateHtml);
    var html = compiledTemplate(data);

    var pdfPath = path.join('public/files', 'ticket.pdf');
    var imagePath = path.join('public/files', 'ticket.jpeg');
    var textPath =  path.join('public/files', 'ticket.txt');
    var bareHtmlPath =  path.join('public/files', 'ticket.test.html');

    var pdfOptions = {
      width: '220px',
      height: '270px',
      scale: 1.6,
      displayHeaderFooter: false,
      margin: {
        bottom: 0,
        top: 0,
      },
      printBackground: true,
      path: pdfPath,
    };

    var screenshotOptions = {
      fullPage: false,
      clip: {
        x: 250,
        y: 45,
        width: 300,
        height: 180,
      },
      path: imagePath,
      omitBackground: true,
    };

    const browser = await puppeteer.launch({
      args: ['--no-sandbox'],
      headless: true,
    });

    var page = await browser.newPage();

    await page.goto(`data:text/html;charset=UTF-8,${html}`, {
      waitUntil: 'networkidle0',
    });
    await page.pdf(pdfOptions);
    await page.screenshot({ ...screenshotOptions, type: 'jpeg' });
    await browser.close();
    var info = String(fs.readFileSync(textPath));
    console.log(info)
    var printData = info.replace("25", `${ticket_order_number}`)

    printDirect({
      data: printData,
      type: "TEXT",
      success: function (jobID) {
        console.log('ID: ' + jobID);
      },
      error: function (error) {
        console.log('printer module error: ' + error);
        throw error;
      },
    });
  }
}
