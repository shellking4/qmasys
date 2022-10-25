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
exports.TicketGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const ticket_service_1 = require("./../services/ticket.service");
const receive_ticket_dto_1 = require("../dto/receive-ticket.dto");
const ticket_status_1 = require("../enums/ticket-status");
const constante_service_1 = require("../services/constante.service");
let TicketGateway = class TicketGateway {
    constructor(ticketService, constanteService) {
        this.ticketService = ticketService;
        this.constanteService = constanteService;
    }
    async create() {
        const ticket = await this.ticketService.create();
        this.server.emit(`onCreate`, ticket);
        this.emitAll();
        this.server.emit(`last-order`, +ticket.order_nber);
        return ticket;
    }
    async resetOrder() {
        const order = await this.constanteService.resetOrder().catch((error) => {
            throw new websockets_1.WsException(error.message);
        });
        this.server.emit(`last-order`, +order);
    }
    findAll() {
        return this.ticketService.findWaiter();
    }
    waiterList() {
        this.emitAll();
        return null;
    }
    async findOne(body) {
        const ticket = await this.ticketService.receiveOne(body).catch((error) => {
            throw new websockets_1.WsException(error.message);
        });
        this.emitAll();
        return ticket;
    }
    async finishTicket(body) {
        const ticket = await this.ticketService.finishOne(body);
        this.emitAll();
        return ticket;
    }
    async cancelTicketTicket(body) {
        const ticket = await this.ticketService.cancelOne(body);
        this.emitAll();
        return ticket;
    }
    async rejetTicketTicket(body) {
        const ticket = await this.ticketService.rejetOne(body);
        this.emitAll();
        return ticket;
    }
    update(updateAbonnerDto) {
        console.log(updateAbonnerDto);
    }
    remove(id) {
        console.log(id);
    }
    async emitAll() {
        await this.emitWaiter();
        await this.emitReceive();
        await this.emitCancel();
        await this.emitFinish();
    }
    async emitWaiter() {
        const waiters = await this.ticketService.findWaiterOfDays();
        this.server.emit(`waiter-list`, waiters);
    }
    async emitReceive() {
        const receivers = await this.ticketService.findByStatusOfDay(ticket_status_1.TicketStatus.RECEIVE);
        this.server.emit(`receive-list`, receivers);
    }
    async emitFinish() {
        const receivers = await this.ticketService.findByStatusOfDay(ticket_status_1.TicketStatus.FINISH);
        this.server.emit(`finish-list`, receivers);
    }
    async emitCancel() {
        const receivers = await this.ticketService.findByStatusOfDay(ticket_status_1.TicketStatus.CANCEL);
        this.server.emit(`cancel-list`, receivers);
    }
    async emitOrder() {
        const order = await this.constanteService.findOrder().catch((error) => {
            throw new websockets_1.WsException(error.message);
        });
        this.server.emit(`last-order`, +order.value);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], TicketGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('create'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TicketGateway.prototype, "create", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('reset-order'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TicketGateway.prototype, "resetOrder", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('get-waiters'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TicketGateway.prototype, "findAll", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('emit-list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TicketGateway.prototype, "waiterList", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('receive-one'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [receive_ticket_dto_1.ReceiveDto]),
    __metadata("design:returntype", Promise)
], TicketGateway.prototype, "findOne", null);
__decorate([
    (0, websockets_1.SubscribeMessage)("finish-one"),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [receive_ticket_dto_1.ReceiveDto]),
    __metadata("design:returntype", Promise)
], TicketGateway.prototype, "finishTicket", null);
__decorate([
    (0, websockets_1.SubscribeMessage)("cancel-one"),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [receive_ticket_dto_1.ReceiveDto]),
    __metadata("design:returntype", Promise)
], TicketGateway.prototype, "cancelTicketTicket", null);
__decorate([
    (0, websockets_1.SubscribeMessage)("rejet-one"),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [receive_ticket_dto_1.ReceiveDto]),
    __metadata("design:returntype", Promise)
], TicketGateway.prototype, "rejetTicketTicket", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('update'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TicketGateway.prototype, "update", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('remove'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TicketGateway.prototype, "remove", null);
TicketGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: '*',
        },
        namespace: 'tickets',
    }),
    __metadata("design:paramtypes", [ticket_service_1.TicketService,
        constante_service_1.ConstanteService])
], TicketGateway);
exports.TicketGateway = TicketGateway;
//# sourceMappingURL=ticket.getway.js.map