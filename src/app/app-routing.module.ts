import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './auth/pages/landing-page/landing-page.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { SearchProfesionalComponent } from './patient/pages/search-profesional/search-profesional.component';
import { UpdatePatientComponent } from './patient/pages/update-patient/update-patient.component';
import { RegisterComponent } from './auth/pages/register-page/register/register.component';
import { CitaComponent } from './patient/pages/cita/cita.component';
import { RoomCitaComponent } from './patient/pages/room-cita/room-cita.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegisterComponent},
  {path:'search',component: SearchProfesionalComponent},
  {path:'update',component:UpdatePatientComponent},
  {path:'listcita',component:CitaComponent},
  {path:'roomcita',component:RoomCitaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
