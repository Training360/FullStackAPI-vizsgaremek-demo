import { FieldBase } from "./field-base";

export class TextareaField extends FieldBase<string> {
  controlType?: string = 'textarea';

  constructor(options: TextareaField) {
    super(options);
  }
}
