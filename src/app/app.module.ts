import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LottieModule } from 'ngx-lottie';

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
import { ReferenceModule } from './modules/reference/reference.module';
import { TemplateComponent } from './pages/template/template.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export function playerFactory() {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    SidebarComponent,
    VacanciesComponent,
    TemplateComponent,
    NotFoundPageComponent,
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
    LottieModule.forRoot({ player: playerFactory, useWebWorker: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
