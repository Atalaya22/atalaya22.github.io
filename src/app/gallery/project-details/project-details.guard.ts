import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { ProjectName } from '../gallery.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectDetailsGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const projectId = route.paramMap.get('projectId');
    if (!projectId) {
      return this.redirectToError();
    }

    const existsProject = (Object as any).values(ProjectName).includes(projectId);
    if (!existsProject) {
      return this.redirectToError();
    }

    return true;
  }

  private redirectToError(): boolean {
    this.router.navigate(['/projects']);
    return false;
  }
}
