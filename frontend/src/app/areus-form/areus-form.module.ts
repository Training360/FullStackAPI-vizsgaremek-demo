import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './common/form/form.component';
import { FormFieldComponent } from './common/form-field/form-field.component';



@NgModule({
  declarations: [
    FormComponent,
    FormFieldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormComponent,
  ]
})
export class AreusFormModule { }
