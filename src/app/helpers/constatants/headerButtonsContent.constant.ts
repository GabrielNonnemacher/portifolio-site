import { HeaderButton } from "../models/headerButton.model";

export const HEADER_BUTTONS_CONTENT: HeaderButton[] = [
    {
        id: 'about',
        text: 'Sobre mim',
        urlImage: '../../assets/images/user.svg'
    },
    {
        id: 'skills',
        text: 'Habilidades',
        urlImage: '../../assets/images/skills.svg'
    },
    {
        id: 'projects',
        text: 'Projetos',
        urlImage: '../../assets/images/projects.svg'
    },
    {
        id: 'contacts',
        text: 'Contatos',
        urlImage: '../../assets/images/contacts.svg'
    }
] as HeaderButton[];