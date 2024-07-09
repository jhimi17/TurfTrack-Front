import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cancha-list',
  templateUrl: './cancha-list.component.html',
  styleUrls: ['./cancha-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CanchaListComponent {
  canchas = [
    { foto: 'path/to/photo1.jpg', foro: 35, costo: 40, estado: 'Disponible' },
    { foto: 'path/to/photo2.jpg', foro: 35, costo: 40, estado: 'Ocupado' },
    { foto: 'path/to/photo3.jpg', foro: 35, costo: 40, estado: 'Disponible' },
    // Más canchas aquí
  ];

  verMas(cancha: any): void {
    console.log(cancha);
  }
}
