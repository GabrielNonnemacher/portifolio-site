import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'NavigateInit',
  templateUrl: './navigate-init.component.html',
  styleUrls: ['./navigate-init.component.css']
})
export class NavigateInitComponent {

  isVisible = signal<boolean>(false);

  public scrollToSection(): void {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  }

  @HostListener('window:scroll')
  public onWindowScroll(): void {
    const alturaAtual = document.documentElement.scrollTop || document.body.scrollTop || 0;
    const alturaParaAparecer = 500;
    this.isVisible.set(alturaAtual > alturaParaAparecer);
  }
}
