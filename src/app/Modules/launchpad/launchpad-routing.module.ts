import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchpadComponent } from './pages/launchpad/launchpad.component';
import { RecruitmentsComponent } from './pages/recruitments/recruitments.component';

const routes: Routes = [
  {
    path: '',
    component: LaunchpadComponent,
  },
  {
    path: 'recruitment',
    component: RecruitmentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaunchpadRoutingModule {}
