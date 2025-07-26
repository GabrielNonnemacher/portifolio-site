import { NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'lp-stepper',
  imports: [NgIf],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
})
export class StepperComponent {
  steps = signal([
    {
      id: 'No momento - Desenvolvedor Front-end',
      open: true,
      description:
        'A partir de março de 2024, passei a atuar em tempo integral para o cliente, consolidando todo o empenho dedicado ao projeto.',
    },
    {
      id: '2024/07 - Monitor do Módulo de Frontend do Programa Crescer Level 2',
      open: false,
      description:
        'No Level 2 do Programa Crescer, atuei como monitor no módulo de Frontend, com foco em React JS. Minhas responsabilidades incluíram conduzir dailys, avaliar exercícios, fornecer feedbacks direcionados ao aprimoramento dos monitorandos e assegurar seu progresso no programa. Ao final do módulo, participei das bancas de avaliação dos Trabalhos de Conclusão, que envolviam o desenvolvimento de aplicações completas com Frontend, Backend, Banco de Dados e integrações com IAs. Fui responsável por avaliar a parte de Frontend, fornecendo feedback técnico detalhado para orientar o aperfeiçoamento das soluções apresentadas.',
    },
    {
      id: '2024/03 - Monitor Dedicado do Programa Crescer Level 1',
      open: false,
      description:
        'Atuei como monitor dedicado, responsável por auxiliar os participantes do programa na resolução de desafios, especialmente em arquitetura de software e questões técnicas. Também conduzi entrevistas ao longo do programa para conhecer e avaliar os participantes. Esse papel foi um grande passo na minha carreira, proporcionando uma evolução significativa. Ensinar e orientar aprimoraram minhas habilidades técnicas e de mentoria, enquanto as entrevistas fortaleceram minha oratória e capacidade de comunicação, ajudando-me a articular ideias de maneira clara e eficaz.',
    },
    {
      id: '2022/11 - Estagiário em Desenvolvimento Front-end',
      open: false,
      description:
        'A partir de novembro, após concluir o programa, comecei a atuar diretamente no desenvolvimento de projetos para o cliente Banco DLL. Continuando como estagiário, passei a focar nas entregas de demandas específicas de front-end, trabalhando com Angular JS e Angular.',
    },
    {
      id: '2022/06 - Estagiário em Desenvolvimento de Software',
      open: false,
      description:
        'Comecei o programa Crescer Level 2, onde estagiei durante as tardes. Neste estágio, recebíamos conteúdos específicos do programa seguidos por exercícios práticos para fixação.',
      skills: [
        'Desenvolvimento de front-end',
        'Trabalho em equipe',
        'Banco de dados',
        'GitHub',
        'HTML5',
        'CSS ',
        'JavaScript',
        'Spring Boot',
        'Java',
        'React',
        'Desenvolvimento de back-end',
        'Segurança da informação',
      ],
    },
  ]);

  onClick(stepId: string): void {
    this.steps().forEach((step) => {
      step.open = step.id === stepId;
    });
  }
}
