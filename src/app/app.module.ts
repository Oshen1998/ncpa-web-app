import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './material.module';
import { AuthModule } from './Modules/auth/auth.module';
import { VacanciesComponent } from './Pages/Vacancies/Vacancies.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LaunchpadModule } from './Modules/launchpad/launchpad.module';
import { NoticesModule } from './Modules/notices/notices.module';
import { HeaderComponent } from './Pages/header/header.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { SidebarComponent } from './Pages/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AuthModule,
    LaunchpadModule,
    NoticesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
