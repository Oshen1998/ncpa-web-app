import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ApplyFormControlServiceService } from "src/app/Services/apply-form-control-service.service";
import { QuestionBase } from "src/app/interfaces/question";


@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.scss']
})
export class ApplyFormComponent {
  @Input() questions: QuestionBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: ApplyFormControlServiceService) { }

  ngOnInit() {
    this.qcs.getQuestions().subscribe((questions: QuestionBase<string>[]) => {
      this.questions = questions;
      this.form = this.qcs.toFormGroup(questions);
    });

  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
