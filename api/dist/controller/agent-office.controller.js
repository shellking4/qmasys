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
exports.OfficeAgentController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const agent_service_dto_1 = require("../dto/agent-service.dto");
const agent_office_service_1 = require("../services/agent-office.service");
let OfficeAgentController = class OfficeAgentController {
    constructor(agentOfficeService) {
        this.agentOfficeService = agentOfficeService;
    }
    createOffice(createOfficeDto) {
        return this.agentOfficeService.create(createOfficeDto);
    }
    getAll() {
        return this.agentOfficeService.findAll();
    }
    getOne(id) {
        return this.agentOfficeService.findOne(id);
    }
    changeOfficier(id) {
        return this.agentOfficeService.changeAgent(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("../entities/office-agent.entity").AgentOffice }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [agent_service_dto_1.AgentOfficeDto]),
    __metadata("design:returntype", Promise)
], OfficeAgentController.prototype, "createOffice", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("../entities/office-agent.entity").AgentOffice] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OfficeAgentController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    openapi.ApiResponse({ status: 200, type: require("../entities/office-agent.entity").AgentOffice }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OfficeAgentController.prototype, "getOne", null);
__decorate([
    (0, common_1.Get)(":id"),
    openapi.ApiResponse({ status: 200, type: require("../entities/office-agent.entity").AgentOffice }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OfficeAgentController.prototype, "changeOfficier", null);
OfficeAgentController = __decorate([
    (0, common_1.Controller)('offices-tickets'),
    (0, swagger_1.ApiTags)('Agent-Office'),
    __metadata("design:paramtypes", [agent_office_service_1.AgentOfficeService])
], OfficeAgentController);
exports.OfficeAgentController = OfficeAgentController;
//# sourceMappingURL=agent-office.controller.js.map