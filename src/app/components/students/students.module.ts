import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgModule } from '@angular/core';

import { CustomPipesModule } from '../../pipes/custom-pipes.module';
import { StudentCardComponent } from './student-card/student-card.component';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import { StudentsComponent } from './students.component';

@NgModule({
  declarations: [
    StudentCardComponent,
    StudentDialogComponent,
    StudentsComponent,
  ],
  imports: [CommonModule, CustomPipesModule, MatCardModule, MatGridListModule],
  exports: [StudentsComponent],
})
export class StudentsModule {}
