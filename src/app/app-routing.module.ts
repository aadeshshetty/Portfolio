import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full',
  },
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full',
  },
  {
    path:'skills',
    component:SkillsComponent,
    pathMatch:'full',
  },
  {
    path:'work',
    component:WorkComponent,
    pathMatch:'full',
  },
  {
    path:'about',
    component:AboutComponent,
    pathMatch:'full',
  },
  {
    path:'contact',
    component:ContactComponent,
    pathMatch:'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
