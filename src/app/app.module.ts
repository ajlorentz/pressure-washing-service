import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
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
    SchedulingComponent,
    ServicesComponent,
    SchedulingServiceComponent,
    SchedulingEquipmentComponent,
    SchedulingPaymentComponent,
    EquipmentComponent,
    SchedulingFinalComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
