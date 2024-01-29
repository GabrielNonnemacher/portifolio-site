import { HomeButton } from "../models/homeButton.model";

export const HOME_BUTTON_CONTENT: HomeButton[] = [
    {
        id: 'buttonGitHub',
        text: 'GitHub',
        urlRedirect: 'https://github.com/GabrielNonnemacher',
        urlImage: '../../assets/images/github.svg'
    },
    {
        id: 'buttonFacebook',
        text: 'Facebook',
        urlRedirect: 'https://www.facebook.com/gabriel.nonnemacher.16',
        urlImage: '../../assets/images/facebook.svg'
    },
    {
        id: 'buttonInstagram',
        text: 'Instagram',
        urlRedirect: 'https://www.instagram.com/nonnemacher_gabriel',
        urlImage: '../../assets/images/instagram.svg'
    },
    {
        id: 'buttonLinkedIn',
        text: 'LinkedIn',
        urlRedirect: 'https://www.linkedin.com/in/gabriel-nonnemacher-27b213221',
        urlImage: '../../assets/images/linkedin.svg'
    }
] as HomeButton[];