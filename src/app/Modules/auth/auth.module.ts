import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { CustomMaterialModule } from 'src/app/material.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [SigninComponent, ForgotPasswordComponent, ResetPasswordComponent],
  imports: [CommonModule, AuthRoutingModule, CustomMaterialModule],
})
export class AuthModule {}
