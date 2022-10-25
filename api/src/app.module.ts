/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConstanteController } from './controller/constante.controller';
import { OfficeController } from './controller/office.controller';
import { TikectController } from './controller/ticket.controller';
import { UserController } from './controller/user.controller';
import { Constante } from './entities/constante.entity';
import { Ticket } from './entities/ticket.entity';
import { User } from './entities/user.entity';
import { TicketGateway } from './getways/ticket.getway';
import { ConstanteService } from './services/constante.service';
import { JwtStrategy } from './services/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketService } from './services/ticket.service';
import { UserService } from './services/user.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [
          Constante,
          Ticket,
          User
        ],
        autoLoadEntities: true,
      }),
    }),
    TypeOrmModule.forFeature([
      Constante,
      Ticket,
      User
    ]),
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
  ],
  controllers: [AppController, UserController, TikectController, ConstanteController],
  providers: [
    AppService,
    JwtStrategy,
    UserService,
    TicketService,
    ConstanteService,
    TicketGateway
  ],
})
export class AppModule {}
