import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { PersonasService } from '../../personas/personas.service';
import { ProductosService } from '../../productos/productos.service';

@Injectable()
export class CreateMiddleware implements NestMiddleware {
  constructor(
    private readonly personasService: PersonasService,
    private readonly productoService: ProductosService,
  ) {}
  use(req: Request, res: Response, next: () => void) {
    const { producto, persona, ...resto } = req.body;
    this.personasService.findOne(persona).then((per) => {
      if (!per) {
        return res.status(400).json({ error: 'Persona no existe' });
      }
      this.productoService.findOne(producto).then((pro) => {
        if (!pro) {
          return res.status(400).json({ error: 'Producto no existe' });
        }
        req.body = { producto: pro, persona: per, ...resto };
        next();
      });
    });
  }
}
