import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { INFORMATIONS } from 'src/assets/helpers/Informations';
import { ButtonHeader, ButtonHeaderDTO } from './models/ButtonHeader.model';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  contentButtonsHeader: ButtonHeader[] = [] as ButtonHeader[];
  ngUnsubscribe = new Subject<void>();

  public ngOnInit(): void {
    this.composeButtonsHeader();
  }

  private composeButtonsHeader(): void {
    this.contentButtonsHeader = INFORMATIONS.ButtonsHeaderContents.map(ButtonHeaderDTO.mapperListView);
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
