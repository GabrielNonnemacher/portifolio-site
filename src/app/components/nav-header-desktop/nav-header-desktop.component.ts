import { Component, Input } from '@angular/core';
import { HeaderButton } from 'src/app/helpers/models/headerButton.model';

@Component({
  selector: 'NavHeaderDesktop',
  templateUrl: './nav-header-desktop.component.html',
  styleUrls: ['./nav-header-desktop.component.css']
})
export class NavHeaderDesktopComponent {
  @Input() items: HeaderButton[] = [] as HeaderButton[];

  public scrollToSection(id: string): void {
    document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
  }
}
