import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app/auth/login',
    pathMatch: 'full',
  },
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
        path: 'app/application',
        loadChildren: () =>
          import('./modules/application/application.module').then(
            (m) => m.ApplicationModule
          ),
      },
      {
        path: 'app/recruitment',
        loadChildren: () =>
          import('./modules/recruitments/recruitments.module').then(
            (m) => m.RecruitmentsModule
          ),
      },
      {
        path: 'app/reference',
        loadChildren: () =>
          import('./modules/reference/reference.module').then(
            (m) => m.ReferenceModule
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
