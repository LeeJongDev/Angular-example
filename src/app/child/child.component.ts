import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() list: number = 0;
  @Output() eventEmit = new EventEmitter<string>();

  text: string = '';

  handleEventEmit = (value: string) => {
    this.eventEmit.emit(value);
  };
}
