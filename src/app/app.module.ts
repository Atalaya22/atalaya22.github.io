import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectDetailsComponent } from './gallery/project-details/project-details.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './common/footer/footer.component';
import { FloatingMenuComponent } from './floating-menu/floating-menu.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    GalleryComponent,
    ProjectDetailsComponent,
    ProfileComponent,
    FooterComponent,
    FloatingMenuComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatDialogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
