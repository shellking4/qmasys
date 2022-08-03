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
exports.ConstanteDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const constante_visibility_1 = require("../enums/constante-visibility");
const class_validator_2 = require("class-validator");
const class_validator_3 = require("class-validator");
class ConstanteDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: false, type: () => Number }, nom: { required: false, type: () => String }, valeur: { required: false, type: () => String }, visibilite: { required: false, enum: require("../enums/constante-visibility").ConstanteVisibility }, status: { required: false, type: () => Boolean }, description: { required: false, type: () => String } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ConstanteDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ConstanteDto.prototype, "nom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ConstanteDto.prototype, "valeur", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_3.IsEnum)({ type: constante_visibility_1.ConstanteVisibility }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ConstanteDto.prototype, "visibilite", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_2.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], ConstanteDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ConstanteDto.prototype, "description", void 0);
exports.ConstanteDto = ConstanteDto;
//# sourceMappingURL=constante-search.dto.js.map