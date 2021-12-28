import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionSelectComponent } from './components/mission-select/mission-select.component';

import { StudentsComponent } from './components/students/students.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
  },
  {
    path: 'missions',
    component: MissionSelectComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      relativeLinkResolution: 'legacy',
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
