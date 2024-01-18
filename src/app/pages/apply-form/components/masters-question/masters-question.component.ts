import { Component,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-masters-question',
  templateUrl: './masters-question.component.html',
  styleUrls: ['./masters-question.component.scss']
})
export class MastersQuestionComponent {
  @Input() form!: FormGroup;
  getFormGroup(key: string): FormGroup {
    return this.form.controls['masters'] as FormGroup;
  }

  grades = [
    'First Class',
    'Second Upper Class',
    'Second Lower Class',
    'Third Class',
  ];
  

}
