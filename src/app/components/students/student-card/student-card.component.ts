import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { StudentDialogComponent } from '../student-dialog/student-dialog.component';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss'],
})
export class StudentCardComponent implements OnInit {
  @Input() studentName = '';
  @Input() studentImage = '';
  @Input() disabled = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(StudentDialogComponent, {
      data: { student: this.studentName },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
