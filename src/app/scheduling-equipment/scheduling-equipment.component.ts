import { Component, OnInit } from '@angular/core';
import { EquipmentDataService } from '../equipment-data.service';

@Component({
  selector: 'app-scheduling-equipment',
  templateUrl: './scheduling-equipment.component.html',
  styleUrls: ['./scheduling-equipment.component.css'],
})
export class SchedulingEquipmentComponent implements OnInit {
  constructor(private equipment: EquipmentDataService) {}

  equipment_list = this.equipment.getEquipment();

  ngOnInit() {}
}
