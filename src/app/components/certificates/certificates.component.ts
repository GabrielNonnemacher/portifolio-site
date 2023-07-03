import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { INFORMATIONS } from 'src/assets/helpers/Informations';

@Component({
  selector: 'Certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnDestroy {
  constructor() {}

  certificatesPage = 0;
  certificates = INFORMATIONS.Certificates;
  ngUnsubscribe = new Subject<void>();

  public moreCertificates(): void {
    console.log(this.certificatesPage)
    this.certificatesPage += 1;
  }

  public lessCertificates(): void {
    console.log(this.certificatesPage)
    if (!this.minCertificatePage()) {
      this.certificatesPage -= 1;
    }
  }

  public minCertificatePage(): boolean {
    console.log(this.certificatesPage)
    return this.certificatesPage === 0;
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
