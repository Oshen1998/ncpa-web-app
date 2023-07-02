import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferencesComponent } from './references/references.component';

const routes: Routes = [
  {
    path: '',
    component: ReferencesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferenceRoutingModule {}
