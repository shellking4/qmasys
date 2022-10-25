import { Audit } from './audit';
import { Office } from './office.entity';
import { User } from './user.entity';
export declare class AgentOffice extends Audit {
    static entityName: string;
    id?: number;
    finish_date: Date;
    agent: User;
    office: Office;
}
