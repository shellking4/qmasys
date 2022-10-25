"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOfficeDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const office_dto_1 = require("./office.dto");
class UpdateOfficeDto extends (0, swagger_1.PartialType)(office_dto_1.OfficeDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateOfficeDto = UpdateOfficeDto;
//# sourceMappingURL=update-office.dto.js.map