import { Component, signal } from '@angular/core';
import { InformationLink } from '../../interfaces/informationLink.interface';
import { SocialMedia } from '../../interfaces/socialMedia.interface';
import { LinkButtonComponent } from '../buttons/link-button/link-button.component';
import { SocialMediaLinkComponent } from '../social-media-link/social-media-link.component';

@Component({
  selector: 'lp-footer',
  imports: [SocialMediaLinkComponent, LinkButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  socialMedias = signal<SocialMedia[]>([
    {
      title: 'Facebook',
      imageURL: 'images/facebook-icon.svg',
      link: 'https://www.facebook.com/gabriel.nonnemacher.16',
    },
    {
      title: 'Linkedin',
      imageURL: 'images/linkedin-icon.svg',
      link: 'https://www.linkedin.com/in/gabriel-nonnemacher-27b213221',
    },
    {
      title: 'Instagram',
      imageURL: 'images/instagram-icon.svg',
      link: 'https://www.instagram.com/nonnemacher_gabriel/',
    },
    {
      title: 'WhatsApp',
      imageURL: 'images/whatsapp-icon.svg',
      link: 'https://wa.me/5551997390149',
    },
    {
      title: 'Discord',
      imageURL: 'images/discord-icon.svg',
      link: 'https://discord.com/users/917832430788952104',
    },
  ]);

  contacts = signal<SocialMedia[]>([
    {
      title: 'gabriel.nonnemacher.dev@gmail.com',
      imageURL: './images/emailIcon.svg',
      link: 'mailto:gabriel.nonnemacher.dev@gmail.com',
    },
    {
      title: '+55 51 997390149',
      imageURL: './images/phoneIcon.svg',
      link: 'https://wa.me/5551997390149',
    },
  ]);

  listLinks = signal<InformationLink[]>([
    {
      url: 'about',
      description: 'Sobre mim',
      ariaLabel: 'Click here to go the About section',
    },
    {
      url: 'skills',
      description: 'Especialidades',
      ariaLabel: 'Click here to go the Skills section',
    },
    {
      url: 'tools',
      description: 'Ferramentas',
      ariaLabel: 'Click here to go the Tools section',
    },
    {
      url: 'experiences',
      description: 'Esperiências',
      ariaLabel: 'Click here to go the Experiences section',
    },
  ]);
}
