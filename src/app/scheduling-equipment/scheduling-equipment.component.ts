import { Component, OnInit } from '@angular/core';
import { EquipmentDataService } from '../equipment-data.service';

export interface Equipment {
  id: number;
  name: string;
  description: string;
  cost: number;
}

@Component({
  selector: 'app-scheduling-equipment',
  templateUrl: './scheduling-equipment.component.html',
  styleUrls: ['./scheduling-equipment.component.css'],
})
export class SchedulingEquipmentComponent implements OnInit {
  equipmentList: Equipment[] = [];

  constructor(private equipment: EquipmentDataService) {}

  equipment_list = this.equipment.getEquipment();

  ngOnInit() {
    //this.getAllServicesFromServer()
  }

  public getAllEquipmentFromServer() {
    this.equipment.getAllEquipment().subscribe((data: Equipment[]) => {
      this.equipmentList = data;
    });
  }
}
