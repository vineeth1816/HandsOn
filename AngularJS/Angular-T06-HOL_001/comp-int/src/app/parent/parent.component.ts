import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit{

  parentMessage="message from parent";
  constructor() { }


  @ViewChild("myvar")
  child: ChildComponent ;
  message:string;
  ngAfterViewInit(){
    this.message=this.child.message;
  }

  receiveMessage($event){
    this.message=$event;
  }

  

}
