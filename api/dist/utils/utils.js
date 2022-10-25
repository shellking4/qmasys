"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editFileName = exports.pdfFileFilter = exports.profileFileFilter = exports.imageOrPdfFileFilter = exports.imageFileFilter = void 0;
const path_1 = require("path");
const common_1 = require("@nestjs/common");
const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new common_1.BadRequestException("Seul les fichiers images sont autoriser!"), false);
    }
    callback(null, true);
};
exports.imageFileFilter = imageFileFilter;
const imageOrPdfFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|pdf)$/)) {
        return callback(new common_1.BadRequestException("Seul les fichiers images sont autoriser!"), false);
    }
    callback(null, true);
};
exports.imageOrPdfFileFilter = imageOrPdfFileFilter;
const profileFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return callback(new common_1.BadRequestException("Seul les fichiers images sont autoriser!"), false);
    }
    callback(null, true);
};
exports.profileFileFilter = profileFileFilter;
const pdfFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(pdf)$/)) {
        return callback(new common_1.BadRequestException("Seul les fichiers images sont autoriser!"), false);
    }
    callback(null, true);
};
exports.pdfFileFilter = pdfFileFilter;
const editFileName = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = (0, path_1.extname)(file.originalname);
    const randomName = Date.now();
    callback(null, `${name}-${randomName}${fileExtName}`);
};
exports.editFileName = editFileName;
//# sourceMappingURL=utils.js.map