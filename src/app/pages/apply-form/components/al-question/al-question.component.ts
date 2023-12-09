import { Component } from '@angular/core';

@Component({
  selector: 'app-al-question',
  templateUrl: './al-question.component.html',
  styleUrls: ['./al-question.component.scss']
})
export class AlQuestionComponent {
  stream: string = "";

  grades = [
    'A',
    'B',
    'C',
    'D',
    'E',
  ]

  constructor() { }
}
