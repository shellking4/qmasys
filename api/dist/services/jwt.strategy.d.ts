import { Strategy } from "passport-jwt";
import "dotenv/config";
import { UserService } from "./user.service";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userService;
    constructor(userService: UserService);
    validate({ pseudo }: any): Promise<any>;
}
export {};
