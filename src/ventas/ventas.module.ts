import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { VentasController } from './ventas.controller';
import { Venta } from './entities/venta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VistaVenta } from './entities/vista-venta.entity';
import { CreateMiddleware } from './middlewares/create.middleware';
import { PersonasModule } from '../personas/personas.module';
import { ProductosModule } from '../productos/productos.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Venta, VistaVenta]),
    PersonasModule,
    ProductosModule,
  ],
  controllers: [VentasController],
  providers: [VentasService],
})
export class VentasModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CreateMiddleware)
      .forRoutes({ path: 'ventas', method: RequestMethod.POST });
  }
}
