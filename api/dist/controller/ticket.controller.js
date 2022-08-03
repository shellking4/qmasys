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
exports.TikectController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ticket_dto_1 = require("../dto/ticket.dto");
const ticket_status_1 = require("../enums/ticket-status");
const public_decore_1 = require("../utils/public-decore");
const ticket_service_1 = require("./../services/ticket.service");
const ticket_getway_1 = require("../getways/ticket.getway");
let TikectController = class TikectController {
    constructor(ticketService, ticketGateway) {
        this.ticketService = ticketService;
        this.ticketGateway = ticketGateway;
    }
    createOne() {
        return this.ticketService.create();
    }
    getTickets() {
        return this.ticketService.findAll();
    }
    receiveTicket(body) {
        return this.ticketService.receiveOne(body);
    }
    finishTicket(body) {
        return this.ticketService.receiveOne(body);
    }
    cancelTicketTicket(body) {
        return this.ticketService.cancelOne(body);
    }
    rejetTicketTicket(body) {
        return this.ticketService.rejetOne(body);
    }
    getOneTicket(id) {
        return this.ticketService.findOne(id);
    }
    geticketByAgents(id) {
        return this.ticketService.findByAgent(id);
    }
    geticketByStatus(status) {
        return this.ticketService.findByStatus(status);
    }
};
__decorate([
    (0, common_1.Get)("create"),
    openapi.ApiResponse({ status: 200, type: require("../entities/ticket.entity").Ticket }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TikectController.prototype, "createOne", null);
__decorate([
    (0, public_decore_1.Public)(),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("../entities/ticket.entity").Ticket] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TikectController.prototype, "getTickets", null);
__decorate([
    (0, common_1.Put)(),
    openapi.ApiResponse({ status: 200, type: require("../entities/ticket.entity").Ticket }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ticket_dto_1.TicketDto]),
    __metadata("design:returntype", Promise)
], TikectController.prototype, "receiveTicket", null);
__decorate([
    (0, common_1.Put)("finish-one"),
    openapi.ApiResponse({ status: 200, type: require("../entities/ticket.entity").Ticket }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ticket_dto_1.TicketDto]),
    __metadata("design:returntype", Promise)
], TikectController.prototype, "finishTicket", null);
__decorate([
    (0, common_1.Put)("cancel-one"),
    openapi.ApiResponse({ status: 200, type: require("../entities/ticket.entity").Ticket }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ticket_dto_1.TicketDto]),
    __metadata("design:returntype", Promise)
], TikectController.prototype, "cancelTicketTicket", null);
__decorate([
    (0, common_1.Put)("rejet-one"),
    openapi.ApiResponse({ status: 200, type: require("../entities/ticket.entity").Ticket }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ticket_dto_1.TicketDto]),
    __metadata("design:returntype", Promise)
], TikectController.prototype, "rejetTicketTicket", null);
__decorate([
    (0, common_1.Get)(":id"),
    openapi.ApiResponse({ status: 200, type: require("../entities/ticket.entity").Ticket }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TikectController.prototype, "getOneTicket", null);
__decorate([
    (0, common_1.Get)("agents/:id"),
    openapi.ApiResponse({ status: 200, type: [require("../entities/ticket.entity").Ticket] }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TikectController.prototype, "geticketByAgents", null);
__decorate([
    (0, common_1.Get)("status/:status"),
    openapi.ApiResponse({ status: 200, type: [require("../entities/ticket.entity").Ticket] }),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TikectController.prototype, "geticketByStatus", null);
TikectController = __decorate([
    (0, swagger_1.ApiTags)('Tikects'),
    (0, common_1.Controller)('tickets'),
    __metadata("design:paramtypes", [ticket_service_1.TicketService,
        ticket_getway_1.TicketGateway])
], TikectController);
exports.TikectController = TikectController;
//# sourceMappingURL=ticket.controller.js.map