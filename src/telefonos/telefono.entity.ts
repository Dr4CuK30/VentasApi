import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Empresa } from '../empresas/entities/empresa.entity';
import { Persona } from '../personas/entities/persona.entity';

@Entity()
export class Telefono {
  @PrimaryColumn({ name: 'n_ext', type: 'int' })
  ext: number;

  @PrimaryColumn({ name: 'n_numero', type: 'bigint' })
  numero: number;

  @ManyToOne(() => Empresa, (empresa) => empresa.telefonos)
  @JoinColumn({ name: 'fk_empresa' })
  empresa: Empresa;

  @ManyToOne(() => Persona, (persona) => persona.telefonos)
  @JoinColumn({ name: 'fk_persona' })
  persona: Persona;
}
