import { Component } from '@angular/core';
import { Profesional } from './interface/profesional';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.scss']
})
export class CalificacionComponent {

  public profesionales:Profesional[]=[
    {
      nombre:"Luis Ignacio Otalvarez",
      puntaje: 4,
      urlImg: "ignacio.jpg",
      comentario:"¡Es un gran doctor, casi que hace milagros!"
    },
    {
      nombre:"Melany Ortíz",
      puntaje: 4,
      urlImg: "melany.jpg",
      comentario:"Bastante buena la labor de esta doctora. 10/10"
    },
    {
      nombre:"Vladimir Suarez",
      puntaje: 5,
      urlImg: "vladimir.jpg",
      comentario:"¡Es un gran profesional, capaz de lograr resultados asombrosos!"
    }
  ]


}
