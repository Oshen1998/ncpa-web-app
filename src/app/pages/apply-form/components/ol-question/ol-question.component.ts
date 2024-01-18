import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OLSubjects } from 'src/app/interfaces/question';

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

  olSubjects = OLSubjects

  getFormGroup(key: string): FormGroup {
    return this.form.controls['olResult'] as FormGroup;
  }

  getSubjects(key: string) {
    return this.olSubjects.find(subject => subject.key === key)!
  }
}
