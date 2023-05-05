import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Service {
  id: number;
  serviceType: string;
  pricePerSqFt: number;
}

@Injectable({
  providedIn: 'root',
})
export class ServiceDataService {
  services = [
    {
      id: 1,
      serviceType: 'Roof Wash',
      pricePerSqFt: 5,
    },

    {
      id: 2,
      serviceType: 'Deck Wash',
      pricePerSqFt: 2,
    },

    {
      id: 3,
      serviceType: 'Gutter Wash',
      pricePerSqFt: 6,
    },

    {
      id: 4,
      serviceType: 'Driveway Wash',
      pricePerSqFt: 4,
    },

    {
      id: 5,
      serviceType: 'Siding Wash',
      pricePerSqFt: 2,
    },

    {
      id: 6,
      serviceType: 'Commercial Building Wash',
      pricePerSqFt: 5,
    },
  ];

  costOfService: number = 0;
  costOfSpecialRequest: number = 0;

  constructor(private http: HttpClient) {}

  getAllServices(): Observable<Service[]> {
    return this.http
      .get<Service[]>(
        'https://group-project-7015a-default-rtdb.firebaseio.com/' +
          'service.json'
      )
      .pipe(
        map((responseData) => {
          const serviceArray: Service[] = [];
          for (let key in responseData) serviceArray.push(responseData[key]);
          return serviceArray;
        })
      );
  }

  addService(newService: Service) {
    return this.http.post(
      'https://group-project-7015a-default-rtdb.firebaseio.com/' +
        'service.json',
      newService
    );
  }

  getServices() {
    return this.services;
  }

  getCostOfService() {
    return this.costOfService;
  }

  setCostOfService(price: number) {
    this.costOfService = price;
  }

  getCostOfSpecialRequest() {
    return this.costOfSpecialRequest;
  }

  setCostOfSpecialRequest(cost: number) {
    this.costOfSpecialRequest = cost;
  }
}
