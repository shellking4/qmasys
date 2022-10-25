import { ConstanteDto } from 'src/dto/constante-search.dto';
import { Constante } from 'src/entities/constante.entity';
import { ConstanteService } from 'src/services/constante.service';
export declare class ConstanteController {
    private readonly constanteService;
    constructor(constanteService: ConstanteService);
    createConstante(createConstanteDto: ConstanteDto): Promise<Constante>;
    getAll(): Promise<Constante[]>;
    update(id: number, createConstanteDto: ConstanteDto): Promise<Constante>;
    search(body: ConstanteDto): Promise<Constante[]>;
    findFirst(body: ConstanteDto): Promise<Constante>;
    getOrder(): Promise<number>;
    resetOrder(): Promise<number>;
    init(): Promise<Constante[]>;
}
