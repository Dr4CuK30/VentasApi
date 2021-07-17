import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresasModule } from './empresas/empresas.module';
import { VentasModule } from './ventas/ventas.module';
import { ProductosModule } from './productos/productos.module';
import { PersonasModule } from './personas/personas.module';

@Module({
  imports: [
    EmpresasModule,
    VentasModule,
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'pruebaswork.database.windows.net',
      username: 'root1',
      password: 'Pass1234',
      database: 'prueba_tec',
      entities: [__dirname + './**/**/*entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: false,
    }),
    ProductosModule,
    PersonasModule,
  ],
})
export class AppModule {}
