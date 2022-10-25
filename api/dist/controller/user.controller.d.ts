import { User } from 'src/entities/user.entity';
import { UserService } from 'src/services/user.service';
import { UserDto } from '../dto/user.dto';
import { LoginDto } from '../dto/login.dto';
import { LoginRespo } from '../dto/login-respo.dto';
import { ChangePasswordDto } from 'src/dto/change-password.dto';
import { ChangeEmailDto } from 'src/dto/change-emeail.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';
export declare class UserController {
    private readonly userservice;
    constructor(userservice: UserService);
    create(body: UserDto): Promise<User>;
    getUsers(): Promise<User[]>;
    signin(body: LoginDto): Promise<LoginRespo>;
    checkIfEmailExists(email: string): Promise<any>;
    checkIfPhoneExists(phone: string): Promise<any>;
    update(body: UpdateUserDto, request: any): Promise<User>;
    changePassword(request: any, body: ChangePasswordDto): Promise<string>;
    changeEmail(request: any, body: ChangeEmailDto): Promise<string>;
    getProfile(req: any): Promise<User>;
    deleteUser(id: number): Promise<import("typeorm").DeleteResult>;
    init(): Promise<User>;
}
