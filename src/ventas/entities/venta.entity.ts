import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Producto } from '../../productos/entities/producto.entity';
import { Persona } from '../../personas/entities/persona.entity';

@Entity()
export class Venta {
  @PrimaryGeneratedColumn({ name: 'pk_id' })
  id: number;

  @Column({ name: 'n_cantidad', type: 'int' })
  cantidad: number;

  @ManyToOne(() => Producto, (producto) => producto.ventas)
  @JoinColumn({ name: 'fk_producto' })
  producto: Producto;

  @ManyToOne(() => Persona, (persona) => persona.ventas)
  @JoinColumn({ name: 'fk_persona' })
  persona: Persona;
}
