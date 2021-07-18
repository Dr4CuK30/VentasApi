import { Venta } from 'src/ventas/entities/venta.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Empresa } from '../../empresas/entities/empresa.entity';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn({ name: 'pk_id', type: 'int' })
  id: number;

  @Column({ name: 'v_nombre' })
  nombre: string;

  @Column({ name: 'm_precio', type: 'money' })
  precio: number;

  @Column({ name: 'v_descripcion' })
  descripcion: string;

  @Column({ name: 'e_tipo' })
  tipo: string;

  @ManyToOne(() => Empresa, (empresa) => empresa.productos)
  @JoinColumn({ name: 'fk_empresa' })
  empresa: Empresa;

  @OneToMany(() => Venta, (venta) => venta.producto)
  ventas: Venta[];
}
