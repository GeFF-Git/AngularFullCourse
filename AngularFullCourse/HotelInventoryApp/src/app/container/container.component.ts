import { AfterContentInit, Component, ViewChild  , ContentChild, Host} from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers : [RoomsService]
})
export class ContainerComponent implements AfterContentInit {


  constructor( @Host() private roomsService : RoomsService) {


  }

// @ContentChild is used to access any content which is loaded via <ng-content>
@ContentChild(EmployeeComponent) employee!: EmployeeComponent ;


  ngAfterContentInit(): void {

    console.log(this.employee);
    this.employee.empName = "Geff Shelby"

  }

}
