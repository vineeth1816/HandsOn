import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,OnDestroy {

  constructor(public data:DataService) {}

  message:String;
  subscription:Subscription;
  
  ngOnInit(){
    this.subscription=this.data.currentMessage.subscribe(message=>this.message=message);
  }


  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
 

}
