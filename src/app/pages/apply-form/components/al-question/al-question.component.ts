import { Component } from '@angular/core';
import { ALSubjects } from 'src/app/interfaces/question';
@Component({
  selector: 'app-al-question',
  templateUrl: './al-question.component.html',
  styleUrls: ['./al-question.component.scss']
})
export class AlQuestionComponent {
  selectedStream: string = "";

  grades = [
    'A',
    'B',
    'C',
    'D',
    'E',
  ]

  streams = ALSubjects;


  getSubjects() {
    if (this.selectedStream === "") return [];

    const stream = this.streams.find(stream => stream.key === this.selectedStream);

    if (stream) return stream.subjects;
    return [];
  }


}
