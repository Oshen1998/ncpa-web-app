import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from 'src/app/interfaces/question';

@Component({
  selector: 'app-question-component',
  templateUrl: './question-component.component.html',
  styleUrls: ['./question-component.component.scss']
})
export class QuestionComponent {
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  get isValid() {

    if (this.question.controlType === 'olResult') return true;
    return this.form.controls[this.question.key].valid;
  }

  grades = [
    'A',
    'B',
    'C',
    'D',
    'E',
  ]

  addEntry() {
    if (this.question.answers) {

      this.question.answers = ([
        ...this.question.answers!,
        this.question.questions!
      ]);


    }
  }
}
