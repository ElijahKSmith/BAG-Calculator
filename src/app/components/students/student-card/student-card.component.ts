import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss'],
})
export class StudentCardComponent implements OnInit {
  @Input() studentName = '';
  @Input() studentImage = '';
  @Input() disabled = false;

  constructor() {}

  ngOnInit(): void {}
}
