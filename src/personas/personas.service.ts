import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Persona } from './entities/persona.entity';

@Injectable()
export class PersonasService {
  constructor(
    @InjectRepository(Persona)
    private readonly personaRepo: Repository<Persona>,
  ) {}

  findAll() {
    return this.personaRepo
      .createQueryBuilder('personas')
      .leftJoinAndSelect('personas.telefonos', 'telefono')
      .getMany();
  }

  async findOne(id: number) {
    return await this.personaRepo
      .createQueryBuilder('personas')
      .leftJoinAndSelect('personas.telefonos', 'telefono')
      .where({ id })
      .getOne();
  }
}
