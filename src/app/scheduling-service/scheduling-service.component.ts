import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../service-data.service';

export interface Service {
  id: number;
  serviceType: string;
  pricePerSqFt: number;
}

@Component({
  selector: 'app-scheduling-service',
  templateUrl: './scheduling-service.component.html',
  styleUrls: ['./scheduling-service.component.css'],
})
export class SchedulingServiceComponent implements OnInit {
  services: Service[] = [];

  constructor(private service: ServiceDataService) {}

  service_list = this.service.getServices();

  ngOnInit() {
    // this.getAllServicesFromServer();
  }

  public getAllServicesFromServer() {
    this.service.getAllServices().subscribe((data: Service[]) => {
      this.services = data;
    });
  }
}
