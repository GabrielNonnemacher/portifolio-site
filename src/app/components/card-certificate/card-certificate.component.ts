import { Component, Input } from '@angular/core';

@Component({
  selector: 'CardCertificate',
  templateUrl: './card-certificate.component.html',
  styleUrls: ['./card-certificate.component.css']
})
export class CardCertificateComponent {
  constructor() {}

  @Input() path: string = "";
  @Input() name: string = "";
  @Input() info: string = "";
}
