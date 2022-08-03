/* eslint-disable prettier/prettier */
import 'dotenv/config'
import { DataSource } from 'typeorm';
import { config } from 'dotenv'; 
import { Constante } from '../entities/constante.entity';
import { AgentOffice } from "../entities/office-agent.entity"
import { Office } from '../entities/office.entity';
import { Ticket } from '../entities/ticket.entity';
import { User } from '../entities/user.entity';
import { Migration1659440137649 } from '../migrations/1659440137649-Migration';
 

config();

 
const ormconfig = new DataSource({
    type:  "mysql",
    host: process.env.DATABASE_HOST,
    port: (process.env.DATABASE_PORT as any) as number,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [
        Constante,
        Ticket,
        User
    ],
   migrations: [Migration1659440137649]
});

export default ormconfig