import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { ApplyFormControlServiceService } from 'src/app/services/apply-form-control-service.service';
import { FormPage, QuestionBase } from 'src/app/interfaces/question';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.scss'],
})
export class ApplyFormComponent {
  @Input() pages: FormPage[] | null = [];
  forms!: FormGroup[];
  payLoad = '';
  stepperOrientation: Observable<StepperOrientation>;

  selectedIndex = 0;

  constructor(
    private qcs: ApplyFormControlServiceService,
    breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit() {
    this.qcs.getQuestions().subscribe((pages) => {
      this.pages = pages;

      // this.form = this.qcs.toFormGroup(allQuestions);
      this.forms = this.pages.map((page) =>
        this.qcs.toFormGroup(page.questions)
      );
    });
  }

  onSubmit() {
    let newPayload = {};

    for (let form in this.forms) {
      newPayload = {
        ...newPayload,
        ...this.forms[form].getRawValue(),
      };
    }

    this.payLoad = JSON.stringify(newPayload);

    alert(`Saved the following values ${this.payLoad}`);
  }

  isReadyForSubmit() {
    return this.forms.every((form) => form.valid);
  }

  arrayRange(start: number, stop: number, step: number) {
    return Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step
    );
  }
}
