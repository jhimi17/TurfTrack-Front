import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reserva-modal',
  templateUrl: './reserva-modal.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ReservaModalComponent {
  @Input() horasSeleccionadas: number = 0;
  @Input() montoAPagar: number = 0;
  @Output() close = new EventEmitter<void>();

  nick: string = '';
  nombreSolicitante: string = 'Jorge Gutierrez';
  numeroCelular: string = '';
  dni: string = '75846925';

  cancelar() {
    this.close.emit();
  }

  pagar() {
    // Lógica para procesar el pago y cerrar el modal
    console.log('Reserva confirmada:', {
      nick: this.nick,
      nombreSolicitante: this.nombreSolicitante,
      numeroCelular: this.numeroCelular,
      dni: this.dni,
      horasSeleccionadas: this.horasSeleccionadas,
      montoAPagar: this.montoAPagar
    });
    this.close.emit(); // Cerrar el modal después del pago
  }
}
