import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectDetailsComponent } from './gallery/project-details/project-details.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './common/footer/footer.component';
import { FloatingMenuComponent } from './floating-menu/floating-menu.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactComponent } from './contact/contact.component';
import { ProjectDisplayComponent } from './gallery/project-display/project-display.component';
import { ScrollTrackerDirective } from './core/directives/scroll-tracker.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { ChipListComponent } from './gallery/chip-list/chip-list.component';
import { MatChipsModule } from '@angular/material/chips';
import { ShowMoreButtonComponent } from './gallery/show-more-button/show-more-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    ProjectDetailsComponent,
    ProfileComponent,
    FooterComponent,
    FloatingMenuComponent,
    ContactComponent,
    ProjectDisplayComponent,
    ScrollTrackerDirective,
    ChipListComponent,
    ShowMoreButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
