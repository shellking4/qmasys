import { Genre } from 'src/enums/genre';
import { RoleName } from 'src/enums/role-name';
export declare class UserDto {
    firstname: string;
    lastname: string;
    gender: Genre;
    password: string;
    office_name: string;
    email?: string;
    birth_date: Date;
    phone: string;
    roles: RoleName[];
}
