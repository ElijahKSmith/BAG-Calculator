import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MissionSelectComponent } from './mission-select.component';

@NgModule({
  declarations: [MissionSelectComponent],
  imports: [CommonModule],
  exports: [MissionSelectComponent],
})
export class MissionSelectModule {}
