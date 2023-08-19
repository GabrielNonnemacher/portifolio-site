import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { INFORMATIONS } from 'src/assets/helpers/Informations';

@Component({
  selector: 'Certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnDestroy {
  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  constructor() {}
  
  certificates = INFORMATIONS.Certificates;
  ngUnsubscribe = new Subject<void>();

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
