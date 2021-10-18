import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { 
    path: '', 
    component: NavbarComponent
  },
  { 
    path: 'projects', 
    component: ProjectsComponent
  },
  {
    path: 'blog/:id',
    component: BlogdetailsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
  {
    path: '',
    redirectTo: '/', pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
