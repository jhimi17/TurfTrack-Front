import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancha-list',
  templateUrl: './cancha-list.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class CanchaListComponent {
  canchas = [
    { foro: 35, costo: 40, estado: 'Disponible', imagen: 'https://example.com/image1.jpg' },
    { foro: 35, costo: 40, estado: 'Ocupado', imagen: 'https://example.com/image2.jpg' },
    { foro: 35, costo: 40, estado: 'Disponible', imagen: 'https://cdn.www.gob.pe/uploads/document/file/4565839/standard_346638295_775496547541269_4747762917906921504_n.jpg' },
    { foro: 35, costo: 40, estado: 'Ocupado', imagen: 'https://example.com/image3.jpg' },
    { foro: 35, costo: 40, estado: 'Disponible', imagen: 'https://cdn.www.gob.pe/uploads/document/file/4565839/standard_346638295_775496547541269_4747762917906921504_n.jpg' },
    { foro: 35, costo: 40, estado: 'Disponible', imagen: 'https://example.com/image4.jpg' }
  ];

  constructor(private router: Router) {}

  verDetalles(id: number) {
    this.router.navigate(['/cancha-details', id]);
  }
}
