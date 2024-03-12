import { Component, HostListener, Input, signal } from '@angular/core';
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
  isVisible = signal<boolean>(false);

  @HostListener('window:scroll')
  public onWindowScroll(): void {
    const alturaAtual = document.documentElement.scrollTop || document.body.scrollTop || 0;
    const alturaParaAparecer = 80;
    this.isVisible.set(alturaAtual > alturaParaAparecer);
  }

  public onClickMenu(): void {
    this.openNavHeaderMobile.update(prop => !prop);
    this.firstEnter.set(false);
  }
}
