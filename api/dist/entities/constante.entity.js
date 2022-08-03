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
exports.Constante = void 0;
const openapi = require("@nestjs/swagger");
const constante_visibility_1 = require("../enums/constante-visibility");
const typeorm_1 = require("typeorm");
const audit_1 = require("./audit");
let Constante = class Constante extends audit_1.Audit {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: false, type: () => Number }, name: { required: true, type: () => String }, value: { required: true, type: () => String }, visibilite: { required: false, enum: require("../enums/constante-visibility").ConstanteVisibility }, status: { required: false, type: () => Boolean }, description: { required: false, type: () => String } };
    }
};
Constante.entityName = "constantes";
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Constante.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    (0, typeorm_1.Index)({ unique: true, where: "status IS TRUE" }),
    __metadata("design:type", String)
], Constante.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Constante.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: constante_visibility_1.ConstanteVisibility.PUBLIC }),
    __metadata("design:type", String)
], Constante.prototype, "visibilite", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Constante.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Constante.prototype, "description", void 0);
Constante = __decorate([
    (0, typeorm_1.Entity)("constantes")
], Constante);
exports.Constante = Constante;
//# sourceMappingURL=constante.entity.js.map