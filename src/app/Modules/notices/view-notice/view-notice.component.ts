import { Component } from '@angular/core';
import { NoticesService } from '../notices.service';

@Component({
  selector: 'app-view-notice',
  templateUrl: './view-notice.component.html',
  styleUrls: ['./view-notice.component.scss']
})
export class ViewNoticeComponent {

  noticeList:any = []

  constructor(
    private noticeService: NoticesService
  ){
    this.noticeList.push(
      {
        title: 'test title',
        content: 'test content',
        isRead: false,
      },
      {
        title: 'test title 2',
        content: 'test content 2',
        isRead: true,
      }
    )
  }

  onRead(index:number){
    console.log(index)
    this.noticeService.changeReadStatus(true).subscribe({
      next: ()=>{
        //
      },
      error: ()=>{
        //
      }
    })
  }

}
