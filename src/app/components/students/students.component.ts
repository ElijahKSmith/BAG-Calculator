import { Component, OnInit } from '@angular/core';

import studentList from '../../../assets/students/students.json';

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
    this.activeStudents = studentList.activeStudents;
    this.disabledStudents = studentList.disabledStudents;
  }
}
