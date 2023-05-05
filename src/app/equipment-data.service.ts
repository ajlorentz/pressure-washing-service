import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Equipment {
  id: number;
  name: string;
  description: string;
  cost: number;
}

@Injectable({
  providedIn: 'root',
})
export class EquipmentDataService {
  equipment = [
    {
      id: 1,
      name: 'Lightweight Washer',
      description: 'Gentle washer used for light cleaning',
      cost: 30,
    },

    {
      id: 2,
      name: 'Medium-Duty Washer',
      description: 'Standard washer for normal cleaning',
      cost: 50,
    },

    {
      id: 3,
      name: 'Heavy-Duty Washer',
      description: 'Forceful washer for tough, stubborn cleaning',
      cost: 70,
    },

    {
      id: 4,
      name: 'Ultra-Strength Washer',
      description: 'Extremely forceful washer for crusted, engrained cleaning',
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

  getEquipment() {
    return this.equipment;
  }

  constructor(private http: HttpClient) {}

  getAllEquipment(): Observable<Equipment[]> {
    return this.http
      .get<Equipment[]>(
        'https://group-project-7015a-default-rtdb.firebaseio.com/' +
          'equipment.json'
      )
      .pipe(
        map((responseData) => {
          const equipmentArray: Equipment[] = [];
          for (let key in responseData) equipmentArray.push(responseData[key]);
          return equipmentArray;
        })
      );
  }

  // addEquipment(newEquipment: Equipment) {
  //   return this.http.post(
  //     'https://group-project-7015a-default-rtdb.firebaseio.com/' +
  //       'equipment.json',
  //     newEquipment
  //   );
  // }
}
