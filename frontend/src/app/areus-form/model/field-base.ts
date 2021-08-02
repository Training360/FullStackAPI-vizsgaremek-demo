import { ValidatorFn } from "@angular/forms";

export class FieldBase<T> {
  value: T;
  key: string;
  label: string;
  type?: string;
  options?: {value: string, label: string}[];
  validators?: ValidatorFn[];
  controlType?: string;
  errorMessage?: string;

  constructor(options: FieldBase<T>) {
    this.value = options.value;
    this.key = options.key;
    this.label = options.label;
    this.validators = options.validators;
    this.controlType = options.controlType;
    this.errorMessage = options.errorMessage;
  }
}
