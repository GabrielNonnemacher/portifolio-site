import { Skill } from "../models/skill.model";

export const SKILLS: Skill[] = [
    {
        title: "Comunicação",
        text: "Domínio da comunicação tanto em interações presenciais quanto no ambiente virtual, fazendo uso eficiente de ferramentas online, tais como videoconferência e chat.",
        imageUrl: "../../assets/images/comunication.svg",
        imageAlt: ""
    },
    {
        title: "Desenvolvimento",
        text: "Elaboração de soluções com design responsivo, visando proporcionar uma experiência otimizada em diferentes dispositivos.",
        imageUrl: "../../assets/images/coding.svg",
        imageAlt: ""
    },
    {
        title: "Conhecimento",
        text: "Capacidade de aprendizado rápido e busca incessante por novas ferramentas e tecnologias, garantindo uma constante evolução e atualização em meu conjunto de habilidades.",
        imageUrl: "../../assets/images/learning.svg",
        imageAlt: ""
    }
] as Skill[];