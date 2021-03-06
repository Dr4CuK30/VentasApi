import { Telefono } from 'src/telefonos/telefono.entity';
import { Venta } from 'src/ventas/entities/venta.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class Persona {
  @PrimaryColumn({ type: 'int', name: 'pk_documento' })
  id: number;

  @Column({ name: 'v_nombre' })
  nombre: string;

  @Column({ name: 'v_correo' })
  correo: string;

  @Column({ name: 'f_fecha_nacimiento', type: 'date' })
  fecha: Date;

  @OneToMany(() => Telefono, (telefono) => telefono.persona)
  telefonos: Telefono[];

  @OneToMany(() => Venta, (venta) => venta.producto)
  ventas: Venta[];
}
