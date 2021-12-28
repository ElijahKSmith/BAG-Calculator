import { Component, OnInit } from '@angular/core';

import studentsData from '../../../assets/students/icons/students.json';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  activeStudents: string[] = [];
  disabledStudents: string[] = [];
  imgSize = '150px';

  constructor() {}

  ngOnInit(): void {
    this.activeStudents = studentsData.activeStudents;
    this.disabledStudents = studentsData.disabledStudents;
  }
}
