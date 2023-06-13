import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoticeComponent } from './create-notice/create-notice.component';
import { ViewNoticeComponent } from './view-notice/view-notice.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateNoticeComponent,
  },
  {
    path: 'view',
    component: ViewNoticeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticesRoutingModule {}
