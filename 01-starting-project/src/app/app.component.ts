import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { UserInputComponent } from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports:[
    HeaderComponent,
    InvestmentResultsComponent,
    UserInputComponent
  ]
})
export class AppComponent {
  Investments=[{
  initialInvest:'',
  annualInvest:'',
  exspectedReturn:'',
  duration:'',
}];

  passInvestementInformation(investInfo : {initialInvest:string, annualInvest:string, exspectedReturn:string, duration:string}){
    this.Investments.push(investInfo);
  }
}
