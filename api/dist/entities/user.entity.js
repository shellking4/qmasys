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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const bcrypt_1 = require("bcrypt");
const audit_1 = require("./audit");
const genre_1 = require("../enums/genre");
const class_transformer_1 = require("class-transformer");
const role_name_1 = require("../enums/role-name");
let User = class User extends audit_1.Audit {
    constructor() {
        super(...arguments);
        this.code = (0, uuid_1.v4)();
    }
    async hashPassword() {
        var _a, _b, _c;
        this.email = (_b = (_a = this.email) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === null || _b === void 0 ? void 0 : _b.trim();
        this.phone = (_c = this.phone) === null || _c === void 0 ? void 0 : _c.trim();
        this.password = await (0, bcrypt_1.hash)(this.password, 10);
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, firstname: { required: true, type: () => String }, lastname: { required: false, type: () => String }, office_name: { required: true, type: () => String }, gender: { required: false, enum: require("../enums/genre").Genre }, password: { required: false, type: () => String }, email: { required: false, type: () => String }, birth_date: { required: false, type: () => Date }, phone: { required: false, type: () => String }, code: { required: false, type: () => String, default: (0, uuid_1.v4)() }, profile_image: { required: false, type: () => String }, roles: { required: false, enum: require("../enums/role-name").RoleName, isArray: true } };
    }
};
User.entityName = "users";
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "firstname", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "lastname", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: 'office_name' }),
    __metadata("design:type", String)
], User.prototype, "office_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "gender", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], User.prototype, "birth_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], User.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "profile_image", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: role_name_1.RoleName,
        default: [role_name_1.RoleName.AGENT]
    }),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "hashPassword", null);
User = __decorate([
    (0, typeorm_1.Entity)("users")
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map