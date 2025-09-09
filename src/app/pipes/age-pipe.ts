import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(fechaNacimiento: string | Date): number {
    if (!fechaNacimiento) {
      return 0;
    }
    const hoy = new Date();
    const fechaNac = new Date(fechaNacimiento);

    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
      edad--;
    }

    return edad;
  }
}
