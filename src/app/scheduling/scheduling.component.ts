import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../service-data.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css'],
})
export class SchedulingComponent implements OnInit {
  constructor(private services: ServiceDataService) {}

  tiles: Tile[] = [{text: '', cols: 12, rows: 1, color: ''},{text: '', cols: 12, rows: 1, color: 'lightgreen'}];

  service_list = this.services.getServices();

  showEquipmentPage: boolean = false;
  showServicePage: boolean = true;
  showPaymentPage: boolean = false;

  toggleServicePage() {
    this.showEquipmentPage = false;
    this.showServicePage = true;
    this.showPaymentPage = false;
  }

  toggleEquipmentPage() {
    this.showEquipmentPage = true;
    this.showServicePage = false;
    this.showPaymentPage = false;
  }

  togglePaymentPage() {
    this.showEquipmentPage = false;
    this.showServicePage = false;
    this.showPaymentPage = true;
  }

  ngOnInit() {}
}
