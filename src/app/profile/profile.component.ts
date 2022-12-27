import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PROFILE_INFO } from './profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  profileInfo = PROFILE_INFO;
  constructor(private router: Router) {}

  scrollTo(fragment: string) {
    this.router.navigate([], { fragment });
  }
}
