import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlResultQuestion, DropdownQuestion, FormPage, MultipleEntryQuestion, OLResultQuestion, QuestionBase, TextboxQuestion, DegreeQuestion, MastersQuestion } from '../interfaces/question';
import { of } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ApplyFormControlServiceService {

  constructor() { }

  toFormGroup(questions: QuestionBase<string>[]) {
    const group: any = {};

    questions.forEach(question => {

      if (question.controlType === 'alResult') {
        group[question.key] = new FormGroup({
          stream: new FormControl(question.value || '', Validators.required),
          generalKnowledgeGrade: new FormControl(question.value || '', Validators.required),
          generalEnglishGrade: new FormControl(question.value || '', Validators.required),
          subject1: new FormControl(question.value || '', Validators.required),
          subject2: new FormControl(question.value || '', Validators.required),
          subject3: new FormControl(question.value || '', Validators.required),
          subject1Grade: new FormControl(question.value || '', Validators.required),
          subject2Grade: new FormControl(question.value || '', Validators.required),
          subject3Grade: new FormControl(question.value || '', Validators.required),
        });
      } else if (question.controlType == 'olResult') {
        group[question.key] = new FormGroup({
          religion: new FormControl(question.value || '', Validators.required),
          'language': new FormControl('', Validators.required),
          'category_i': new FormControl('', Validators.required),
          'category_ii': new FormControl('', Validators.required),
          'category_iii': new FormControl('', Validators.required),
          // 'grade_religion': new FormControl('', Validators.required),
          // 'grade_language': new FormControl('', Validators.required),
          // 'grade_english': new FormControl('', Validators.required),
          // 'grade_mathematics': new FormControl('', Validators.required),
          // 'grade_science': new FormControl('', Validators.required),
          // 'grade_history': new FormControl('', Validators.required),
          // 'grade_category_i': new FormControl('', Validators.required),
          // 'grade_category_ii': new FormControl('', Validators.required),
          // 'grade_category_iii': new FormControl('', Validators.required),
          'religionGrade': new FormControl('', Validators.required),
          'languageGrade': new FormControl('', Validators.required),
          'englishGrade': new FormControl('', Validators.required),
          'mathematicsGrade': new FormControl('', Validators.required),
          'scienceGrade': new FormControl('', Validators.required),
          'historyGrade': new FormControl('', Validators.required),
          'category_iGrade': new FormControl('', Validators.required),
          'category_iiGrade': new FormControl('', Validators.required),
          'category_iiiGrade': new FormControl('', Validators.required),
        })
      }

      else if (question.controlType == 'degree') {
        group[question.key] = new FormGroup({
          'degreeName': new FormControl('', Validators.required),
          'universityName': new FormControl('', Validators.required),
          'degreeAwardedDate': new FormControl('', Validators.required),
          'effectiveDate': new FormControl('', Validators.required),
          degreeClass: new FormControl(question.value || '' , Validators.required),
        })
      }


      else if (question.controlType == 'masters') {
        group[question.key] = new FormGroup({
          'mastersName': new FormControl('', Validators.required),
          'universityName': new FormControl('', Validators.required),
          'degreeAwardedDate': new FormControl('', Validators.required),
          'effectiveDate': new FormControl('', Validators.required),
        })
      }


      else if (question.required) {
        group[question.key] = new FormControl(question.value || '', Validators.required);
      } else {
        group[question.key] = new FormControl(question.value || '');
      }

      // group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
      //   : new FormControl(question.value || '');


    });
    return new FormGroup(group);
  }

  getQuestions() {

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
        else if (question.controlType === 'degree') {
          return new DegreeQuestion(question);
        }
        else if (question.controlType === 'masters') {
          return new MastersQuestion(question);
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
        key: 'educationDetailsOL',
        title: 'Education Details O\\L Result',
        questions: [
          {
            controlType: 'olResult',
            key: 'olResult',
            label: 'O\\L Results',
            order: 1,
            questions: [

            ]
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
            order: 1,
            questions: [

            ]
          },
        ]
      },

      {
        key: 'degree',
        title: 'Degree Qualification',
        questions: [
          {
            controlType: 'degree',
            key: 'degree',
            label: 'Degree Qualification',
            order: 1,
            questions: [

            ]
          },
        ]
      },
      {
        key: 'masters',
        title: 'Masters Qualification',
        questions: [
          {
            controlType: 'masters',
            key: 'masters',
            label: 'Masters Qualification',
            order: 1,
            questions: [

            ]
          },
        ]
      },

    ];

    return pages;
  }
}
