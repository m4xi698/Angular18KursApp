import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input()currentInvestmentArray=[{
    
  }];
  @Input()currentDuration='';
  @Input()currentInvestmentValue='';
  @Input()currentInterest='';
  @Input()currentTotalInterrest='';
  @Input()currentInvestedCapital='';
}
