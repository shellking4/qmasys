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
exports.OfficeController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const office_dto_1 = require("../dto/office.dto");
const office_status_1 = require("../enums/office-status");
let OfficeController = class OfficeController {
    constructor(officeService) {
        this.officeService = officeService;
    }
    createOffice(createOfficeDto) {
        return this.officeService.create(createOfficeDto);
    }
    getAll() {
        return this.officeService.findAll();
    }
    update(id, createOfficeDto) {
        return this.officeService.create(createOfficeDto);
    }
    geticketByStatus(status) {
        return this.officeService.findByStatus(status);
    }
    geticketByName(status) {
        return this.officeService.findByName(status);
    }
    init() {
        return this.officeService.init();
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("../entities/office.entity").Office }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [office_dto_1.OfficeDto]),
    __metadata("design:returntype", Promise)
], OfficeController.prototype, "createOffice", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("../entities/office.entity").Office] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OfficeController.prototype, "getAll", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("../entities/office.entity").Office }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, office_dto_1.OfficeDto]),
    __metadata("design:returntype", Promise)
], OfficeController.prototype, "update", null);
__decorate([
    (0, common_1.Get)("status/:status"),
    openapi.ApiResponse({ status: 200, type: [require("../entities/office.entity").Office] }),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OfficeController.prototype, "geticketByStatus", null);
__decorate([
    (0, common_1.Get)("names/:name"),
    openapi.ApiResponse({ status: 200, type: require("../entities/office.entity").Office }),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OfficeController.prototype, "geticketByName", null);
__decorate([
    (0, common_1.Get)("init"),
    openapi.ApiResponse({ status: 200, type: [require("../entities/office.entity").Office] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OfficeController.prototype, "init", null);
OfficeController = __decorate([
    (0, common_1.Controller)('offices'),
    (0, swagger_1.ApiTags)('offices'),
    __metadata("design:paramtypes", [Object])
], OfficeController);
exports.OfficeController = OfficeController;
//# sourceMappingURL=office.controller.js.map