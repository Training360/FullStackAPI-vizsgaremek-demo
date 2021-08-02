import { FieldBase } from "./field-base";

export class SelectField extends FieldBase<string> {
  controlType = 'select';
  options: {value: string, label: string}[];

  constructor(params: SelectField) {
    super(params);
    this.options = params.options || [];
  }
}
