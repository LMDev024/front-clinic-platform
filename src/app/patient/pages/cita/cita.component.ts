import { Component } from '@angular/core';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.scss']
})
export class CitaComponent {
 public citas: any[] = [
    {
      numero: 1,
      fecha: '2023-06-01',
      hora: '09:00 AM',
      especialista: 'Dr. Juan Pérez',
      costo: '$50',
      estado: 'Confirmada'
    },
    {
      numero: 2,
      fecha: '2023-06-03',
      hora: '10:30 AM',
      especialista: 'Dra. Ana Gómez',
      costo: '$75',
      estado: 'Pendiente'
    },
    {
      numero: 3,
      fecha: '2023-06-05',
      hora: '11:00 AM',
      especialista: 'Dr. Luis Rodríguez',
      costo: '$60',
      estado: 'Confirmada'
    },
    {
      numero: 4,
      fecha: '2023-06-08',
      hora: '03:30 PM',
      especialista: 'Dra. María Fernández',
      costo: '$80',
      estado: 'Cancelada'
    }
  ];
}
