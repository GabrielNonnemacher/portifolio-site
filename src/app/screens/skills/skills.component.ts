import { Component, signal } from '@angular/core';
import { SKILLS } from 'src/app/helpers/constatants/cardSkillsContent.constant';
import { Skill } from 'src/app/helpers/models/skill.model';

@Component({
  selector: 'Skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = signal<Skill[]>(SKILLS);
}
