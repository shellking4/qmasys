"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
const constante_entity_1 = require("../entities/constante.entity");
const ticket_entity_1 = require("../entities/ticket.entity");
const user_entity_1 = require("../entities/user.entity");
const _1659440137649_Migration_1 = require("../migrations/1659440137649-Migration");
(0, dotenv_1.config)();
const ormconfig = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [
        constante_entity_1.Constante,
        ticket_entity_1.Ticket,
        user_entity_1.User
    ],
    migrations: [_1659440137649_Migration_1.Migration1659440137649]
});
exports.default = ormconfig;
//# sourceMappingURL=ormconfig.js.map