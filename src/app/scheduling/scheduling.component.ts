import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../service-data.service';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css'],
})
export class SchedulingComponent implements OnInit {
  constructor(private services: ServiceDataService) {}

  service_list = this.services.getServices();

  showEquipmentPage: boolean = false;
  showServicePage: boolean = true;

  toggleServicePage() {
    this.showEquipmentPage = false;
    this.showServicePage = true;
  }

  toggleEquipmentPage() {
    this.showEquipmentPage = true;
    this.showServicePage = false;
  }

  ngOnInit() {}
}
