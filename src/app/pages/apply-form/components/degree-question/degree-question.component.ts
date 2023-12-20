import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-degree-question',
  templateUrl: './degree-question.component.html',
  styleUrls: ['./degree-question.component.scss'],
})
export class DegreeQuestionComponent {
  @Input() form!: FormGroup;

  getFormGroup(key: string): FormGroup {
    return this.form.controls['degree'] as FormGroup;
  }

  grades = [
    'First Class',
    'Second Upper Class',
    'Second Lower Class',
    'Third Class',
  ];
  
  
}
