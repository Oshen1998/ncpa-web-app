import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Material Module
import { CustomMaterialModule } from './material.module';

// Modules
import { AuthModule } from './modules/auth/auth.module';
import { LaunchpadModule } from './modules/launchpad/launchpad.module';
import { ApplicationModule } from './modules/application/application.module';

// Components
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VacanciesComponent } from './pages/Vacancies/Vacancies.component';
import { FooterComponent } from './pages/footer/footer.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { HeaderComponent } from './pages/header/header.component';
import { ReferenceModule } from './modules/reference/reference.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    SidebarComponent,
    VacanciesComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AuthModule,
    LaunchpadModule,
    ApplicationModule,
    ReferenceModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
