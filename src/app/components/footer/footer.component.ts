import { Component } from '@angular/core';
import { INFORMATIONS } from 'src/assets/helpers/Informations';

@Component({
  selector: 'Footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor() {}

  address = INFORMATIONS.TextFooter.Address;
  contacts = INFORMATIONS.TextFooter.Contacts;
  socialNetworks = INFORMATIONS.TextFooter.SocialNetworks;
  produced = INFORMATIONS.TextFooter.Produced;
  rights: string = INFORMATIONS.TextFooter.Rights;
}
