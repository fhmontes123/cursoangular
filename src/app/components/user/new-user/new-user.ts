import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-new-user',
  imports: [MatCardModule, MatInput, MatButton, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './new-user.html',
  styleUrl: './new-user.css',
})
export class NewUser {
  formGroup = new FormGroup({
    nombres: new FormControl(''),
  });

  clickRegister(): void {
    console.log(this.formGroup.get('nombres')?.value);
  }
}
