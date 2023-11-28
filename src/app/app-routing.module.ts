import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app/auth/login',
    pathMatch: 'full',
  },
  {
    path: 'app/auth',
    loadChildren: () =>
      import('./Modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'app/launchpad',
        loadChildren: () =>
          import('./Modules/launchpad/launchpad.module').then(
            (m) => m.LaunchpadModule
          ),
      },
      {
        path: 'app/application',
        loadChildren: () =>
          import('./Modules/application/application.module').then(
            (m) => m.ApplicationModule
          ),
      },
      {
        path: 'app/recruitment',
        loadChildren: () =>
          import('./Modules/recruitments/recruitments.module').then(
            (m) => m.RecruitmentsModule
          ),
      },
      {
        path: 'app/reference',
        loadChildren: () =>
          import('./Modules/reference/reference.module').then(
            (m) => m.ReferenceModule
          ),
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundPageComponent,
  },
  {
    path: '****',
    pathMatch: 'full',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
