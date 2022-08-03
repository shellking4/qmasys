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
exports.Office = void 0;
const openapi = require("@nestjs/swagger");
const office_status_1 = require("../enums/office-status");
const typeorm_1 = require("typeorm");
const audit_1 = require("./audit");
let Office = class Office extends audit_1.Audit {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: false, type: () => Number }, name: { required: true, type: () => String }, status: { required: false, enum: require("../enums/office-status").OfficeStatus }, description: { required: false, type: () => String } };
    }
};
Office.entityName = "offices";
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Office.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, unique: true }),
    __metadata("design:type", String)
], Office.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: office_status_1.OfficeStatus.FERMER }),
    __metadata("design:type", String)
], Office.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Office.prototype, "description", void 0);
Office = __decorate([
    (0, typeorm_1.Entity)("offices")
], Office);
exports.Office = Office;
//# sourceMappingURL=office.entity.js.map