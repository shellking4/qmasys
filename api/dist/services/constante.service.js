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
exports.ConstanteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const constante_entity_1 = require("../entities/constante.entity");
const typeorm_2 = require("@nestjs/typeorm");
const common_2 = require("@nestjs/common");
let ConstanteService = class ConstanteService {
    constructor(constanteRepository) {
        this.constanteRepository = constanteRepository;
    }
    create(createConstanteDto) {
        return this.constanteRepository.save(createConstanteDto);
    }
    createAll(createConstanteDto) {
        return this.constanteRepository.save(createConstanteDto).catch((error) => {
            console.log(error);
            throw new common_1.BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
        });
    }
    findAll() {
        return this.constanteRepository.find();
    }
    findOrder() {
        return this.constanteRepository.findOneOrFail({ where: { name: "ORDER" } }).catch((error) => {
            console.log(error);
            throw new common_2.NotFoundException("Le constante spécifié n'existe pas");
        });
    }
    async getOrder() {
        const order = await this.findOrder();
        const value = +order.value + 1;
        order.value = value + "";
        await constante_entity_1.Constante.save(order);
        return value;
    }
    async resetOrder() {
        const order = await this.findOrder();
        order.value = "0";
        await constante_entity_1.Constante.save(order);
        return 0;
    }
    findOne(id) {
        return this.constanteRepository.findOneOrFail({ where: { id: id } }).catch((error) => {
            console.log(error);
            throw new common_2.NotFoundException("Le constante spécifié n'existe pas");
        });
    }
    searchFirst(search) {
        return this.constanteRepository.find({ where: search }).then((list) => {
            if (list && list.length > 0) {
                return list[0];
            }
            throw new common_2.NotFoundException("Aucun enrégistrement ne correspond à votre recherche");
        }).catch((error) => {
            console.log(error);
            throw new common_1.BadRequestException("Une erreur s'est produit pendant la recherche");
        });
    }
    search(search) {
        return this.constanteRepository.find({ where: search }).catch((error) => {
            throw new common_1.BadRequestException("Une erreur s'est produit pendant la recherche");
        });
    }
    remove(id) {
        return this.constanteRepository.delete(id).catch((error) => {
            throw new common_1.BadRequestException("Les constante indiqué n'existe pas");
        });
    }
    async init() {
        let constantes = await this.findAll();
        if (!constantes || constantes.length == 0) {
            const list = [
                {
                    name: "BANK",
                    value: "ECOBANQUE"
                }, {
                    name: "EMAIL",
                    value: "client@ecobanque.com"
                }, {
                    name: "ORDER",
                    value: "1"
                }, {
                    name: "GLOBAL ORDER",
                    value: "1"
                }
            ];
            constantes = this.constanteRepository.create(list);
            return await this.constanteRepository.save(constantes).catch(error => {
                console.log(error);
                throw new common_1.InternalServerErrorException();
            });
        }
        return constantes;
    }
};
ConstanteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(constante_entity_1.Constante)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ConstanteService);
exports.ConstanteService = ConstanteService;
//# sourceMappingURL=constante.service.js.map