import { TicketStatus } from '../enums/ticket-status';
import { Audit } from './audit';
import { User } from './user.entity';
export declare class Ticket extends Audit {
    static entityName: string;
    id?: number;
    status?: TicketStatus;
    receive_date: Date;
    finish_date: Date;
    order_nber: number;
    code?: string;
    agent: User;
    hashPassword(): Promise<void>;
}
