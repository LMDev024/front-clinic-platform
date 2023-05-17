import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { HeaderAuthComponent } from './components/header-auth/header-auth.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    HeaderAuthComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    PasswordModule
  ],
  exports:[
    LoginPageComponent,
    LandingPageComponent
  ]
})
export class AuthModule { }
