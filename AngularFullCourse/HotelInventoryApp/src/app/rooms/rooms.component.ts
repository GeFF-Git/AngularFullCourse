
import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren ,SkipSelf} from '@angular/core';
import { Head } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { IRoom, IRoomList } from './rooms';
import { RoomsService } from './services/rooms.service';


@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked{
  /**
   *
   */



  hotelname = "Regenta";
  noofrooms = 10;
  hiderooms = false;
  title: string = ''

  rooms: IRoom | any =
    {
      totalRooms: 15,
      availableRooms: 10,
      bookedRooms: 5
    }

  roomsList: IRoomList[] = [];

  // Use static true when you are sure that the component doesn't cause any delay
  // It is primarily used for asynchronus operations
  // @ViewChild(HeaderComponent , {static : true}) headerComponent! : HeaderComponent;
  // By using @View Child, we can access the properties and methods used in the specified component.
  // In our case it's header component
  // We use view child when we only have one-instance (i.e) one tag such as <hinv-header></hinv-header>
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  // We use view chilren when we have multiple intstances of the same component (i.e) , multiple <hinv-header> component tags
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;
  // Generally we use constructor to inject services
  // Constructors should not have blocking code
  constructor(@SkipSelf() private roomsService : RoomsService) {

   this.roomsList =  this.roomsService.getRooms();


  }
  // ngOnDestroy(): void {
  //   console.log('On Destroy is called')
  // }
  ngAfterViewChecked(): void {
    this.headerComponent.title = "Rooms View"
    console.log(this.headerChildrenComponent);
    console.log(this.headerChildrenComponent.first.title = "header Title");
    console.log(this.headerChildrenComponent.last.title = "Footer Title");
    // this.headerChildrenComponent.get(0).title = "Welcome";

    // It is used to reuse the used component in a different manner
    console.log(this.headerChildrenComponent.get(0)?.title);



  }
  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View"
  }

  // ngDoCheck() is used to capture any changes or events raised withnin the entire application
  // Don't use ngOnChanges() and ngDoCheck() together
  // Try to avoid ngDoCheck() as much as possible since it's a costly operation
  ngDoCheck(): void {
    console.log('Do check is called');
  }


  // If you want to perform something right after the initialization of component, use ngOnInit()
  ngOnInit(): void {

    // console.log(this.headerComponent);

  }
  toggle() {

    this.hiderooms = !this.hiderooms;
    this.title = 'Rooms List'


  }

  selectedRoom!: IRoomList;
  selectRoom(room: IRoomList) {
    this.selectedRoom = room;

  }
  AddRoom() {
    const room: IRoomList = {
      roomNumber: 4,
      roomType: 'Private Suite',
      amenities: 'Air conditioner ,Free wifi, TV, Bathroom',
      price: 15000,
      photos: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fhotel&psig=AOvVaw2rhugXt7E9-tq2UVmC-kdN&ust=1678694747853000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOiE_LL31f0CFQAAAAAdAAAAABAI',
      checkInTime: new Date('13-Nov-2021'),
      checkOutTime: new Date('14-Nov-2021'),
      rating: 4.798123
    }

    // this.roomsList.push(room);
    this.roomsList = [...this.roomsList, room];

  }



}
