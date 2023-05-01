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

  ngOnInit() {}
}
