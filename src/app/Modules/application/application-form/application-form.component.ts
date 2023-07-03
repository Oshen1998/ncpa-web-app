import { Component } from '@angular/core';
import { CONTROLLER_TYPES } from 'src/app/constants';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss'],
})
export class ApplicationFormComponent {
  FIELD_TYPES = CONTROLLER_TYPES;
}
