import { AbstractControl, ValidationErrors } from '@angular/forms';

// Expresion Regular para validar password.
// Al menos una minuscula, una mayuscula, un numero, un caracter especial, y 8 caracteres minimo.
const patternPassword = new RegExp('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W).{8}');

export const customPasswordValidator = (
  control: AbstractControl<string>
): ValidationErrors | null => {
  const value = control.value;
  if (!patternPassword.test(value)) {
    return { customPasswordValidator: true };
  }
  return null;
};
