import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from './entities/empresa.entity';

@Injectable()
export class EmpresasService {
  constructor(
    @InjectRepository(Empresa)
    private readonly empresaRepo: Repository<Empresa>,
  ) {}
  create(createEmpresaDto: CreateEmpresaDto) {
    return 'This action adds a new empresa';
  }

  async findAll() {
    return await this.empresaRepo.find();
  }
  async findProductosByEmpresa(id: number) {
    const empresa = await this.empresaRepo
      .createQueryBuilder('empresa')
      .innerJoinAndSelect('empresa.productos', 'producto')
      .where(`empresa.id = ${id}`)
      .getOne();
    return empresa?.productos || [];
  }

  findOne(id: number) {
    return `This action returns a #${id} empresa`;
  }

  update(id: number, updateEmpresaDto: UpdateEmpresaDto) {
    return `This action updates a #${id} empresa`;
  }

  remove(id: number) {
    return `This action removes a #${id} empresa`;
  }
}
