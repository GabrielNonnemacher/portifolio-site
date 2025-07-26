import { Component } from '@angular/core';
import { MainButtonComponent } from '../../components/buttons/main-button/main-button.component';
import { InformationLink } from '../../interfaces/informationLink.interface';

@Component({
  selector: 'lp-page-about',
  imports: [MainButtonComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  link: InformationLink = {
    url: 'https://www.linkedin.com/in/gabriel-nonnemacher-27b213221',
    description: 'Clique para saber mais sobre mim',
    ariaLabel: 'Clique para saber mais sobre mim',
  };
}
