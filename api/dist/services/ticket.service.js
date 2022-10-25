"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ticket_entity_1 = require("./../entities/ticket.entity");
const ticket_status_1 = require("../enums/ticket-status");
const user_service_1 = require("./user.service");
const constante_service_1 = require("./constante.service");
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
const printer_1 = require("printer");
const handlebars_1 = require("handlebars");
const puppeteer = require("puppeteer");
let TicketService = class TicketService {
    constructor(ticketRepository, userService, constanteService) {
        this.ticketRepository = ticketRepository;
        this.userService = userService;
        this.constanteService = constanteService;
        this.templateHtml = fs.readFileSync('public/files/ticket.html', 'utf8');
        this.compiledTemplate = handlebars_1.default.compile(this.templateHtml);
    }
    async create() {
        const ticket = new ticket_entity_1.Ticket();
        ticket.order_nber = await this.constanteService.getOrder();
        const savedTicket = await this.ticketRepository.save(ticket);
        return savedTicket;
    }
    findAll() {
        return this.ticketRepository.find();
    }
    findOne(id) {
        return this.ticketRepository.findOneOrFail({ where: { id: id } });
    }
    findByAgent(agentId) {
        return this.ticketRepository.find({ where: { agent: { id: agentId } } });
    }
    findByStatus(status) {
        return this.ticketRepository.find({ where: { status: status } });
    }
    findWaiter() {
        return this.ticketRepository.find({
            where: { status: ticket_status_1.TicketStatus.WAITING },
        });
    }
    findWaiterOfDays() {
        const now = new Date();
        const beginDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
        return this.ticketRepository.find({
            where: {
                status: ticket_status_1.TicketStatus.WAITING,
                created_at: (0, typeorm_2.MoreThanOrEqual)(beginDay),
            },
        });
    }
    findByStatusOfDay(status) {
        const now = new Date();
        const beginDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
        return this.ticketRepository.find({
            where: { status: status, created_at: (0, typeorm_2.MoreThanOrEqual)(beginDay) },
        });
    }
    findCancelOfDay() {
        const now = new Date();
        const beginDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
        return this.ticketRepository.find({
            where: {
                status: ticket_status_1.TicketStatus.WAITING,
                created_at: (0, typeorm_2.MoreThanOrEqual)(beginDay),
            },
        });
    }
    async receiveOne(body) {
        if (body.old_id) {
            const old = await this.findOne(body.old_id);
            if (old.status != ticket_status_1.TicketStatus.FINISH) {
                old.finish_date = new Date();
                old.status = ticket_status_1.TicketStatus.FINISH;
                await this.ticketRepository.save(old);
            }
        }
        const nevel = await this.findOne(body.id);
        nevel.receive_date = new Date();
        const agent = await this.userService.findOne(body.agent_id);
        nevel.agent = agent;
        nevel.status = ticket_status_1.TicketStatus.RECEIVE;
        await this.ticketRepository.save(nevel).catch((error) => {
            console.log(error);
            throw new common_1.BadRequestException("Une erreur s'est produit");
        });
        return nevel;
    }
    async finishOne(body) {
        const old = await this.findOne(body.id);
        old.finish_date = new Date();
        old.status = ticket_status_1.TicketStatus.FINISH;
        await this.ticketRepository.save(old);
        return old;
    }
    async rejetOne(body) {
        const old = await this.findOne(body.id);
        old.finish_date = null;
        old.status = ticket_status_1.TicketStatus.WAITING;
        await this.ticketRepository.save(old);
        return old;
    }
    async cancelOne(body) {
        const old = await this.findOne(body.id);
        old.finish_date = null;
        old.status = ticket_status_1.TicketStatus.CANCEL;
        await this.ticketRepository.save(old);
        return old;
    }
    async updateStatus(id, status) {
        const ticket = await this.findOne(id);
        ticket.status = status;
        return await this.ticketRepository.save(ticket);
    }
    findRecivingByAndAgent(agentId) {
        return this.ticketRepository.find({
            where: { status: ticket_status_1.TicketStatus.RECEIVE, agent: { id: agentId } },
        });
    }
    async printFile(ticket_order_number) {
        const data = { order_nber: ticket_order_number };
        let templateHtml = fs.readFileSync('public/files/ticket.html', 'utf8');
        let compiledTemplate = handlebars_1.default.compile(templateHtml);
        var html = compiledTemplate(data);
        var pdfPath = path.join('public/files', 'ticket.pdf');
        var imagePath = path.join('public/files', 'ticket.jpeg');
        var textPath = path.join('public/files', 'ticket.txt');
        var bareHtmlPath = path.join('public/files', 'ticket.test.html');
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
        await page.screenshot(Object.assign(Object.assign({}, screenshotOptions), { type: 'jpeg' }));
        await browser.close();
        var info = String(fs.readFileSync(textPath));
        console.log(info);
        var printData = info.replace("25", `${ticket_order_number}`);
        try {
            (0, printer_1.printDirect)({
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
        catch (error) {
            console.log(error);
        }
    }
};
TicketService = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(ticket_entity_1.Ticket)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService,
        constante_service_1.ConstanteService])
], TicketService);
exports.TicketService = TicketService;
//# sourceMappingURL=ticket.service.js.map