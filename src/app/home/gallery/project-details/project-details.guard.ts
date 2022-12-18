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
    const existsProject = (Object as any).values(ProjectName).includes(projectId);
    if (!projectId || !existsProject) {
      this.router.navigate(['/projects']);
      return false;
    }
    return !!projectId;
  }
}
