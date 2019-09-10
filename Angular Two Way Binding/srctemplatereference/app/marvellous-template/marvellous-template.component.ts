import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Abc-template',
  templateUrl: './Abc-template.component.html',
  styleUrls: ['./Abc-template.component.css']
})
export class AbcTemplateComponent implements OnInit 
{
  constructor() { }

  ngOnInit() 
  {
  }

  // Event listener for button
  public AcceptData(value)
  {
    console.log(value);
  }
}
