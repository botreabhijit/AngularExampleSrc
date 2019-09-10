import { Component } from '@angular/core';

// import classes which are required for reactive forms
import {FormBuilder,FormGroup,Validators, FormControl} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  AbcForm = new FormGroup(
    {
      username : new FormControl('Abhijit'),
      passowrd : new FormControl(''),
      ConfirmPass : new FormControl(''),
      // Add new nes
      AbcClass : new FormGroup(
        {
          batch : new FormControl('Python'),
          fees : new FormControl('5000')
        }
      )
    }

  );

  // Method to set FormControl fields through program
  SetData()
  {
    this.AbcForm.setValue(
      {
        username : 'Abhijit',
        passowrd : 'abcd',
        ConfirmPass :  'abcd',
        AbcClass : 
        {
          batch : 'Python',
          fees : '5000'
        }
      }
    )
  }
}
