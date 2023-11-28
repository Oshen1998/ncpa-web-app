import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LottieModule } from 'ngx-lottie';

// Material Module
import { CustomMaterialModule } from './material.module';

// Modules
import { AuthModule } from './Modules/auth/auth.module';
import { LaunchpadModule } from './Modules/launchpad/launchpad.module';
import { ApplicationModule } from './Modules/application/application.module';

// Components
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { VacanciesComponent } from './Pages/Vacancies/Vacancies.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { SidebarComponent } from './Pages/sidebar/sidebar.component';
import { ReferenceModule } from './Modules/reference/reference.module';
import { TemplateComponent } from './Pages/template/template.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';

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
