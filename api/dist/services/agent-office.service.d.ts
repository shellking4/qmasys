import { Repository } from 'typeorm';
import { AgentOfficeDto } from 'src/dto/agent-service.dto';
import { AgentOffice } from 'src/entities/office-agent.entity';
import { UserService } from './user.service';
import { OfficeStatus } from 'src/enums/office-status';
export declare class AgentOfficeService {
    private agentOfficeRepository;
    private readonly userService;
    private readonly officeService;
    constructor(agentOfficeRepository: Repository<AgentOffice>, userService: UserService, officeService: any);
    create(body: AgentOfficeDto): Promise<AgentOffice>;
    changeAgent(id: number): Promise<AgentOffice>;
    findAll(): Promise<AgentOffice[]>;
    findOne(id: number): Promise<AgentOffice>;
    findByAgentId(id: number): Promise<AgentOffice[]>;
    findByAgentIdAndAgentId(agent_id: number, office_id: number): Promise<AgentOffice[]>;
    findActifByAgentIdAndAgentId(agent_id: number, office_id: number): Promise<AgentOffice[]>;
    findByOfficeId(id: number): Promise<AgentOffice[]>;
    findByOfficeIdAdnStatus(id: number, status: OfficeStatus): Promise<AgentOffice[]>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
