import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-Abc',
  templateUrl: './Abc.component.html'
})
export class AbcComponent
{
  @ViewChild("myref") myValue:ElementRef;

  ngAfterViewInit()
  {
    console.log(this.myValue);
    this.myValue.nativeElement.focus()
  }
}