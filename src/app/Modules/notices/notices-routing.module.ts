import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticeComponent } from './notice/notice.component';

const routes: Routes = [
  {
    path: '',
    component: NoticeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticesRoutingModule {}
