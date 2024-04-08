import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-professional-question',
  templateUrl: './professional-question.component.html',
  styleUrls: ['./professional-question.component.scss'],
})
export class ProfessionalQuestionComponent {
  @Input() form!: FormGroup;

  getFormGroup(key: string): FormGroup {
    return this.form.controls['professional'] as FormGroup;
  }
}
