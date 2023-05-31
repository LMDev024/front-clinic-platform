import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchProfesionalComponent } from './pages/search-profesional/search-profesional.component';
import { HeaderPatientComponent } from './components/header-patient/header-patient.component';
import { UpdatePatientComponent } from './pages/update-patient/update-patient.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { CitaComponent } from './pages/cita/cita.component';
import { RoomCitaComponent } from './pages/room-cita/room-cita.component';



@NgModule({
  declarations: [
    SearchProfesionalComponent,
    HeaderPatientComponent,
    UpdatePatientComponent,
    CitaComponent,
    RoomCitaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  exports:[
    SearchProfesionalComponent,
    UpdatePatientComponent
  ]
})
export class PatientModule { }
