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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
const openapi = require("@nestjs/swagger");
const ticket_status_1 = require("../enums/ticket-status");
const typeorm_1 = require("typeorm");
const audit_1 = require("./audit");
const user_entity_1 = require("./user.entity");
const typeorm_2 = require("typeorm");
let Ticket = class Ticket extends audit_1.Audit {
    async hashPassword() {
        this.code = Date.now() + "";
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: false, type: () => Number }, status: { required: false, enum: require("../enums/ticket-status").TicketStatus }, receive_date: { required: true, type: () => Date }, finish_date: { required: true, type: () => Date }, order_nber: { required: true, type: () => Number }, code: { required: false, type: () => String }, agent: { required: true, type: () => require("./user.entity").User } };
    }
};
Ticket.entityName = "tickets";
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Ticket.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: ticket_status_1.TicketStatus.WAITING }),
    __metadata("design:type", String)
], Ticket.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Ticket.prototype, "receive_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Ticket.prototype, "finish_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], Ticket.prototype, "order_nber", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, unique: true }),
    __metadata("design:type", String)
], Ticket.prototype, "code", void 0);
__decorate([
    (0, typeorm_2.ManyToOne)((type) => user_entity_1.User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], Ticket.prototype, "agent", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Ticket.prototype, "hashPassword", null);
Ticket = __decorate([
    (0, typeorm_1.Entity)("tickets")
], Ticket);
exports.Ticket = Ticket;
//# sourceMappingURL=ticket.entity.js.map