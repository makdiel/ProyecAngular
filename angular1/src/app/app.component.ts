import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { IProducto } from './interfaces/IProducto';
import { CardComponent } from "./card/card.component";
import { FooterComponent } from './footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from "./menu/menu.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ProductosComponent, CardComponent, FooterComponent, MenuComponent]
})
export class AppComponent {
  title = 'Productos';
 
}

@NgModule({
  imports: [
    // Otros imports...
    MatMenuModule
  ],
  // Otros metadatos...
})
export class AppModule { }
