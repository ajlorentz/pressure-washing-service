import { Component, OnInit, Input } from '@angular/core';
import { ServiceDataService } from '../service-data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  constructor(private services: ServiceDataService) {}

  @Input() service: { id: number; serviceType: string; pricePerSqFt: number };

  changeCostOfService(area: number, price: number) {
    this.services.setCostOfService(area * price);
  }

  ngOnInit() {}
}
