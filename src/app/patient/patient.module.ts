import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchProfesionalComponent } from './pages/search-profesional/search-profesional.component';
import { HeaderPatientComponent } from './components/header-patient/header-patient.component';
import { UpdatePatientComponent } from './pages/update-patient/update-patient.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchProfesionalComponent,
    HeaderPatientComponent,
    UpdatePatientComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    SearchProfesionalComponent,
    UpdatePatientComponent
  ]
})
export class PatientModule { }
