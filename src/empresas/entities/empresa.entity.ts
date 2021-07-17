import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Telefono } from '../../telefonos/telefono.entity';

@Entity()
export class Empresa {
  @PrimaryColumn({ type: 'int', name: 'pk_id' })
  id: number;

  @Column({ name: 'v_razon_social' })
  razon_social: string;

  @Column({ name: 'v_direccion' })
  direccion: string;

  @Column({ name: 'v_correo' })
  correo: string;

  @OneToMany(() => Telefono, (telefono) => telefono.empresa)
  telefonos: Telefono[];
}
