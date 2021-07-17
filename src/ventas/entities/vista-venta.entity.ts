import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class VistaVenta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  empresa: string;

  @Column()
  descripcion: string;

  @Column({ type: 'int' })
  cantidad: number;

  @Column({ type: 'date' })
  fecha: Date;

  @Column()
  producto: string;

  @Column()
  valor_total: string;

  @Column()
  comprador: string;
}
