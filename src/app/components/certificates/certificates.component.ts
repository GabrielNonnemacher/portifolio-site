import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { INFORMATIONS } from 'src/assets/helpers/Informations';
import { Certificate, CertificateDTO } from './models/certificate.model';

@Component({
  selector: 'Certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit, OnDestroy {
  constructor(){}

  certificate: Certificate = {} as Certificate;
  certificates: Certificate[] = [] as Certificate[];
  ngUnsubscribe = new Subject<void>();

  public ngOnInit(): void {
    this.composeCertificates();
  }

  private composeCertificates(): void {
    this.certificates = INFORMATIONS.Certificates.map(CertificateDTO.mapperListView);
    this.certificate = this.certificates[0];
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
