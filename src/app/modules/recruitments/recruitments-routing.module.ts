import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecruitmentComponent } from './recruitment/recruitment.component';

const routes: Routes = [
  {
    path: '',
    component: RecruitmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecruitmentsRoutingModule {}
