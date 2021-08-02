import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase } from '../../model/field-base';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  @Input() field: FieldBase<any> = new FieldBase({key: '', label: '', value: ''});
  @Input() formGroup: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
  }

  get isValid(): boolean {
    const control = this.formGroup.controls[this.field.key];
    return control.valid || control.untouched;
  }

}
