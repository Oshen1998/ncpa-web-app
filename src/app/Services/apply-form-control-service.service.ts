import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DropdownQuestion, QuestionBase, TextboxQuestion } from '../interfaces/question';
import { of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApplyFormControlServiceService {

  constructor() { }

  toFormGroup(questions: QuestionBase<string>[]) {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }

  getQuestions() {

    const questions: QuestionBase<string>[] = [

      new DropdownQuestion({
        key: 'title',
        label: 'Title',
        options: [
          {
            'key': 'mr',
            'value': 'Mr.'
          },
          {
            'key': 'mrs',
            'value': 'Mrs.'
          },
          {
            'key': 'ms',
            'value': 'Ms.'
          },

          {
            'key': 'rev',
            'value': 'Rev.'
          }
        ],
        order: 1,
        required: true,
        className: "col-4"
      }),

      new TextboxQuestion({
        key: 'fullName',
        label: 'Name in Full',
        order: 2,
        className: "col-8"
      }),

      new TextboxQuestion({
        key: 'fullNameInitials',
        label: 'Name with Initials',
        type: 'email',
        order: 3,
      }),


    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
