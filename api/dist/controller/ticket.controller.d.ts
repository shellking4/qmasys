import { TicketDto } from "src/dto/ticket.dto";
import { Ticket } from "src/entities/ticket.entity";
import { TicketStatus } from "src/enums/ticket-status";
import { TicketService } from './../services/ticket.service';
import { TicketGateway } from '../getways/ticket.getway';
export declare class TikectController {
    private readonly ticketService;
    private readonly ticketGateway;
    constructor(ticketService: TicketService, ticketGateway: TicketGateway);
    createOne(): Promise<Ticket>;
    getTickets(): Promise<Ticket[]>;
    receiveTicket(body: TicketDto): Promise<Ticket>;
    finishTicket(body: TicketDto): Promise<Ticket>;
    cancelTicketTicket(body: TicketDto): Promise<Ticket>;
    rejetTicketTicket(body: TicketDto): Promise<Ticket>;
    getOneTicket(id: number): Promise<Ticket>;
    geticketByAgents(id: number): Promise<Ticket[]>;
    geticketByStatus(status: TicketStatus): Promise<Ticket[]>;
}
