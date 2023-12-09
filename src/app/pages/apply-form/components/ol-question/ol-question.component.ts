import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ol-question',
  templateUrl: './ol-question.component.html',
  styleUrls: ['./ol-question.component.scss']
})
export class OlQuestionComponent {
  @Input() form!: FormGroup;


  grades = [
    'A',
    'B',
    'C',
    'D',
    'E',
  ]
}
