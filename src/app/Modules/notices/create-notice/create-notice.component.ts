import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoticesService } from '../notices.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-notice',
  templateUrl: './create-notice.component.html',
  styleUrls: ['./create-notice.component.scss']
})
export class CreateNoticeComponent {

  noticeFormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    content: new FormControl(null, [Validators.required]),
  });

constructor(
  private noticeService: NoticesService,
  private snackBar: MatSnackBar
){}

  onSave(){
    const data: any = {
      title: this.noticeFormGroup.controls.title.value,
      content: this.noticeFormGroup.controls.content.value
    }
    this.noticeService.createNotice(data).subscribe({
      next: (res)=>{
        this.snackBar.open('Notice Created Successfully');
      },
      error: (err)=>{
        this.snackBar.open('Oopz Something Went Wrong');
      }
    })
  }

}
