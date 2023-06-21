import { Component, Input } from '@angular/core';

@Component({
  selector: 'ButtonNext',
  templateUrl: './button-next.component.html',
  styleUrls: ['./button-next.component.css']
})
export class ButtonNextComponent {
  constructor() {}

  @Input() name: string = "";
  @Input() content: string = "";
}
