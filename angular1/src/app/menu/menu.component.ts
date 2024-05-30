import { Component, NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  MatMenuModule: any
}

@NgModule({
  imports: [
    // Otros imports...
    MatMenuModule
  ],
  // Otros metadatos...
})
export class AppModule { }
