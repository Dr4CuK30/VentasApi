import { Controller, Get, Param } from '@nestjs/common';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get()
  findAll() {
    return this.productosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.productosService.findOne(+id);
  }
}
