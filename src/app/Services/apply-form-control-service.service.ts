import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DropdownQuestion, FormPage, QuestionBase, TextboxQuestion } from '../interfaces/question';
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

    const personalQuestions: QuestionBase<string>[] = [

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

    // user school and university name
    const educationalQuestions: QuestionBase<string>[] = [

      new TextboxQuestion({
        key: 'schoolName',
        label: 'School Name',
        order: 1,
        className: "col-6"
      }),

      new TextboxQuestion({
        key: 'universityName',
        label: 'University Name',
        order: 2,
        className: "col-6"
      }),

    ];







    const pages = [
      new FormPage(
        {
          key: 'personalDetails',
          title: 'Personal Details',
          questions: personalQuestions
        }
      ),

      new FormPage(
        {
          key: 'educationDetails',
          title: 'Education Details',
          questions: educationalQuestions
        }
      ),
    ]

    return of(pages);
  }
}
