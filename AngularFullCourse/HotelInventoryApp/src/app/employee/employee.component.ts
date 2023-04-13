import { Component, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers:[RoomsService]
})
export class EmployeeComponent {

  empName : string = 'Shelby';


  // Use @Self() when you are confirm that this service will be used only in this particular level (i.e) this component.
  // After using @Self() it doesnt go and check other components and root components if the providers is not available. It straight away throws an error.
  constructor( @Self() private roomsService : RoomsService) {


  }


}
