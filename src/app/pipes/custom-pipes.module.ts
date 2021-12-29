import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UnderscoreToSpacePipe } from './underscore-to-space/underscore-to-space.pipe';

@NgModule({
  declarations: [UnderscoreToSpacePipe],
  imports: [CommonModule],
  exports: [UnderscoreToSpacePipe],
})
export class CustomPipesModule {}
