import { Component, OnInit } from '@angular/core';
import { EquipmentDataService } from '../equipment-data.service';
import { ServiceDataService } from '../service-data.service';

@Component({
  selector: 'app-scheduling-payment',
  templateUrl: './scheduling-payment.component.html',
  styleUrls: ['./scheduling-payment.component.css'],
})
export class SchedulingPaymentComponent implements OnInit {
  constructor(
    private service: ServiceDataService,
    private equipment: EquipmentDataService
  ) {}

  costOfService: number = this.service.getCostOfService();
  costOfEquipment: number = this.equipment.getCostOfSelectedWasher();
  costOfSpecialRequest: number = this.service.getCostOfSpecialRequest();

  totalCost: number =
    this.costOfService + this.costOfEquipment + this.costOfSpecialRequest;

  setSpecialRequestCost(cost: number) {
    this.service.setCostOfSpecialRequest(cost);
    this.costOfSpecialRequest = this.service.getCostOfSpecialRequest();
    this.totalCost =
      this.costOfService + this.costOfEquipment + this.costOfSpecialRequest;
  }

  ngOnInit() {}
}
