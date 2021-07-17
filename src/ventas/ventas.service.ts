import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository, Between } from 'typeorm';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { Venta } from './entities/venta.entity';
import { VistaVenta } from './entities/vista-venta.entity';

@Injectable()
export class VentasService {
  constructor(
    @InjectRepository(Venta)
    private readonly ventasRepo: Repository<Venta>,

    @InjectRepository(VistaVenta)
    private readonly vistasRepo: Repository<VistaVenta>,
  ) {}

  async findAll(queryParams) {
    const { comprador, empresa, producto, fmin, fmax } = queryParams;
    return await this.vistasRepo.find({
      where: {
        fecha: Between(fmin || '1970-01-01', fmax || new Date().toISOString()),
        comprador: Like(`%${comprador || ''}%`),
        empresa: Like(`%${empresa || ''}%`),
        producto: Like(`%${producto || ''}%`),
      },
    });
  }
}
