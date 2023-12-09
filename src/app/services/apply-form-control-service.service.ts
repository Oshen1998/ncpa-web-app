import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlResultQuestion, DropdownQuestion, FormPage, MultipleEntryQuestion, OLResultQuestion, QuestionBase, TextboxQuestion } from '../interfaces/question';
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
        if (question.controlType === 'dropdown') {
          return new DropdownQuestion(question);
        } else if (question.controlType === 'textbox') {
          return new TextboxQuestion(question);
        } else if (question.controlType === 'multiple-entry') {
          return new MultipleEntryQuestion(question);
        } else if (question.controlType === 'olResult') {
          return new OLResultQuestion(question);
        } else if (question.controlType === 'alResult') {
          return new AlResultQuestion(question);
        }

        else {
          throw new Error('Invalid control type');
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
            controlType: 'dropdown',
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
            controlType: 'textbox',
            key: 'fullName',
            label: 'Name in Full',
            order: 2,
            className: "col-12 col-sm-8"
          },
          {
            controlType: 'textbox',
            key: 'fullNameInitials',
            label: 'Name with Initials',
            order: 3,
          },
          {
            controlType: 'textbox',
            key: 'dateOfBirth',
            label: 'Date of Birth',
            type: 'date',
            order: 4,
            className: "col-8"
          },
          {
            controlType: 'textbox',
            key: 'age',
            label: 'Age',
            type: 'number',
            order: 5,
            className: "col-4"
          },
          {
            controlType: 'dropdown',
            key: 'sex',
            label: 'Sex',
            options: [
              {
                key: 'male',
                value: 'Male'
              }, {
                key: "female",
                value: "Female"
              }
            ],
            order: 6,
            required: true,
            className: "col-12 col-sm-4"
          },
          {
            controlType: 'textbox',
            key: 'nic',
            label: 'National Identity Card Number',
            order: 7,
          },
          {
            controlType: 'dropdown',
            key: 'civilStatus',
            label: 'Civil Status',
            order: 8,
            options: [
              {
                key: 'married',
                value: 'Married'
              }, {
                key: "single",
                value: "Single"
              }

            ]
          },
          {
            controlType: 'textbox',
            key: 'nationality',
            label: 'Nationality',
            order: 9,
          },
          {
            controlType: 'textbox',
            key: 'permanentAddress',
            label: 'Permanent Address',
            order: 10,
          },
          {
            controlType: 'textbox',
            key: 'contactNumber',
            label: 'Contact Number',
            order: 11,
          },
          {
            controlType: 'textbox',
            key: 'email',
            label: 'Email',
            order: 12,
          },
          {
            controlType: 'dropdown',
            key: 'internalOrExternal',
            label: 'Internal or External',
            options: [
              {
                key: 'internal',
                value: 'Internal'
              },
              {
                key: 'external',
                value: 'External'
              }
            ],
            order: 6,
            required: true,
            className: "col-12 col-sm-4"
          },
        ]
      },

      {
        key: 'educationDetailsAL',
        title: 'Education Details A\\L Result',
        questions: [
          {
            controlType: 'alResult',
            key: 'alResult',
            label: 'A\\L Results',
            isSpecial: true,
            order: 1,
            questions: [

            ]
          },
        ]
      },
      {
        key: 'educationDetailsOL',
        title: 'Education Details O\\L Result',
        questions: [
          {
            controlType: 'olResult',
            key: 'olResult',
            label: 'O\\L Results',
            order: 1,
            isSpecial: true,
            questions: [

            ]
          },
        ]
      },

    ];

    return pages;
  }
}
