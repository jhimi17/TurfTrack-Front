import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cancha-list',
  templateUrl: './cancha-list.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class CanchaListComponent {
  canchas = [
    { id: 1, foro: 35, costo: 40, estado: 'Disponible', imagen: 'https://example.com/image1.jpg' },
    { id: 2, foro: 35, costo: 40, estado: 'Ocupado', imagen: 'https://example.com/image2.jpg' },
    { id: 3, foro: 35, costo: 40, estado: 'Disponible', imagen: 'https://cdn.www.gob.pe/uploads/document/file/4565839/standard_346638295_775496547541269_4747762917906921504_n.jpg' },
    { id: 4, foro: 35, costo: 40, estado: 'Ocupado', imagen: 'https://example.com/image3.jpg' },
    { id: 5, foro: 35, costo: 40, estado: 'Disponible', imagen: 'https://cdn.www.gob.pe/uploads/document/file/4565839/standard_346638295_775496547541269_4747762917906921504_n.jpg' },
    { id: 6, foro: 35, costo: 40, estado: 'Disponible', imagen: 'https://example.com/image4.jpg' }
  ];
}
