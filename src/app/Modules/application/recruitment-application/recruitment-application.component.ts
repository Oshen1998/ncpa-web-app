import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormArray,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-recruitment-application',
  templateUrl: './recruitment-application.component.html',
  styleUrls: ['./recruitment-application.component.scss'],
})
export class RecruitmentApplicationComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: '',
  });
  thirdFormGroup = this._formBuilder.group({
    secondCtrl: '',
  });
  isOptional = false;

  constructor(private _formBuilder: FormBuilder) {}
}
