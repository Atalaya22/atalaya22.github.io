import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectDetailsComponent } from './home/gallery/project-details/project-details.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ErrorComponent, HeaderComponent, GalleryComponent, ProjectDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
