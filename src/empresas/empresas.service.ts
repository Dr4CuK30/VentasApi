import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from './entities/empresa.entity';

@Injectable()
export class EmpresasService {
  constructor(
    @InjectRepository(Empresa)
    private readonly empresaRepo: Repository<Empresa>,
  ) {}

  async findAll() {
    return await this.empresaRepo
      .createQueryBuilder('personas')
      .leftJoinAndSelect('personas.telefonos', 'telefono')
      .getMany();
  }
  async findProductosByEmpresa(id: number) {
    const empresa = await this.empresaRepo
      .createQueryBuilder('empresa')
      .innerJoinAndSelect('empresa.productos', 'producto')
      .where(`empresa.id = ${id}`)
      .getOne();
    return empresa?.productos || [];
  }
}
