import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'app/launchpad',
        loadChildren: () => import('./Modules/launchpad/launchpad.module').then(m => m.LaunchpadModule)
      },
      {
        path: 'notice',
        loadChildren: () => import('./Modules/notices/notices.module').then(m => m.NoticesModule)
      },
    ]
  },
  {
    path: 'app/auth',
    loadChildren: () =>
      import('./Modules/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
