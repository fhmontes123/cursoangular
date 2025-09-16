import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { customPasswordValidator } from './new-user.validator';

@Component({
  selector: 'app-new-user',
  imports: [MatCardModule, MatInput, MatButton, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './new-user.html',
  styleUrl: './new-user.css',
})
export class NewUser {
  // formGroup = new FormGroup({
  //   nombres: new FormControl(''),
  // });

  private readonly _formBuilder = inject(FormBuilder);

  formGroup = this._formBuilder.nonNullable.group({
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, customPasswordValidator]],
    confirmPassword: ['', Validators.required],
  });

  clickRegister(): void {
    console.log(this.formGroup.get('nombres')?.value);
    const nombres = this.formGroup.controls.nombres.value;
    console.log(`Nombre: ${nombres}`);
    console.log(`Estado de validacion nombres: ${this.formGroup.controls.nombres.valid}`);
    console.log(`Estado de validacion form: ${this.formGroup.valid}`);

    if (this.formGroup.valid) {
      console.log('Los datos del formulario son correctos.');
    }

    console.log('Propiedad errors correo: ', this.formGroup.controls.correo.errors);
    console.log(
      'Funcion hasError(email) correo: ',
      this.formGroup.controls.correo.hasError('email')
    );
    console.log('Validador Personalizado password: ', this.passwordField.errors);
  }

  // METODOS GETTER
  get nombresField(): FormControl<string> {
    return this.formGroup.controls.nombres;
  }

  get apellidosField(): FormControl<string> {
    return this.formGroup.controls.apellidos;
  }

  get correoField(): FormControl<string> {
    return this.formGroup.controls.correo;
  }

  get passwordField(): FormControl<string> {
    return this.formGroup.controls.password;
  }

  get confirmPasswordField(): FormControl<string> {
    return this.formGroup.controls.confirmPassword;
  }
}
