import { Server } from 'socket.io';
import { TicketService } from './../services/ticket.service';
import { Ticket } from './../entities/ticket.entity';
import { ReceiveDto } from 'src/dto/receive-ticket.dto';
import { ConstanteService } from 'src/services/constante.service';
export declare class TicketGateway {
    private readonly ticketService;
    private readonly constanteService;
    server: Server;
    constructor(ticketService: TicketService, constanteService: ConstanteService);
    create(): Promise<Ticket>;
    resetOrder(): Promise<void>;
    findAll(): Promise<Ticket[]>;
    waiterList(): Promise<Ticket[]>;
    findOne(body: ReceiveDto): Promise<Ticket>;
    finishTicket(body: ReceiveDto): Promise<Ticket>;
    cancelTicketTicket(body: ReceiveDto): Promise<Ticket>;
    rejetTicketTicket(body: ReceiveDto): Promise<Ticket>;
    update(updateAbonnerDto: any): void;
    remove(id: number): void;
    emitAll(): Promise<void>;
    emitWaiter(): Promise<void>;
    emitReceive(): Promise<void>;
    emitFinish(): Promise<void>;
    emitCancel(): Promise<void>;
    emitOrder(): Promise<void>;
}
