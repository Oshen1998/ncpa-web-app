import { Component, Input } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-not-found-data',
  templateUrl: './not-found-data.component.html',
  styleUrls: ['./not-found-data.component.scss'],
})
export class NotFoundDataComponent {
  @Input() title = '';
  @Input() description = '';

  options: AnimationOptions = {
    path: '../../../assets/animations/not-found.json',
  };
}
