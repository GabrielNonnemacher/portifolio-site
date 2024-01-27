import { Component, Input, signal } from '@angular/core';
import { HeaderButton } from 'src/app/helpers/models/headerButton.model';

@Component({
  selector: 'NavHeaderMobile',
  templateUrl: './nav-header-mobile.component.html',
  styleUrls: ['./nav-header-mobile.component.css']
})
export class NavHeaderMobileComponent {
  @Input() items: HeaderButton[] = [] as HeaderButton[];
  @Input() firstEnter: boolean = true;
  @Input() openNavHeaderMobile: boolean = false;
}
