import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { RecruitmentApplicationComponent } from './recruitment-application/recruitment-application.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationComponent,
  },
  {
    path: 'form',
    component: RecruitmentApplicationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationRoutingModule {}
