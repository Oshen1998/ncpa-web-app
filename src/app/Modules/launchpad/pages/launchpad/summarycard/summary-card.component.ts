import { Component, Input } from '@angular/core';

@Component({
  selector: 'summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.scss']
})
export class SummaryCard {
  
  @Input() title: string;
  @Input() total: number;

  constructor() {
    this.title = "";
    this.total = 0;
  }

}
