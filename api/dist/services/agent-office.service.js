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
exports.AgentOfficeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const common_2 = require("@nestjs/common");
const office_agent_entity_1 = require("../entities/office-agent.entity");
const user_service_1 = require("./user.service");
const user_entity_1 = require("../entities/user.entity");
const office_entity_1 = require("../entities/office.entity");
const office_status_1 = require("../enums/office-status");
let AgentOfficeService = class AgentOfficeService {
    constructor(agentOfficeRepository, userService, officeService) {
        this.agentOfficeRepository = agentOfficeRepository;
        this.userService = userService;
        this.officeService = officeService;
    }
    async create(body) {
        if (!body.agent_id && !body.agent_code) {
            throw new common_1.BadRequestException("Vous devez spécifier l'agent");
        }
        let agent = null;
        if (body.agent_id) {
            agent = await this.userService.findOne(body.agent_id);
        }
        else if (body.agent_code) {
            agent = await this.userService.findOneByCode(body.agent_code);
        }
        const office = await this.officeService.findOne(body.office_id);
        if (office.status == office_status_1.OfficeStatus.OUVERT) {
            throw new common_1.BadRequestException("Un agent y est actuellement. Veillez le descendre");
        }
        office.status = office_status_1.OfficeStatus.OUVERT;
        await office_entity_1.Office.save(office);
        await user_entity_1.User.save(agent);
        const agentOffice = new office_agent_entity_1.AgentOffice();
        agentOffice.agent = agent;
        agentOffice.office = office;
        return await this.agentOfficeRepository.save(agentOffice);
    }
    async changeAgent(id) {
        const agentOffice = await this.findOne(id);
        if (agentOffice.finish_date) {
            throw new common_1.BadRequestException("L'agent n'est plus en garde actuellement. ");
        }
        await user_entity_1.User.save(agentOffice.agent);
        return agentOffice;
    }
    findAll() {
        return this.agentOfficeRepository.find();
    }
    findOne(id) {
        return this.agentOfficeRepository.findOneOrFail({ where: { id: id } }).catch((error) => {
            console.log(error);
            throw new common_2.NotFoundException("Le ogentOffice spécifié n'existe pas");
        });
    }
    findByAgentId(id) {
        return this.agentOfficeRepository.find({ where: { agent: { id: id } } }).catch((error) => {
            console.log(error);
            throw new common_2.NotFoundException("Le ogentOffice spécifié n'existe pas");
        });
    }
    findByAgentIdAndAgentId(agent_id, office_id) {
        return this.agentOfficeRepository.find({ where: { agent: { id: agent_id }, office: { id: office_id } } }).catch((error) => {
            console.log(error);
            throw new common_2.NotFoundException("Le ogentOffice spécifié n'existe pas");
        });
    }
    findActifByAgentIdAndAgentId(agent_id, office_id) {
        return this.agentOfficeRepository.find({ where: { agent: { id: agent_id }, office: { id: office_id }, finish_date: null } }).catch((error) => {
            console.log(error);
            throw new common_2.NotFoundException("Le ogentOffice spécifié n'existe pas");
        });
    }
    findByOfficeId(id) {
        return this.agentOfficeRepository.find({ where: { office: { id: id } } }).catch((error) => {
            console.log(error);
            throw new common_2.NotFoundException("Le ogentOffice spécifié n'existe pas");
        });
    }
    findByOfficeIdAdnStatus(id, status) {
        return this.agentOfficeRepository.find({ where: { office: { id: id, status: status } } }).catch((error) => {
            console.log(error);
            throw new common_2.NotFoundException("Le ogentOffice spécifié n'existe pas");
        });
    }
    remove(id) {
        return this.agentOfficeRepository.delete(id).catch((error) => {
            throw new common_1.BadRequestException("Les ogentOffice indiqué n'existe pas");
        });
    }
};
AgentOfficeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(office_agent_entity_1.AgentOffice)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        user_service_1.UserService, Object])
], AgentOfficeService);
exports.AgentOfficeService = AgentOfficeService;
//# sourceMappingURL=agent-office.service.js.map