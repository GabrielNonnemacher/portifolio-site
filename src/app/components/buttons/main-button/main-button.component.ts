import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'MainButton',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.css']
})
export class MainButtonComponent {
  @Output() onClick = new EventEmitter;

  public onClicked(): void {
    this.onClick.emit();
  }
}
