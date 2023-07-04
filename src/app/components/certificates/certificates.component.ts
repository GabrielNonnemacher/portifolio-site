import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { INFORMATIONS } from 'src/assets/helpers/Informations';

@Component({
  selector: 'Certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit, OnDestroy {
  constructor() {}

  certificatesPage = 2;
  listCertificates = INFORMATIONS.Certificates;
  certificates: string[] = [] as string[];
  ngUnsubscribe = new Subject<void>();

  ngOnInit(): void {
    this.composeListCertificates();
  }

  private composeListCertificates(): void {
    this.certificates = this.listCertificates.filter((item, index) => {
      if (index < this.certificatesPage) return item;
      return;
    });
  }

  public moreCertificates(): void {
    console.log(this.maxCertificatePage())
    this.certificatesPage += 2;
    this.composeListCertificates();
  }

  public lessCertificates(): void {
    if (!this.minCertificatePage()) {
      this.certificatesPage -= 2;
      this.composeListCertificates();
    }
  }

  public minCertificatePage(): boolean {
    return this.certificatesPage === 2;
  }

  public maxCertificatePage(): boolean {
    return this.listCertificates.length <= this.certificatesPage;
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
