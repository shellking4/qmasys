import { Repository } from 'typeorm';
import { Office } from 'src/entities/office.entity';
import { OfficeDto } from 'src/dto/office.dto';
import { UpdateOfficeDto } from 'src/dto/update-office.dto';
import { OfficeStatus } from 'src/enums/office-status';
export declare class OfficeService {
    private officeRepository;
    constructor(officeRepository: Repository<Office>);
    create(createOfficeDto: OfficeDto): Promise<OfficeDto & Office>;
    createAll(createOfficeDto: OfficeDto[]): Promise<(OfficeDto & Office)[]>;
    findAll(): Promise<Office[]>;
    findOne(id: number): Promise<Office>;
    findByStatus(status: OfficeStatus): Promise<Office[]>;
    findByName(name: string): Promise<Office>;
    update(id: number, updateOfficeDto: UpdateOfficeDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    init(): Promise<Office[]>;
}
