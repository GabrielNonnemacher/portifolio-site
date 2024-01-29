import { Component, Input } from '@angular/core';
import { HomeButton } from 'src/app/helpers/models/homeButton.model';

@Component({
  selector: 'SocialMediaButtons',
  templateUrl: './social-media-buttons.component.html',
  styleUrls: ['./social-media-buttons.component.css']
})
export class SocialMediaButtonsComponent {
  @Input() items: HomeButton[] = [] as HomeButton[];

  public redirectTo(url: string): void {
    window.open(url, '_blank');
  }
}
