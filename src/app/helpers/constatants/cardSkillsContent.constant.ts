import { Skill } from "../models/skill.model";
import { TecTools } from "../models/tecTools.model";

export const SKILLS: Skill[] = [
    {
        title: "Comunicação",
        text: "Domínio da comunicação tanto em interações presenciais quanto no ambiente virtual, fazendo uso eficiente de ferramentas online, tais como videoconferência e chat.",
        imageUrl: "../../assets/images/comunication.svg",
        imageAlt: ""
    },
    {
        title: "Desenvolvimento",
        text: "Elaboração de soluções para diversos tipos de problemas com design responsivo, visando proporcionar uma experiência otimizada em diferentes dispositivos.",
        imageUrl: "../../assets/images/coding.svg",
        imageAlt: ""
    },
    {
        title: "Conhecimento",
        text: "Capacidade de aprendizado rápido e busca incessante por novas ferramentas e tecnologias, garantindo uma constante evolução e atualização em meu conjunto de habilidades.",
        imageUrl: "../../assets/images/learning.svg",
        imageAlt: ""
    },
    {
        title: "Resolução de Problemas",
        text: "Capacidade de resolver problemas de forma lógica e eficiente, utilizando técnicas e métodos de resolução de problemas.",
        imageUrl: "../../assets/images/resulutionProblems.svg",
        imageAlt: ""
    }
] as Skill[];

export const TECNOLOGIES_TOOLS: TecTools[] = [
    {
        imgUrl: "https://seeklogo.com/images/A/angular-icon-logo-5FC0C40EAC-seeklogo.com.png",
        name: "angular",
        urlDocumentation: "https://angular.dev"
    },
    {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/800px-Typescript_logo_2020.svg.png",
        name: "typescript",
        urlDocumentation: "https://www.typescriptlang.org"
    },
    {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        name: "React",
        urlDocumentation: "https://react.dev/"
    },
    {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/225px-Unofficial_JavaScript_logo_2.svg.png",
        name: "Javascript",
        urlDocumentation: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
    },
    {
        imgUrl: "https://raw.githubusercontent.com/learnbr/csharp/master/csharp-logo.png",
        name: "CSharp",
        urlDocumentation: "https://dotnet.microsoft.com/pt-br/languages/csharp"
    },
    {
        imgUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSnlgmbISz3OG5_m01VegddMf4j4INczgh9N1dEelW1x5Optg_wcoCvbrbv2khbWDMbU-05WtQ9KiIUr31TFaWAyrYiBN3h6uBkEn6efUitHAFqvpZ444rg1iJm7mYyr_TOkdCkonX_34/s452/spring-logo.png",
        name: "Spring Boot",
        urlDocumentation: "https://spring.io/projects/spring-boot"
    },
    {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
        name: "Azure",
        urlDocumentation: "https://azure.microsoft.com/pt-br/free"
    },
    {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
        name: "PostgreSQL",
        urlDocumentation: "https://www.postgresql.org"
    },
    {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png",
        name: "Figma",
        urlDocumentation: "https://www.figma.com"
    },
    {
        imgUrl: "https://w7.pngwing.com/pngs/885/629/png-transparent-miro-hd-logo-thumbnail.png",
        name: "Miro",
        urlDocumentation: "https://miro.com"
    },
    {
        imgUrl: "https://sass-lang.com/assets/img/styleguide/seal-color.png",
        name: "Sass",
        urlDocumentation: "https://sass-lang.com"
    },
    {
        imgUrl: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
        name: "Git",
        urlDocumentation: "https://git-scm.com"
    },
    {
        imgUrl: "https://static-00.iconduck.com/assets.00/docker-icon-icon-1024x739-rh15l33m.png",
        name: "",
        urlDocumentation: ""
    },
    {
        imgUrl: "https://mwskwong.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fq95r71b1uue1%2FCZM8YFlF9RPBFqn4IW1km%2F0e94db87e05fce62f3bc64f03165402d%2Fvercel_cover_photo.png&w=3840&q=75",
        name: "",
        urlDocumentation: ""
    },
    {
        imgUrl: "https://seeklogo.com/images/S/sonarcloud-logo-39208B5388-seeklogo.com.png",
        name: "Sonarcloud",
        urlDocumentation: "https://sonarcloud.io"
    }
] as TecTools[];