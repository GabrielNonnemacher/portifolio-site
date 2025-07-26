import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { InformationLink } from '../../../interfaces/informationLink.interface';
import { scrollIntoSection } from '../../../utils/constants';

@Component({
  selector: 'lp-link-button',
  imports: [MatButtonModule],
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.scss',
})
export class LinkButtonComponent {
  informationLink = input<InformationLink>({} as InformationLink);
  clicked = output();

  public onClick(): void {
    this.clicked.emit();
    scrollIntoSection(this.informationLink()?.url);
  }
}
