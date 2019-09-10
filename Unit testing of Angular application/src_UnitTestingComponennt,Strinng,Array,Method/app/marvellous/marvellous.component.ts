import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Abc',
  templateUrl: './Abc.component.html',
  styleUrls: ['./Abc.component.css']
})
export class AbcComponent
{
  counter = 0;

  Increment()
  {
    this.counter++;
  }

  Decrement()
  {
    this.counter--;
  }
}
