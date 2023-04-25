import { Injectable } from '@angular/core';

@Injectable()
export class ServiceDataService {
  Services = [
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

  constructor() {}
}
