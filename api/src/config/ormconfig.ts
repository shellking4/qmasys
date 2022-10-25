/* eslint-disable prettier/prettier */
import 'dotenv/config'
import { DataSource } from 'typeorm';
import { config } from 'dotenv'; 
import { Constante } from '../entities/constante.entity';
import { Ticket } from '../entities/ticket.entity';
import { User } from '../entities/user.entity';
import { Migration1666647609108 } from '../migrations/1666647609108-Migration';
 

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
   migrations: [Migration1666647609108]
});

export default ormconfig