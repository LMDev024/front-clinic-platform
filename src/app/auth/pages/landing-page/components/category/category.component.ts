import { Component } from '@angular/core';
import { Especialidad } from './interface/especialidad';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  public especialidades: Especialidad[] =[
    {
      nombre: "Odontologia",
      urlImg: "odonto.png"
    },
    {
      nombre: "Cardiologia",
      urlImg: "cardiologia.png"
    },
    {
      nombre: "Oncologia",
      urlImg: "oncologia.png"
    },
    {
      nombre: "Pediatria",
      urlImg: "pediatria.png"
    },
    {
      nombre: "psicologia",
      urlImg: "psicologia.png"
    }
  ]


}
