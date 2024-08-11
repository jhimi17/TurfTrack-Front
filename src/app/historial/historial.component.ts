import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class HistorialComponent {
  reservasPendientes = [
    { nombre: 'Partido “Los supercampeones”', hora: '15:00hrs', fecha: '06/07/2024', cancha: 'Cancha 02' },
    { nombre: 'Partido “Los supercampeones”', hora: '16:00hrs', fecha: '10/07/2024', cancha: 'Cancha 02' }
  ];
}
