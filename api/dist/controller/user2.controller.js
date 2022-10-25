"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User2Controller = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_service_1 = require("../services/user.service");
const public_decore_1 = require("../utils/public-decore");
const user_dto_1 = require("../dto/user.dto");
const login_dto_1 = require("../dto/login.dto");
const change_password_dto_1 = require("../dto/change-password.dto");
const change_emeail_dto_1 = require("../dto/change-emeail.dto");
let User2Controller = class User2Controller {
    constructor(userservice) {
        this.userservice = userservice;
    }
    create(body) {
        return this.userservice.create(body);
    }
    async getUsers() {
        const users = await this.userservice.findAll();
        return users;
    }
    signin(body) {
        return this.userservice.login(body);
    }
    async update(body, request) {
        const user = request['user'];
        return this.userservice.update(body, user);
    }
    changePassword(request, body) {
        const user = request.user;
        return this.userservice.changePassword(body, user);
    }
    changeEmail(request, body) {
        const user = request.user;
        return this.userservice.changeEmail(body, user);
    }
    async getProfile(req) {
        const user = req['user'];
        return user;
    }
    init() {
        return this.userservice.initOneAdmin();
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("../entities/user.entity").User }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], User2Controller.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("../entities/user.entity").User] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User2Controller.prototype, "getUsers", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, public_decore_1.Public)(),
    openapi.ApiResponse({ status: 201, type: require("../dto/login-respo.dto").LoginRespo }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], User2Controller.prototype, "signin", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("../entities/user.entity").User }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], User2Controller.prototype, "update", null);
__decorate([
    (0, common_1.Put)('change/password'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_password_dto_1.ChangePasswordDto]),
    __metadata("design:returntype", Promise)
], User2Controller.prototype, "changePassword", null);
__decorate([
    (0, common_1.Put)('change/email'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_emeail_dto_1.ChangeEmailDto]),
    __metadata("design:returntype", Promise)
], User2Controller.prototype, "changeEmail", null);
__decorate([
    (0, common_1.Get)('profile'),
    openapi.ApiResponse({ status: 200, type: require("../entities/user.entity").User }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], User2Controller.prototype, "getProfile", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("../entities/user.entity").User }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User2Controller.prototype, "init", null);
User2Controller = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], User2Controller);
exports.User2Controller = User2Controller;
//# sourceMappingURL=user2.controller.js.map