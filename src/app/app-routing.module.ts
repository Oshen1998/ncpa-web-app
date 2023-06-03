import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './Modules/auth/signin/signin.component';
import { ForgotPasswordComponent } from './Modules/auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Modules/auth/reset-password/reset-password.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'ForgotPassword', component: ForgotPasswordComponent},
  { path: 'ResetPassword' , component: ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
