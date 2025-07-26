import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lp-social-media-link',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './social-media-link.component.html',
  styleUrl: './social-media-link.component.scss',
})
export class SocialMediaLinkComponent {
  title = input<string>('');
  imageURL = input<string>('');
  link = input<string>('');

  protected onClick(): void {
    window.open(this.link(), '_blank');
  }
}
