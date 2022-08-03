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
exports.ConstanteController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const constante_search_dto_1 = require("../dto/constante-search.dto");
const constante_service_1 = require("../services/constante.service");
const public_decore_1 = require("../utils/public-decore");
let ConstanteController = class ConstanteController {
    constructor(constanteService) {
        this.constanteService = constanteService;
    }
    createConstante(createConstanteDto) {
        return this.constanteService.create(createConstanteDto);
    }
    getAll() {
        return this.constanteService.findAll();
    }
    update(id, createConstanteDto) {
        return this.constanteService.create(createConstanteDto);
    }
    search(body) {
        return this.constanteService.search(body);
    }
    findFirst(body) {
        return this.constanteService.searchFirst(body);
    }
    getOrder() {
        return this.constanteService.getOrder();
    }
    resetOrder() {
        return this.constanteService.resetOrder();
    }
    init() {
        return this.constanteService.init();
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("../entities/constante.entity").Constante }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [constante_search_dto_1.ConstanteDto]),
    __metadata("design:returntype", Promise)
], ConstanteController.prototype, "createConstante", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("../entities/constante.entity").Constante] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConstanteController.prototype, "getAll", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("../entities/constante.entity").Constante }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, constante_search_dto_1.ConstanteDto]),
    __metadata("design:returntype", Promise)
], ConstanteController.prototype, "update", null);
__decorate([
    (0, public_decore_1.Public)(),
    (0, common_1.Post)('search'),
    openapi.ApiResponse({ status: 201, type: [require("../entities/constante.entity").Constante] }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [constante_search_dto_1.ConstanteDto]),
    __metadata("design:returntype", Promise)
], ConstanteController.prototype, "search", null);
__decorate([
    (0, public_decore_1.Public)(),
    (0, common_1.Post)('search-first'),
    openapi.ApiResponse({ status: 201, type: require("../entities/constante.entity").Constante }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [constante_search_dto_1.ConstanteDto]),
    __metadata("design:returntype", Promise)
], ConstanteController.prototype, "findFirst", null);
__decorate([
    (0, public_decore_1.Public)(),
    (0, common_1.Get)('order'),
    openapi.ApiResponse({ status: 200, type: Number }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConstanteController.prototype, "getOrder", null);
__decorate([
    (0, common_1.Get)('order/reset'),
    openapi.ApiResponse({ status: 200, type: Number }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConstanteController.prototype, "resetOrder", null);
__decorate([
    (0, common_1.Get)("init"),
    openapi.ApiResponse({ status: 200, type: [require("../entities/constante.entity").Constante] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConstanteController.prototype, "init", null);
ConstanteController = __decorate([
    (0, common_1.Controller)('constantes'),
    (0, swagger_1.ApiTags)('constantes'),
    __metadata("design:paramtypes", [constante_service_1.ConstanteService])
], ConstanteController);
exports.ConstanteController = ConstanteController;
//# sourceMappingURL=constante.controller.js.map