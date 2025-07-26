import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lp-carousel',
  imports: [NgFor, CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  tools = [
    { name: '1', icon: 'images/aws.svg' },
    { name: '2', icon: 'images/azure.svg' },
    { name: '3', icon: 'images/csharp.svg' },
    { name: '4', icon: 'images/css3.svg' },
    { name: '5', icon: 'images/docker.svg' },
    { name: '6', icon: 'images/figma.svg' },
    { name: '7', icon: 'images/git.svg' },
    { name: '8', icon: 'images/gitlab.svg' },
    { name: '9', icon: 'images/github.svg' },
    { name: '10', icon: 'images/heroku.svg' },
    { name: '11', icon: 'images/insomnia.svg' },
    { name: '12', icon: 'images/java.svg' },
    { name: '13', icon: 'images/js.svg' },
    { name: '14', icon: 'images/microsoft.svg' },
    { name: '15', icon: 'images/miro.svg' },
    { name: '16', icon: 'images/mongodb.svg' },
    { name: '17', icon: 'images/mysql.svg' },
    { name: '18', icon: 'images/netlify2.svg' },
    { name: '19', icon: 'images/npm2.svg' },
    { name: '20', icon: 'images/openai.svg' },
    { name: '21', icon: 'images/postgresql.svg' },
    { name: '22', icon: 'images/postman.svg' },
    { name: '23', icon: 'images/reactjs.svg' },
    { name: '24', icon: 'images/sass.svg' },
    { name: '25', icon: 'images/spring.svg' },
    { name: '26', icon: 'images/tailwindcss.svg' },
    { name: '27', icon: 'images/typescript.svg' },
    { name: '28', icon: 'images/vscode.svg' },
  ];
}
