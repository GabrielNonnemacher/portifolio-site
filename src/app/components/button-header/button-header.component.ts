import { Component, Input } from '@angular/core';

@Component({
  selector: 'Button-Header',
  templateUrl: './button-header.component.html',
  styleUrls: ['./button-header.component.css']
})
export class ButtonHeaderComponent {
  constructor() {}

  @Input() title: string = "";
  @Input() content: string = "";
}
