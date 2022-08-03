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
exports.OfficeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const common_2 = require("@nestjs/common");
const office_entity_1 = require("../entities/office.entity");
let OfficeService = class OfficeService {
    constructor(officeRepository) {
        this.officeRepository = officeRepository;
    }
    create(createOfficeDto) {
        return this.officeRepository.save(createOfficeDto);
    }
    createAll(createOfficeDto) {
        return this.officeRepository.save(createOfficeDto).catch((error) => {
            console.log(error);
            throw new common_1.BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
        });
    }
    findAll() {
        return this.officeRepository.find();
    }
    findOne(id) {
        return this.officeRepository.findOneOrFail({ where: { id: id } }).catch((error) => {
            console.log(error);
            throw new common_2.NotFoundException("Le office spécifié n'existe pas");
        });
    }
    findByStatus(status) {
        return this.officeRepository.find({ where: { status: status } });
    }
    findByName(name) {
        return this.officeRepository.find({ where: { name: name } }).then((list) => {
            if (list && list.length > 0)
                return list[0];
            throw new common_2.NotFoundException("Caisse non trouvée");
        }).catch((error) => {
            throw new common_1.InternalServerErrorException("Problème de récupareation de la caisse");
        });
    }
    update(id, updateOfficeDto) {
        return this.officeRepository.update(id, updateOfficeDto).catch((error) => {
            console.log(error);
            throw new common_1.BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
        });
    }
    remove(id) {
        return this.officeRepository.delete(id).catch((error) => {
            throw new common_1.BadRequestException("Les office indiqué n'existe pas");
        });
    }
    async init() {
        let offices = await this.findAll();
        if (!offices || offices.length == 0) {
            const list = [
                {
                    name: "Cise I",
                    description: "La caisse à droite"
                }, {
                    name: "Caise II",
                    description: "La caisse du milieu"
                }, {
                    name: "Caise III",
                    description: "La caisse à gauche"
                }
            ];
            offices = this.officeRepository.create(list);
            return await this.officeRepository.save(offices).catch(error => {
                console.log(error);
                throw new common_1.InternalServerErrorException();
            });
        }
        return offices;
    }
};
OfficeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(office_entity_1.Office)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], OfficeService);
exports.OfficeService = OfficeService;
//# sourceMappingURL=office.service.js.map