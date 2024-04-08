import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-other-question',
  templateUrl: './other-question.component.html',
  styleUrls: ['./other-question.component.scss'],
})
export class OtherQuestionComponent {
  @Input() form!: FormGroup;

  getFormGroup(key: string): FormGroup {
    return this.form.controls['other'] as FormGroup;
  }
}
