import { Injectable } from '@angular/core';

@Injectable()
export class EquipmentDataService {
  equipment = [
    {
      id: 1,
      name: 'Lightweight Washer',
      cost: 30,
    },

    {
      id: 2,
      name: 'Medium-Duty Washer',
      cost: 50,
    },

    {
      id: 3,
      name: 'Heavy-Duty Washer',
      cost: 70,
    },

    {
      id: 4,
      name: 'Ultra-Strength Washer',
      cost: 130,
    },
  ];

  costOfSelectedWasher: number = 0;

  getCostOfSelectedWasher() {
    return this.costOfSelectedWasher;
  }

  setCostOfSelectedWasher(cost: number) {
    this.costOfSelectedWasher = cost;
  }

  constructor() {}
}
