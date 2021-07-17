import { Module } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { EmpresasController } from './empresas.controller';
import { Empresa } from './entities/empresa.entity';
import { Telefono } from '../telefonos/telefono.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [EmpresasController],
  providers: [EmpresasService],
  imports: [TypeOrmModule.forFeature([Empresa, Telefono])],
})
export class EmpresasModule {}
