import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [AppComponent, SchedulingComponent, ServicesComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
