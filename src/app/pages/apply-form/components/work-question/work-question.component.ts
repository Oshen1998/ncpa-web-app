import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-work-question',
  templateUrl: './work-question.component.html',
  styleUrls: ['./work-question.component.scss']
})
export class WorkQuestionComponent {
  @Input() form!: FormGroup;

  getFormGroup(key: string): FormGroup {
    return this.form.controls['work'] as FormGroup;
  }

}
