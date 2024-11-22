import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Output() onAddingnewCalculation = new EventEmitter<{initialInvest:string, annualInvest:string, exspectedReturn:string, duration:string}>();

  enteredInitialInvest ='';
  enteredAnnualInvest='';
  enteredExspectedReturn='';
  enteredDuration='';

  onFormSubmit(){
    this.onAddingnewCalculation.emit({
      initialInvest : this.enteredInitialInvest,
      annualInvest : this.enteredAnnualInvest,
      exspectedReturn : this.enteredExspectedReturn,
      duration : this.enteredDuration,
    })
  }
}
