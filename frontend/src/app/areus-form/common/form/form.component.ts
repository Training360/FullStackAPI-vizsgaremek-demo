import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase } from '../../model/field-base';
import { FormGeneratorService } from '../../service/form-generator.service';

@Component({
  selector: 'app-areus-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() fieldList: FieldBase<any>[] = [];
  @Output() submitted: EventEmitter<any> = new EventEmitter();
  formGroup: FormGroup = new FormGroup({});

  constructor(
    private generator: FormGeneratorService,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.generator.toFormGroup(this.fieldList);
  }

  onSubmit(): void {
    this.submitted.emit(this.formGroup.value);
  }

}
