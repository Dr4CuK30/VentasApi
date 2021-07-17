import { Module } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { VentasController } from './ventas.controller';
import { Venta } from './entities/venta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VistaVenta } from './entities/vista-venta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Venta, VistaVenta])],
  controllers: [VentasController],
  providers: [VentasService],
})
export class VentasModule {}
