"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const constante_controller_1 = require("./controller/constante.controller");
const ticket_controller_1 = require("./controller/ticket.controller");
const user_controller_1 = require("./controller/user.controller");
const constante_entity_1 = require("./entities/constante.entity");
const ticket_entity_1 = require("./entities/ticket.entity");
const user_entity_1 = require("./entities/user.entity");
const ticket_getway_1 = require("./getways/ticket.getway");
const constante_service_1 = require("./services/constante.service");
const jwt_strategy_1 = require("./services/jwt.strategy");
const typeorm_1 = require("@nestjs/typeorm");
const ticket_service_1 = require("./services/ticket.service");
const user_service_1 = require("./services/user.service");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'mysql',
                    host: configService.get('DATABASE_HOST'),
                    port: configService.get('DATABASE_PORT'),
                    username: configService.get('DATABASE_USER'),
                    password: configService.get('DATABASE_PASSWORD'),
                    database: configService.get('DATABASE_NAME'),
                    entities: [
                        constante_entity_1.Constante,
                        ticket_entity_1.Ticket,
                        user_entity_1.User
                    ],
                    autoLoadEntities: true,
                }),
            }),
            typeorm_1.TypeOrmModule.forFeature([
                constante_entity_1.Constante,
                ticket_entity_1.Ticket,
                user_entity_1.User
            ]),
            passport_1.PassportModule.register({
                defaultStrategy: 'jwt',
                property: 'user',
                session: false,
            }),
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET,
            }),
        ],
        controllers: [app_controller_1.AppController, user_controller_1.UserController, ticket_controller_1.TikectController, constante_controller_1.ConstanteController],
        providers: [
            app_service_1.AppService,
            jwt_strategy_1.JwtStrategy,
            user_service_1.UserService,
            ticket_service_1.TicketService,
            constante_service_1.ConstanteService,
            ticket_getway_1.TicketGateway
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map