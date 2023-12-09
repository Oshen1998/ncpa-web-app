import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ALSubjects } from 'src/app/interfaces/question';
@Component({
  selector: 'app-al-question',
  templateUrl: './al-question.component.html',
  styleUrls: ['./al-question.component.scss']
})
export class AlQuestionComponent {
  @Input() form!: FormGroup;
  selectedStream: string = "";

  grades = [
    'A',
    'B',
    'C',
    'D',
    'E',
  ]

  streams = ALSubjects;



  getFormGroup(key: string): FormGroup {
    console.log((this.form.controls['alResult'] as FormGroup).controls['stream'])
    return this.form.controls['alResult'] as FormGroup;
  }



  getSubjects() {
    console.log(this.form?.controls);
    if (this.selectedStream === "") return [];

    const stream = this.streams.find(stream => stream.key === this.selectedStream);

    if (stream) return stream.subjects;
    return [];
  }


  onStreamChanged(event: any) {
    this.selectedStream = event.value;
  }

}
