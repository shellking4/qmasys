import { User } from 'src/entities/user.entity';
import { UserService } from 'src/services/user.service';
import { UserDto } from '../dto/user.dto';
import { LoginDto } from '../dto/login.dto';
import { LoginRespo } from '../dto/login-respo.dto';
import { ChangePasswordDto } from 'src/dto/change-password.dto';
import { ChangeEmailDto } from 'src/dto/change-emeail.dto';
export declare class User2Controller {
    private readonly userservice;
    constructor(userservice: UserService);
    create(body: UserDto): Promise<User>;
    getUsers(): Promise<User[]>;
    signin(body: LoginDto): Promise<LoginRespo>;
    update(body: any, request: any): Promise<User>;
    changePassword(request: any, body: ChangePasswordDto): Promise<string>;
    changeEmail(request: any, body: ChangeEmailDto): Promise<string>;
    getProfile(req: any): Promise<User>;
    init(): Promise<User>;
}
