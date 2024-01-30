import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonsModule } from '../components/buttons/buttons.module';
import { ComponentModule } from '../components/component.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    ProjectsComponent,
    ContactsComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    ComponentModule
  ],
  exports: [
    AboutComponent,
    HomeComponent,
    ProjectsComponent,
    ContactsComponent,
    SkillsComponent
  ]
})
export class ScreenModule {}
