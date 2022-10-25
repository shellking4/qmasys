"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRespo = void 0;
const openapi = require("@nestjs/swagger");
class LoginRespo {
    static _OPENAPI_METADATA_FACTORY() {
        return { token: { required: true, type: () => String }, user: { required: true, type: () => require("../entities/user.entity").User } };
    }
}
exports.LoginRespo = LoginRespo;
//# sourceMappingURL=login-respo.dto.js.map