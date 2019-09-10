import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Abc-event',
  templateUrl: './Abc-event.component.html',
  styleUrls: ['./Abc-event.component.css']
})
export class AbcEventComponent implements OnInit 
{
  constructor() { }

  ngOnInit() 
  {
  }

  public str="";

  // It is condiderd as our event handler
  public AbcEvent()
  {
    console.log('Button pressed');
  }

  public AbcNewEvent()
  {
    this.str="Button clicked";  
  }

  public AbcEventInfo(value)
  {
    console.log(value);
  }
}
