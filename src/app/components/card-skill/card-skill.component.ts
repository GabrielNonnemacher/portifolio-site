import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/helpers/models/skill.model';

@Component({
  selector: 'CardSkill',
  templateUrl: './card-skill.component.html',
  styleUrls: ['./card-skill.component.css']
})
export class CardSkillComponent {
  @Input() item: Skill = {} as Skill;
}
