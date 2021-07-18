import { IsInt, IsObject, Min } from 'class-validator';
import { Persona } from 'src/personas/entities/persona.entity';
import { Producto } from '../../productos/entities/producto.entity';

export class CreateVentaDto {
  @IsInt({ message: 'Dato no valido' })
  @Min(1, { message: 'Este valor debe ser mayor a 1' })
  cantidad: number;

  @IsObject()
  producto: Producto;

  @IsObject()
  persona: Persona;
}
