import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { EmploymentComponent } from './employment/employment.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ReviewMainComponent } from './review-main/review-main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddReviewComponent } from './add-review/add-review.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { ServicesComponent } from './services/services.component';
import { SchedulingEquipmentComponent } from './scheduling-equipment/scheduling-equipment.component';
import { SchedulingServiceComponent } from './scheduling-service/scheduling-service.component';
import { SchedulingPaymentComponent } from './scheduling-payment/scheduling-payment.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { SchedulingFinalComponent } from './scheduling-final/scheduling-final.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    ReviewMainComponent,
    AddReviewComponent,
    SchedulingComponent,
    ServicesComponent,
    SchedulingServiceComponent,
    SchedulingEquipmentComponent,
    SchedulingPaymentComponent,
    EmploymentComponent,
    EquipmentComponent,
    SchedulingFinalComponent,
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
