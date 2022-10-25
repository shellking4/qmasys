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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const common_4 = require("@nestjs/common");
const role_name_1 = require("../enums/role-name");
const genre_1 = require("../enums/genre");
const bcrypt_1 = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let UserService = class UserService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async create(body) {
        var _a;
        const user = new user_entity_1.User();
        Object.keys(body).forEach((cle) => {
            user[cle] = body[cle];
        });
        console.log(body);
        console.log(user);
        user.roles = body.roles;
        (_a = user.roles) !== null && _a !== void 0 ? _a : (user.roles = []);
        if (user.roles.indexOf(role_name_1.RoleName.AGENT) == -1) {
            user.roles.push(role_name_1.RoleName.AGENT);
        }
        const u = await this.userRepository.save(user).catch((error) => {
            console.log(error);
            throw new common_1.BadRequestException("Erreur pendant la réation de l'utilisation. Vérifier que vos donnée n'existe pas déjà");
        });
        return u;
    }
    async register(body) {
        var _a;
        const user = new user_entity_1.User();
        Object.keys(body).forEach((cle) => {
            user[cle] = body[cle];
        });
        user.roles = [role_name_1.RoleName.USER];
        const u = await this.userRepository.save(user).catch((error) => {
            console.log(error);
            throw new common_1.BadRequestException("Erreur pendant la réation de l'utilisation. Vérifier que vos donnée n'existe pas déjà");
        });
        const payload = { pseudo: (_a = user.email) !== null && _a !== void 0 ? _a : user.phone, sub: user.id };
        const token = this.jwtService.sign(payload);
        return { user: u, token: token };
    }
    async login({ username, password }) {
        var _a;
        const user = await this.findOneByPseudo(username).catch((error) => {
            throw new common_1.UnauthorizedException("Numéro de téléphone ou mot de passe invalide");
        });
        const areEqual = await (0, bcrypt_1.compare)(password, user.password);
        if (!areEqual) {
            throw new common_3.HttpException("Nom d'utilisateur ou mot de passe invalide ", common_4.HttpStatus.UNAUTHORIZED);
        }
        const payload = { pseudo: (_a = user.email) !== null && _a !== void 0 ? _a : user.phone, sub: user.id };
        const token = this.jwtService.sign(payload);
        return { user: user, token: token };
    }
    async updateProfile(id, profile, createur) {
        const user = await this.findOne(id);
        user.profile_image = profile.destination + "/" + profile.filename;
        user.editor_id = createur.id;
        return this.userRepository.save(user).catch((error) => {
            console.log(error);
            throw new common_1.BadRequestException("Les données que nous avons réçues ne sont pas celles que nous espérons");
        });
    }
    findAll() {
        return this.userRepository.find();
    }
    findOne(id) {
        return this.userRepository.findOneOrFail({ where: { id: id } }).catch((error) => {
            console.log(error);
            throw new common_1.NotFoundException("L'utilisateur avec l'id " + id + " est introuvable");
        });
    }
    findOneByCode(code) {
        return this.userRepository.findOneOrFail({ where: { code: code } }).catch((error) => {
            console.log(error);
            throw new common_1.NotFoundException("L'utilisateur avec le code " + code + " est introuvable");
        });
    }
    findOneByPseudo(pseudo) {
        common_2.Logger.debug(pseudo);
        return this.userRepository.findOneOrFail({
            where: [{ phone: pseudo }, { email: pseudo }],
        }).catch((error) => {
            console.log(error);
            throw new common_1.NotFoundException("L'utilisateur avec l'pseudo " + pseudo + " est introuvable");
        });
    }
    countByMailOrPhone(mailOrPhone) {
        return this.userRepository.count({ where: [{ email: mailOrPhone }, { phone: mailOrPhone }] }).catch((error) => {
            throw new common_1.InternalServerErrorException("Erreur de traitement: " + error.message);
        });
    }
    countByEmail(mailOrPhone) {
        return this.userRepository.count({ where: { email: mailOrPhone } }).catch((error) => {
            throw new common_1.InternalServerErrorException("Erreur de traitement: " + error.message);
        });
    }
    countByPhone(mailOrPhone) {
        return this.userRepository.count({ where: { phone: mailOrPhone } }).catch((error) => {
            throw new common_1.InternalServerErrorException("Erreur de traitement: " + error.message);
        });
    }
    change(id, updateUserDto) {
        this.findOne(id);
        updateUserDto.id = id;
        return this.userRepository.save(updateUserDto);
    }
    async changePassword(body, user) {
        const areEqual = await (0, bcrypt_1.compare)(body.old, user.password);
        if (!areEqual) {
            throw new common_3.HttpException("Nom d'utilisateur ou mot de passe invalide ", common_4.HttpStatus.UNAUTHORIZED);
        }
        await this.userRepository.update(user.id, { password: await (0, bcrypt_1.hash)(body.nevel, 10) });
        return "Mot de pass mise à jour avec succès";
    }
    async changePhone(body, user) {
        var _a, _b;
        if (((_a = body.old) === null || _a === void 0 ? void 0 : _a.trim()) && ((_b = body.old) === null || _b === void 0 ? void 0 : _b.trim()) != user.phone.trim()) {
            throw new common_3.HttpException("L'ancien numéro de téléphone que vous avez indiqué ne correspond pas au numéro existant", common_4.HttpStatus.UNAUTHORIZED);
        }
        this.userRepository.find({ where: [{ phone: body.nevel }, { phone: body.nevel.trim() }] }).then((users) => {
            if (users.length > 1) {
                throw new common_1.BadRequestException("L'ancien numéro de téléphone que vous avez indiqué existe déjà");
            }
        });
        await this.userRepository.update(user.id, { phone: body.nevel.trim() });
        return "Mot de pass mise à jour avec succès";
    }
    async changeEmail(body, user) {
        var _a, _b;
        if (((_a = body.old) === null || _a === void 0 ? void 0 : _a.trim()) && ((_b = body.old) === null || _b === void 0 ? void 0 : _b.trim()) != user.email.trim()) {
            throw new common_3.HttpException("L'ancien email que vous avez indiqué ne correspond pas à l'email existant", common_4.HttpStatus.UNAUTHORIZED);
        }
        this.userRepository.find({ where: [{ email: body.nevel }, { email: body.nevel.trim() }] }).then((users) => {
            if (users.length > 1) {
                throw new common_1.BadRequestException("L'email que vous avez indiqué existe déjà");
            }
        }).catch((error) => {
            throw new common_1.InternalServerErrorException("Vérification d'email: " + error.message);
        });
        await this.userRepository.update(user.id, { email: body.nevel.trim().toLowerCase() });
        return "Mot de pass mise à jour avec succès";
    }
    changeWithoutControle(updateUserDto) {
        return this.userRepository.save(updateUserDto).catch((error) => {
            console.log(error);
            throw new common_1.BadRequestException("Les données que nous avons réçues ne sont pas celles que nous espérons");
        });
    }
    async update(id, updateUserDto) {
        await this.userRepository.update(id, updateUserDto).catch((error) => {
            console.log(error);
            throw new common_1.NotFoundException("L'utilisateur spécifier n'existe pas");
        });
        return this.findOne(id);
    }
    delete(id) {
        return this.userRepository.delete(id);
    }
    async updateAll() {
        const users = await this.findAll();
        return this.userRepository.save(users).catch((error) => {
            console.log(error);
            throw new common_1.BadRequestException("L'utilisateur spécifier n'existe pas");
        });
    }
    remove(id) {
        return this.userRepository.delete(id).catch((error) => {
            console.log(error);
            throw new common_1.NotFoundException("L'utilisateur spécifier n'existe pas");
        });
    }
    async initOneAdmin() {
        let user;
        try {
            user = await this.findOneByPseudo("+22994851785");
        }
        catch (e) { }
        if (user)
            return;
        user = new user_entity_1.User();
        user.roles = [role_name_1.RoleName.ADMIN];
        user.firstname = "Atlantic";
        user.lastname = "BANK";
        user.gender = genre_1.Genre.MASCULIN;
        user.email = "atlantic@bank.com";
        user.password = "Atlantic@1234";
        user.phone = "+22994851785";
        user.birth_date = new Date();
        const u = await this.userRepository.save(user);
        return u;
    }
};
__decorate([
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UserService.prototype, "updateProfile", null);
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map