import { OfficeDto } from 'src/dto/office.dto';
import { Office } from 'src/entities/office.entity';
import { OfficeStatus } from 'src/enums/office-status';
export declare class OfficeController {
    private readonly officeService;
    constructor(officeService: any);
    createOffice(createOfficeDto: OfficeDto): Promise<Office>;
    getAll(): Promise<Office[]>;
    update(id: number, createOfficeDto: OfficeDto): Promise<Office>;
    geticketByStatus(status: OfficeStatus): Promise<Office[]>;
    geticketByName(status: OfficeStatus): Promise<Office>;
    init(): Promise<Office[]>;
}
