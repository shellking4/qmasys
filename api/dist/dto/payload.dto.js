"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayloadDto = void 0;
const openapi = require("@nestjs/swagger");
class PayloadDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { pseudo: { required: true, type: () => String }, sub: { required: true, type: () => Number } };
    }
}
exports.PayloadDto = PayloadDto;
//# sourceMappingURL=payload.dto.js.map