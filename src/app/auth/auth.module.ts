import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { GalleriaModule } from 'primeng/galleria';

import { HeaderAuthComponent } from './components/header-auth/header-auth.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { CarouselComponent } from './pages/landing-page/components/carousel/carousel.component';
import { CategoryComponent } from './pages/landing-page/components/category/category.component';
import { CalificacionComponent } from './pages/landing-page/components/calificacion/calificacion.component';
import { RatingModule } from 'primeng/rating';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RegisterComponent } from './pages/register-page/register/register.component';
@NgModule({
  declarations: [
    LoginPageComponent,
    HeaderAuthComponent,
    LandingPageComponent,
    CarouselComponent,
    CategoryComponent,
    CalificacionComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    GalleriaModule,
    RatingModule,
    FormsModule,
    InputSwitchModule
  ],
  exports:[
    LoginPageComponent,
    LandingPageComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
