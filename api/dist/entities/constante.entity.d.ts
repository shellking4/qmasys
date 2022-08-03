import { ConstanteVisibility } from '../enums/constante-visibility';
import { Audit } from './audit';
export declare class Constante extends Audit {
    static entityName: string;
    id?: number;
    name: string;
    value: string;
    visibilite?: ConstanteVisibility;
    status?: boolean;
    description?: string;
}
