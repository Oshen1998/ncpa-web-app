import { Component } from '@angular/core';
import { CONTROLLER_TYPES } from 'src/app/dataStores/application.datastore.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss'],
})
export class ApplicationFormComponent {
  FIELD_TYPES = CONTROLLER_TYPES;
}
