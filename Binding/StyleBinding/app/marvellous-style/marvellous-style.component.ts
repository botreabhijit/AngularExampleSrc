import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Abc-style',
  templateUrl: './Abc-style.component.html',
  styleUrls: ['./Abc-style.component.css']
})
export class AbcStyleComponent implements OnInit 
{
  public IsSet=true;
  public MyColor="Orange";
  
  constructor() { }

  ngOnInit() {
  }

}
