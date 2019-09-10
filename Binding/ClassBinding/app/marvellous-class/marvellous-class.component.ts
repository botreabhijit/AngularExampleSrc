import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Abc-class',
  templateUrl: './Abc-class.component.html',
  styleUrls: ['./Abc-class.component.css']
})
export class AbcClassComponent implements OnInit 
{
  public MyClass="success";
  
  public IsSet = "true";

  constructor() { }

  ngOnInit() {
  }

}
