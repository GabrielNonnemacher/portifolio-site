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
  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });
  certificates = INFORMATIONS.Certificates;
  imageModal: string = "";
  openModal: boolean = false;
  ngUnsubscribe = new Subject<void>();

  public onClick(index: number): void {
    this.imageModal = this.certificates[index];
    this.openModal = true;    
  }

  public setIsView(view: boolean): void {
    this.openModal = view;
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
