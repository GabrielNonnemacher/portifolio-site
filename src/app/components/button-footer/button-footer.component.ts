import { Component, Input } from '@angular/core';

@Component({
  selector: 'ButtonFooter',
  templateUrl: './button-footer.component.html',
  styleUrls: ['./button-footer.component.css']
})
export class ButtonFooterComponent {
  @Input() link: string = '';
  @Input() icon: string = '';
}
