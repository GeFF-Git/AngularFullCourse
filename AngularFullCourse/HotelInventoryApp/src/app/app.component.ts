import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { LoggerService } from './logger.service';
import { RoomsComponent } from './rooms/rooms.component';
import { localStorageToken } from 'src/app/rooms/services/localstorage.token';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit,OnInit {


  // @Optional() makes that service optional. It won't cause an error even if it doesn't has providedin : 'root' inside @Injectable
  constructor(@Optional() private loggerServie : LoggerService, @Inject(localStorageToken) private localStorage : Storage  ) {

    this.localStorage.setItem('name','Regenta');


  }
  ngOnInit(): void {

    //This ? denotes that this service will be executed only when the service exists
    this.loggerServie?.log('app.component ngOnInit()');
    console.log(this.name.nativeElement.innerText = "Regenta");
  }
  ngAfterViewInit(): void {
    // const componentRef = this.ver.createComponent(RoomsComponent);
    // componentRef.instance.noofrooms = 50;
  }
  title = 'HotelInventoryApp';
  // role = 'Admin'
  role = 'User'


// View container ref is used to dynamically load a component
  // @ViewChild('user',{read: ViewContainerRef}) ver!:ViewContainerRef;
  @ViewChild('name',{static: true}) name!:ElementRef;
}

