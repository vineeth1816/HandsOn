import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {

  @Input()
  childMessage:string;

  message:string="Hello World!!!";
  constructor() { }
  @Output()
  messageEvent = new EventEmitter<string>();
  sendMessage(){
    this.messageEvent.emit(this.message+"(new message)");
  }
  
}
