import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { InformationLink } from '../../../interfaces/informationLink.interface';

@Component({
  selector: 'lp-main-button',
  imports: [MatIconModule],
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.scss',
})
export class MainButtonComponent {
  link = input.required<InformationLink>();

  protected click(): void {
    window.open(this.link().url, '_blank');
  }
}
