import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormPage } from 'src/app/interfaces/question';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent {

  @Input() page!: FormPage;
  @Input() form!: FormGroup;



}
