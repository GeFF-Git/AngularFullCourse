import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { IRoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  // 'ChangeDetectionStrategy.OnPush' is used to run change detection cycle only when we have changes externally (i.e) from parent component using @input, @output
  // 'ChangeDetectionStrategy.Default' is used to run change detection cycle only when we have changes internally (i.e) inside the component
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit,OnChanges, OnDestroy {


@Input() roomsList : IRoomList[] = [];
@Input() title : string = '';
@Output() selectedRoom = new EventEmitter<IRoomList>();

  constructor() {


  }

  // ngOnChanges() is only used to a component which has @Input decorator (i.e) parent to child comunication
  // It is used when you want to modify the property after getting the i/p values
  // It works when i/p properties gets new value
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();

    }
  }
  ngOnInit(): void {

  }

  selectRoom(room : IRoomList){
this.selectedRoom.emit(room);
  }

  // It is used to free the memory consuming code
  // It is used to unsubscribe the subscribed data which we do using observable
  ngOnDestroy(): void {
    console.log('On Destroy is called')
  }

}
