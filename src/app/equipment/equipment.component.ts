import { Component, Input, OnInit } from '@angular/core';
import { EquipmentDataService } from '../equipment-data.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css'],
})
export class EquipmentComponent implements OnInit {
  constructor(private equipments: EquipmentDataService) {}

  @Input() equipment: {
    id: number;
    name: string;
    description: string;
    cost: number;
  };

  changeCostOfEquipment() {
    this.equipments.setCostOfSelectedWasher(this.equipment.cost);
    console.log(this.equipments.costOfSelectedWasher);
  }

  ngOnInit() {}
}
