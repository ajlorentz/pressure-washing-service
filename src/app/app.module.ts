import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ReviewMainComponent } from './review-main/review-main.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, GalleryComponent, ReviewMainComponent],
  imports: [BrowserModule, MatGridListModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
