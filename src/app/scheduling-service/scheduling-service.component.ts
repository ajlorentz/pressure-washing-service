import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../service-data.service';

@Component({
  selector: 'app-scheduling-service',
  templateUrl: './scheduling-service.component.html',
  styleUrls: ['./scheduling-service.component.css'],
})
export class SchedulingServiceComponent implements OnInit {
  constructor(private services: ServiceDataService) {}

  service_list = this.services.getServices();

  ngOnInit() {}
}
