import { Component, signal } from '@angular/core';
import { HOME_BUTTON_CONTENT } from 'src/app/helpers/constatants/homeButtonsContent.constant';
import { HomeButton } from 'src/app/helpers/models/homeButton.model';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  socialMedias = signal<HomeButton[]>(HOME_BUTTON_CONTENT);
  
  public scrollToAbout(): void {
    document.getElementById('about')?.scrollIntoView({behavior: "smooth"});
  }
}
