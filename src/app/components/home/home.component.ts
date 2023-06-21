import { Component } from '@angular/core';
import { INFORMATIONS } from 'src/assets/helpers/Informations';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  text = INFORMATIONS.TextHome;
}
