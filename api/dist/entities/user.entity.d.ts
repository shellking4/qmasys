import { Audit } from "./audit";
import { Genre } from '../enums/genre';
import { RoleName } from '../enums/role-name';
export declare class User extends Audit {
    static entityName: string;
    id: number;
    firstname: string;
    lastname?: string;
    office_name: string;
    gender?: Genre;
    password?: string;
    email?: string;
    birth_date?: Date;
    phone?: string;
    code?: string;
    profile_image?: string;
    roles?: RoleName[];
    hashPassword(): Promise<void>;
}
