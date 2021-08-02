import { Injectable } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { AreusFormModule } from '../areus-form.module';
import { FieldBase } from '../model/field-base';

@Injectable({
  providedIn: 'root'
})
export class FormGeneratorService {

  constructor() { }

  toFormGroup(fieldList: FieldBase<any>[]): FormGroup {
    const group: {[propname: string]: any} = {};

    if (fieldList) {
      fieldList.forEach( item => {
        group[item.key] = new FormControl(item.value, item.validators || []);
      });
    }

    return new FormGroup(group);
  }
}
