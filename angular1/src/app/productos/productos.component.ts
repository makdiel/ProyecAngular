import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IProducto } from '../interfaces/IProducto';
import { CardComponent } from "../card/card.component";

@Component({
    selector: 'app-productos',
    standalone: true,
    templateUrl: './productos.component.html',
    styleUrl: './productos.component.css',
    imports: [CommonModule, CardComponent]
})
export class ProductosComponent {

  producto: IProducto = {
    nombreproducto: 'Bicicleta',
    descripcion: 'Bicicleta profesional para senderismo',
    precio: 1000,
    categoria: {
      id: 1,
      nombrecategoria: 'DEPORTE'
    },
    imagen: {
      src: "https://picsum.photos/200/300?grayscale",
      alt: "Giant"
    }
  }

  

}


