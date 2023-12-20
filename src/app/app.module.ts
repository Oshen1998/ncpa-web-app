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
import { FooterComponent } from './pages/footer/footer.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { ReferenceModule } from './modules/reference/reference.module';
import { TemplateComponent } from './pages/template/template.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { QuestionComponent } from './pages/apply-form/components/question-component/question-component.component';
import { FormPageComponent } from './pages/apply-form/components/form-page/form-page.component';
import { VacanciesComponent } from './pages/Vacancies/Vacancies.component';
import { ApplyFormComponent } from './pages/apply-form/apply-component/apply-form.component';
import { AlQuestionComponent } from './pages/apply-form/components/al-question/al-question.component';
import { OlQuestionComponent } from './pages/apply-form/components/ol-question/ol-question.component';
import { DegreeQuestionComponent } from './pages/apply-form/components/degree-question/degree-question.component';
import { MastersQuestionComponent } from './pages/apply-form/components/masters-question/masters-question.component';
import { ProfessionalQuestionComponent } from './pages/apply-form/components/professional-question/professional-question.component';
import { WorkQuestionComponent } from './pages/apply-form/components/work-question/work-question.component';

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
    ApplyFormComponent,
    QuestionComponent,
    FormPageComponent,
    AlQuestionComponent,
    OlQuestionComponent,
    DegreeQuestionComponent,
    MastersQuestionComponent,
    ProfessionalQuestionComponent,
    WorkQuestionComponent,
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
export class AppModule { }
