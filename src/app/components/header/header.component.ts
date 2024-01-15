import { Component, signal } from '@angular/core';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  openSideBar = signal<boolean>(false);
  firstEnter = signal<boolean>(true);

  public onClickMenu(): void {
    this.openSideBar.update(prop => !prop);
    this.firstEnter.set(false);
  }
}
