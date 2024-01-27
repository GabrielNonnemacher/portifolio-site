import { Component, Input, signal } from '@angular/core';
import { HEADER_BUTTONS_CONTENT } from 'src/app/helpers/constatants/headerButtonsContent.constant';
import { HeaderButton } from 'src/app/helpers/models/headerButton.model';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  openNavHeaderMobile = signal<boolean>(false);
  firstEnter = signal<boolean>(true);
  buttonsHeader = signal<HeaderButton[]>(HEADER_BUTTONS_CONTENT);

  public onClickMenu(): void {
    this.openNavHeaderMobile.update(prop => !prop);
    this.firstEnter.set(false);
  }
}
