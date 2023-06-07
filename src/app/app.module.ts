import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './material.module';
import { AuthModule } from './Modules/auth/auth.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { LaunchpadModule } from './Modules/launchpad/launchpad.module';
import { NoticesModule } from './Modules/notices/notices.module';

@NgModule({
  declarations: [AppComponent, DashboardComponent, HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AuthModule,
    LaunchpadModule,
    NoticesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
