import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Abc',
  templateUrl: './Abc.component.html',
  styleUrls: ['./Abc.component.css']
})
export class AbcComponent implements OnInit 
{

  public Technology = "Node.js"
  constructor() { }

  ngOnInit() {
  }

  fun()
  {
    return "Learn "+ this.Technology;
  }
}
