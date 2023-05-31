import { Component } from '@angular/core';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.scss']
})
export class UpdatePatientComponent {
  primerNombre: string;
  segundoNombre: string;
  primerApellido: string;
  segundoApellido: string;


  constructor() {
    this.primerNombre = '';
    this.segundoNombre = '';
    this.primerApellido = '';
    this.segundoApellido = '';

  }

  actualizarDatos() {
    // Lógica para actualizar los datos en el backend
    console.log('Datos actualizados:');
    console.log('Primer Nombre:', this.primerNombre);
    console.log('Segundo Nombre:', this.segundoNombre);
    console.log('Primer Apellido:', this.primerApellido);
    console.log('Segundo Apellido:', this.segundoApellido);

  }
}
