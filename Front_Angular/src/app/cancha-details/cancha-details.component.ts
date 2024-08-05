import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReservaModalComponent } from '../reserva-modal/reserva-modal.component';

@Component({
  selector: 'app-cancha-details',
  templateUrl: './cancha-details.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, ReservaModalComponent]
})
export class CanchaDetailsComponent implements OnInit {
  canchaId: number = 0;
  horas: string[] = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];

  estados: { [key: string]: { [key: string]: string } } = {
    Lunes: this.generarEstado(),
    Martes: this.generarEstado(),
    Miércoles: this.generarEstado(),
    Jueves: this.generarEstado(),
    Viernes: this.generarEstado(),
    Sábado: this.generarEstado(),
    Domingo: this.generarEstado()
  };

  seleccion: { dia: string, hora: string }[] = [];
  mostrarModal: boolean = false;
  horasSeleccionadas: number = 0;
  montoAPagar: number = 0;

  diasDeLaSemana: { nombre: string, fecha: Date, estado: {[key: string]: string} }[] = [];
  hoy: Date = new Date();

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.canchaId = +this.route.snapshot.paramMap.get('id')!;
    this.actualizarFechas();
  }

  generarEstado(): { [key: string]: string } {
    let estado: { [key: string]: string } = {};
    this.horas.forEach(hora => estado[hora] = 'Disponible');
    return estado;
  }

  actualizarFechas() {
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let fechaInicio = new Date();
    fechaInicio.setDate(this.hoy.getDate() - this.hoy.getDay() + 1); // Empieza en Lunes

    for (let i = 0; i < 7; i++) {
      let fecha = new Date(fechaInicio);
      fecha.setDate(fechaInicio.getDate() + i);
      let diaNombre = dias[fecha.getDay()];

      if (fecha < this.hoy) {
        this.diasDeLaSemana.push({
          nombre: diaNombre,
          fecha,
          estado: this.horas.reduce((estado: {[key: string]: string}, hora) => {
            estado[hora] = '';
            return estado;
          }, {})
        });
      } else {
        let estado = this.estados[diaNombre];
        // Marcar algunas horas como ocupadas
        if (fecha > this.hoy) {
          estado = { ...estado };
          this.horas.forEach((hora, index) => {
            if (index % 4 === 0) { // Marcando algunas horas como ocupadas
              estado[hora] = 'Ocupado';
            }
          });
        }

        this.diasDeLaSemana.push({
          nombre: diaNombre,
          fecha,
          estado
        });
      }
    }
  }

  seleccionarCelda(dia: string, hora: string) {
    const index = this.seleccion.findIndex(s => s.dia === dia && s.hora === hora);
    if (index >= 0) {
      this.seleccion.splice(index, 1);
    } else {
      this.seleccion.push({ dia, hora });
    }
  }

  confirmarReserva() {
    this.horasSeleccionadas = this.seleccion.length;
    this.montoAPagar = this.horasSeleccionadas * 40;
    this.mostrarModal = true;
  }

  estaSeleccionado(dia: string, hora: string): boolean {
    return this.seleccion.some(s => s.dia === dia && s.hora === hora);
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  esHoy(fecha: Date): boolean {
    return fecha.getDate() === this.hoy.getDate() &&
           fecha.getMonth() === this.hoy.getMonth() &&
           fecha.getFullYear() === this.hoy.getFullYear();
  }
}
