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
exports.AgentOffice = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const audit_1 = require("./audit");
const office_entity_1 = require("./office.entity");
const user_entity_1 = require("./user.entity");
let AgentOffice = class AgentOffice extends audit_1.Audit {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: false, type: () => Number }, finish_date: { required: true, type: () => Date }, agent: { required: true, type: () => require("./user.entity").User }, office: { required: true, type: () => require("./office.entity").Office } };
    }
};
AgentOffice.entityName = "offices_agents";
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AgentOffice.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], AgentOffice.prototype, "finish_date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => user_entity_1.User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], AgentOffice.prototype, "agent", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => office_entity_1.Office, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'office_id' }),
    __metadata("design:type", office_entity_1.Office)
], AgentOffice.prototype, "office", void 0);
AgentOffice = __decorate([
    (0, typeorm_1.Entity)("offices_agents")
], AgentOffice);
exports.AgentOffice = AgentOffice;
//# sourceMappingURL=office-agent.entity.js.map