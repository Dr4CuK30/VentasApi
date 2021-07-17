import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Empresa } from '../empresas/entities/empresa.entity';
import { Persona } from '../personas/entities/persona.entity';

@Entity()
export class Telefono {
  @PrimaryColumn({ name: 'n_ext', type: 'int' })
  ext: number;

  @PrimaryColumn({ name: 'n_numero', type: 'bigint' })
  numero: number;

  @ManyToOne(() => Empresa, (empresa) => empresa.telefonos)
  empresa: Empresa;

  @ManyToOne(() => Persona, (persona) => persona.telefonos)
  persona: Persona;
}
