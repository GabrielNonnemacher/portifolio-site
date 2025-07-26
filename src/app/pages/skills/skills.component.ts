import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'lp-page-skills',
  imports: [NgClass],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  listSkills = signal([
    {
      id: 1,
      imageURL: 'images/frontend.png',
      description:
        'Crio interfaces funcionais e atraentes, unindo design e tecnologia para gerar experiências que conectam usuários e negócios.',
      title: 'Frontend & Design',
    },
    {
      id: 2,
      imageURL: 'images/backend.png',
      description:
        'Desenvolvo sistemas robustos e escaláveis que garantem alta performance e segurança para aplicações, trazendo estabilidade ao coração dos sistemas.',
      title: 'Backend',
    },
    {
      id: 3,
      imageURL: 'images/servicesAndTools.png',
      description:
        'Aproveito o melhor de cada ferramenta para criar soluções integradas e de alto impacto. Dessa forma, entrego resultados que atendem às necessidades de cada projeto.',
      title: 'Serviços & Ferramentas',
    },
  ]);

  clicked = signal<number>(0);

  onClick(id: number): void {
    this.clicked.update((oldId) => (oldId === id ? 0 : id));
  }
}
