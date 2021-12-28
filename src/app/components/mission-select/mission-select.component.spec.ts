import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionSelectComponent } from './mission-select.component';

describe('MissionSelectComponent', () => {
  let component: MissionSelectComponent;
  let fixture: ComponentFixture<MissionSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
