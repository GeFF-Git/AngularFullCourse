import { Inject, Injectable } from '@angular/core';
import { IRoomList } from '../rooms';
import { App_Service_Config } from '../../AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';

@Injectable({

  // using "providedIn: 'root'" we'el get a single instance of the service provided across the application
  providedIn: 'root' // It denotes that the app is registered in the app module
})
export class RoomsService {

  constructor(@Inject( App_Service_Config) private config : AppConfig) {
    console.log(this.config.apiEndPoint);
     console.log('rooms service created');
     
   }



  roomsList: IRoomList[] = [{
    roomNumber: 1,
    roomType: 'Deluxe Room',
    amenities: 'Air conditioner ,Free wifi, TV, Bathroom',
    price: 500,
    photos: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fhotel&psig=AOvVaw2rhugXt7E9-tq2UVmC-kdN&ust=1678694747853000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOiE_LL31f0CFQAAAAAdAAAAABAI',
    checkInTime: new Date('11-Nov-2021'),
    checkOutTime: new Date('12-Nov-2021'),
    rating: 4.56789

  },
  {
    roomNumber: 2,
    roomType: 'Deluxe Room',
    amenities: 'Air conditioner ,Free wifi, TV, Bathroom',
    price: 600,
    photos: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fhotel&psig=AOvVaw2rhugXt7E9-tq2UVmC-kdN&ust=1678694747853000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOiE_LL31f0CFQAAAAAdAAAAABAI',
    checkInTime: new Date('12-Nov-2021'),
    checkOutTime: new Date('13-Nov-2021'),
    rating: 4.454321

  },
  {
    roomNumber: 3,
    roomType: 'Private Suite',
    amenities: 'Air conditioner ,Free wifi, TV, Bathroom',
    price: 10000,
    photos: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fhotel&psig=AOvVaw2rhugXt7E9-tq2UVmC-kdN&ust=1678694747853000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOiE_LL31f0CFQAAAAAdAAAAABAI',
    checkInTime: new Date('12-Nov-2021'),
    checkOutTime: new Date('13-Nov-2021'),
    rating: 4.798123

  }
  ]

  getRooms() {

    return this.roomsList;

  }
}
