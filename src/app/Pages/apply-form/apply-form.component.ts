import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ApplyFormControlServiceService } from "src/app/Services/apply-form-control-service.service";
import { FormPage, QuestionBase } from "src/app/interfaces/question";


@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.scss']
})
export class ApplyFormComponent {
  @Input() pages: FormPage[] | null = [];
  forms!: FormGroup[];
  payLoad = '';

  selectedIndex = 0;

  constructor(private qcs: ApplyFormControlServiceService) { }

  ngOnInit() {
    this.qcs.getQuestions().subscribe((pages) => {
      this.pages = pages;


      // this.form = this.qcs.toFormGroup(allQuestions);
      this.forms = this.pages.map((page) => this.qcs.toFormGroup(page.questions))
    });

  }

  onSubmit() {


    this.payLoad = JSON.stringify(this.forms[this.selectedIndex].getRawValue());
  }
}
