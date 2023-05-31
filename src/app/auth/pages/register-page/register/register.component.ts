import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      primerNombre: ['', Validators.required],
      segundoNombre: [''],
      primerApellido: ['', Validators.required],
      segundoApellido: [''],
      numeroDocumento: ['', Validators.required],
      fechaNacimiento: [''],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    if (this.loginForm.invalid) {
      // Realizar acciones cuando el formulario es inválido
      return;
    }
    const primerNombre = this.loginForm.value.primerNombre;
    localStorage.setItem('primerNombre', primerNombre);

    this.router.navigate(['/search']);
  }
}
