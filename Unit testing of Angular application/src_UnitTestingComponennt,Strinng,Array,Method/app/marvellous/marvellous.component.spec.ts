import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcComponent } from './Abc.component';


describe('AbcComponent', ()=>{
  it('Should increment counter by 1 when we call incremennt method',()=>{
    let obj = new AbcComponent();

    obj.Increment();
    
    expect(obj.counter).toBe(1);
  });
  
  it('Should decrement counter by 1 when we call decrement method',()=>{
    let obj = new AbcComponent();

    obj.Decrement();
    
    expect(obj.counter).toBe(-1);
  });
})




















describe('AbcComponent', () => {
  let component: AbcComponent;
  let fixture: ComponentFixture<AbcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
