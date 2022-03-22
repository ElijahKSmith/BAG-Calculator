import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRippleModule } from '@angular/material/core';
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
  imports: [
    CommonModule,
    CustomPipesModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatGridListModule,
    MatRippleModule,
  ],
  exports: [StudentsComponent],
})
export class StudentsModule {}
