import { Component } from '@angular/core';
import { INFORMATIONS } from 'src/assets/helpers/Informations';

@Component({
  selector: 'About',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  text = INFORMATIONS.About;
}
