import { Controller, Get, Param } from '@nestjs/common';
import { PersonasService } from './personas.service';

@Controller('personas')
export class PersonasController {
  constructor(private readonly personasService: PersonasService) {}

  @Get()
  findAll() {
    return this.personasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.personasService.findOne(+id);
  }
}
