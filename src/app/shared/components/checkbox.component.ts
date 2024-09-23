import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'checkbox',
  standalone: true,
  imports: [],
  template: `<input
    type="checkbox"
    [checked]="false"
    class="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded-md"
  />`,
})
export class CheckboxComponent {
  @Input() checked: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  onCheckboxChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.checkedChange.emit(inputElement.checked);
  }
}
