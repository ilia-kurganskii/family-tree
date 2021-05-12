import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  TuiFieldErrorModule,
  TuiInputModule,
  TuiInputPasswordModule,
} from '@taiga-ui/kit';
import {
  TuiButtonModule,
  TuiErrorModule,
  TuiHintControllerModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';

@NgModule({
  exports: [LoginComponent],
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiFieldErrorModule,
    TuiInputPasswordModule,
    TuiButtonModule,
    TuiTextfieldControllerModule,
    TuiHintControllerModule,
    TuiErrorModule,
  ],
})
export class LoginModule {}
