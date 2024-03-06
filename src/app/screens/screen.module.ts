import { NgModule } from '@angular/core';
import { ComponentModule } from '../components/component.module';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { CommonModule } from '@angular/common';

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
