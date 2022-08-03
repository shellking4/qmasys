import { AgentOfficeDto } from 'src/dto/agent-service.dto';
import { AgentOffice } from 'src/entities/office-agent.entity';
import { AgentOfficeService } from 'src/services/agent-office.service';
export declare class OfficeAgentController {
    private readonly agentOfficeService;
    constructor(agentOfficeService: AgentOfficeService);
    createOffice(createOfficeDto: AgentOfficeDto): Promise<AgentOffice>;
    getAll(): Promise<AgentOffice[]>;
    getOne(id: number): Promise<AgentOffice>;
    changeOfficier(id: number): Promise<AgentOffice>;
}
