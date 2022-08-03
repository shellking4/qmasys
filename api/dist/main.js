"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const fs_1 = require("fs");
const app_module_1 = require("./app.module");
const api_validation_error_1 = require("./utils/api-validation-error");
const jwt_auth_guard_1 = require("./utils/jwt-auth.guard");
const bodyParser = require("body-parser");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        exceptionFactory: (errors) => {
            const erreur = new api_validation_error_1.AppValidationError();
            erreur.type = 'VALIDATION';
            erreur.statusCode = 400;
            erreur.message = 'Les données ne sont pas celles espérées';
            erreur.validations = {};
            console.log('ok here');
            errors.forEach((error) => {
                if (error.children && error.children.length > 0) {
                    erreur.validations[error.property] = {};
                    error.children.forEach((ele) => {
                        if (ele.constraints) {
                            erreur.validations[error.property][ele.property] =
                                Object.values(ele.constraints);
                        }
                    });
                }
                if (error.constraints)
                    erreur.validations[error.property] = Object.values(error.constraints);
            });
            return new common_1.BadRequestException(erreur);
        },
    }));
    app.enableCors({ origin: true });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('QMT API')
        .setDescription("Système d'Identification RFID Mobile des conducteurs vehicules(Conducteurs) au Bénin")
        .setVersion('1.0')
        .addTag('cast')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
    }, 'token')
        .build();
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    const reflector = app.get(core_1.Reflector);
    app.useGlobalGuards(new jwt_auth_guard_1.JwtAuthGuard(reflector));
    swagger_1.SwaggerModule.setup('/api/doc', app, document);
    (0, fs_1.writeFileSync)('./swagger.json', JSON.stringify(document));
    await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();
//# sourceMappingURL=main.js.map