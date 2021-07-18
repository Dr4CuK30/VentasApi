import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { VentasService } from './ventas.service';
import { CreateVentaDto } from './dto/create-venta.dto';

@Controller('ventas')
export class VentasController {
  constructor(private readonly ventasService: VentasService) {}

  @Post()
  create(@Body() createProductoDto: CreateVentaDto) {
    return this.ventasService.create(createProductoDto);
  }

  @Get()
  async findAll(@Query() queryParams) {
    return await this.ventasService.findAll(queryParams);
  }
}
