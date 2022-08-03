import { OfficeStatus } from '../enums/office-status';
import { Audit } from './audit';
export declare class Office extends Audit {
    static entityName: string;
    id?: number;
    name: string;
    status?: OfficeStatus;
    description?: string;
}
