import { Repository } from 'typeorm';
import { Constante } from '../entities/constante.entity';
import { ConstanteDto } from 'src/dto/constante-search.dto';
export declare class ConstanteService {
    private constanteRepository;
    constructor(constanteRepository: Repository<Constante>);
    create(createConstanteDto: ConstanteDto): Promise<ConstanteDto & Constante>;
    createAll(createConstanteDto: ConstanteDto[]): Promise<(ConstanteDto & Constante)[]>;
    findAll(): Promise<Constante[]>;
    findOrder(): Promise<Constante>;
    getOrder(): Promise<number>;
    resetOrder(): Promise<number>;
    findOne(id: number): Promise<Constante>;
    searchFirst(search: ConstanteDto): Promise<Constante>;
    search(search: ConstanteDto): Promise<Constante[]>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    init(): Promise<Constante[]>;
}
