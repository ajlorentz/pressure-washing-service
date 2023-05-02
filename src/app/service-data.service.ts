import { Injectable } from '@angular/core';

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
  ];

  costOfService: number = 0;
  costOfSpecialRequest: number = 0;

  constructor() {}

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
