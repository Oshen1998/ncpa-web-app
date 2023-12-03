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

    // const personalQuestions: QuestionBase<string>[] = [

    //   new DropdownQuestion({
    //     key: 'title',
    //     label: 'Title',
    //     options: [
    //       {
    //         'key': 'mr',
    //         'value': 'Mr.'
    //       },
    //       {
    //         'key': 'mrs',
    //         'value': 'Mrs.'
    //       },
    //       {
    //         'key': 'ms',
    //         'value': 'Ms.'
    //       },

    //       {
    //         'key': 'rev',
    //         'value': 'Rev.'
    //       }
    //     ],
    //     order: 1,
    //     required: true,
    //     className: "col-12 col-sm-4"
    //   }),

    //   new TextboxQuestion({
    //     key: 'fullName',
    //     label: 'Name in Full',
    //     order: 2,
    //     className: "col-12 col-sm-8"
    //   }),

    //   new TextboxQuestion({
    //     key: 'fullNameInitials',
    //     label: 'Name with Initials',
    //     type: 'email',
    //     order: 3,
    //   }),
    // ];

    // // user school and university name
    // const educationalQuestions: QuestionBase<string>[] = [

    //   new TextboxQuestion({
    //     key: 'schoolName',
    //     label: 'School Name',
    //     order: 1,
    //     className: "col-12 col-sm-6"
    //   }),

    //   new TextboxQuestion({
    //     key: 'universityName',
    //     label: 'University Name',
    //     order: 2,
    //     className: "col-12 col-sm-6"
    //   }),

    // ];

    // const pages = [
    //   new FormPage(
    //     {
    //       key: 'personalDetails',
    //       title: 'Personal Details',
    //       questions: personalQuestions
    //     }
    //   ),

    //   new FormPage(
    //     {
    //       key: 'educationDetails',
    //       title: 'Education Details',
    //       questions: educationalQuestions
    //     }
    //   ),
    // ]

    const pages = this.getJsonQuestions();

    const pagesTransformed: FormPage[] = pages.map((page: any) => {
      const questions = page.questions.map((question: any) => {
        if (question.type === 'dropdown') {
          return new DropdownQuestion(question);
        } else if (question.type === 'textbox') {
          return new TextboxQuestion(question);
        } else {
          throw new Error('Invalid question type');
        }
      })

      return new FormPage({
        ...page,
        questions
      })
    })

    return of(pagesTransformed);
  }

  getJsonQuestions(): any {
    const pages = [
      {
        key: 'personalDetails',
        title: 'Personal Details',
        questions: [
          {
            type: 'dropdown',
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
            className: "col-12 col-sm-4"
          },
          {
            type: 'textbox',
            key: 'fullName',
            label: 'Name in Full',
            order: 2,
            className: "col-12 col-sm-8"
          },
          {
            type: 'textbox',
            key: 'fullNameInitials',
            label: 'Name with Initials',
            order: 3,
          }
        ]
      }

    ];

    return pages;
  }
}
