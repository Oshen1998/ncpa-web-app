import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'app/auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'app/launchpad',
        loadChildren: () =>
          import('./modules/launchpad/launchpad.module').then(
            (m) => m.LaunchpadModule
          ),
      },
      {
        path: 'app/notice',
        loadChildren: () =>
          import('./modules/notices/notices.module').then(
            (m) => m.NoticesModule
          ),
      },
      {
        path: 'app/recruitment',
        loadChildren: () =>
          import('./modules/recruitments/recruitments.module').then(
            (m) => m.RecruitmentsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
