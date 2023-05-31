import { Component } from '@angular/core';
import { Profesional } from '../../interface/profesional';

@Component({
  selector: 'app-search-profesional',
  templateUrl: './search-profesional.component.html',
  styleUrls: ['./search-profesional.component.scss']
})
export class SearchProfesionalComponent {
  public profesionalesFiltrados: Profesional[] = [];

  public profesionales: Profesional[] = [
    {
      nombre: "Juan",
      apellido: "Pérez",
      especialidad: "Cardiología",
      horario: "8:00 AM - 12:00 PM",
      ubicacion: "Ciudad A"
    },
    {
      nombre: "María",
      apellido: "González",
      especialidad: "Pediatría",
      horario: "9:00 AM - 1:00 PM",
      ubicacion: "Ciudad B"
    },
    {
      nombre: "Carlos",
      apellido: "López",
      especialidad: "Psicología",
      horario: "10:00 AM - 2:00 PM",
      ubicacion: "Ciudad A"
    },
    {
      nombre: "Laura",
      apellido: "Martínez",
      especialidad: "Oncología Médica",
      horario: "2:00 PM - 6:00 PM",
      ubicacion: "Ciudad B"
    },
    {
      nombre: "Pedro",
      apellido: "Ramírez",
      especialidad: "Psicología",
      horario: "8:00 AM - 12:00 PM",
      ubicacion: "Ciudad C"
    },
    {
      nombre: "Ana",
      apellido: "Sánchez",
      especialidad: "Odontología",
      horario: "9:00 AM - 1:00 PM",
      ubicacion: "Ciudad A"
    },
    {
      nombre: "Luis",
      apellido: "Hernández",
      especialidad: "Pediatría",
      horario: "10:00 AM - 2:00 PM",
      ubicacion: "Ciudad B"
    },
    {
      nombre: "Marcela",
      apellido: "López",
      especialidad: "Oncología Médica",
      horario: "2:00 PM - 6:00 PM",
      ubicacion: "Ciudad C"
    },
    {
      nombre: "Roberto",
      apellido: "García",
      especialidad: "Cardiología",
      horario: "8:00 AM - 12:00 PM",
      ubicacion: "Ciudad A"
    },
    {
      nombre: "Lucía",
      apellido: "Morales",
      especialidad: "Odontología",
      horario: "9:00 AM - 1:00 PM",
      ubicacion: "Ciudad B"
    },
    {
      nombre: "Miguel",
      apellido: "Vargas",
      especialidad: "Psicología",
      horario: "10:00 AM - 2:00 PM",
      ubicacion: "Ciudad C"
    },
    {
      nombre: "Sofía",
      apellido: "Ortega",
      especialidad: "Cardiología",
      horario: "2:00 PM - 6:00 PM",
      ubicacion: "Ciudad A"
    },
    {
      nombre: "José",
      apellido: "Silva",
      especialidad: "Pediatría",
      horario: "8:00 AM - 12:00 PM",
      ubicacion: "Ciudad B"
    },
    {
      nombre: "Andrea",
      apellido: "Gómez",
      especialidad: "Psicología",
      horario: "9:00 AM - 1:00 PM",
      ubicacion: "Ciudad C"
    },
    {
      nombre: "Ricardo",
      apellido: "Mendoza",
      especialidad: "Psicología",
      horario: "10:00 AM - 2:00 PM",
      ubicacion: "Ciudad A"
    },
    {
      nombre: "Paula",
      apellido: "Ramírez",
      especialidad: "Psicología",
      horario: "2:00 PM - 6:00 PM",
      ubicacion: "Ciudad B"
    }
  ];


    getUniqueValues(field: string): string[] {
    const uniqueValues = [...new Set(this.profesionales.map(profesional => profesional[field]))];
    return uniqueValues;
  }

  buscarProfesionales(event: Event) {
    event.preventDefault();
    // Obtener los valores seleccionados de los selectores
    const especialidadSeleccionada = (document.getElementById('especialidad') as HTMLSelectElement).value;
    const ubicacionSeleccionada = (document.getElementById('ubicacion') as HTMLSelectElement).value;
    const horarioSeleccionado = (document.getElementById('horario') as HTMLSelectElement).value;

    // Filtrar los profesionales según las opciones seleccionadas
    this.profesionalesFiltrados = this.profesionales.filter(profesional => {
      if (especialidadSeleccionada && profesional.especialidad !== especialidadSeleccionada) {
        return false;
      }
      if (ubicacionSeleccionada && profesional.ubicacion !== ubicacionSeleccionada) {
        return false;
      }
      if (horarioSeleccionado && profesional.horario !== horarioSeleccionado) {
        return false;
      }
      return true;
    });
  }
  agendarCita(){
    alert('Cita agendada!')
  }

}
