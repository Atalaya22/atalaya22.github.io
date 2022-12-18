import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ProjectDetailsComponent } from './home/gallery/project-details/project-details.component';
import { ProjectDetailsGuard } from './home/gallery/project-details/project-details.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects/:projectId', component: ProjectDetailsComponent, canActivate: [ProjectDetailsGuard] },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
