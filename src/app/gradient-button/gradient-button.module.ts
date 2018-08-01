import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GradientButtonComponent } from './gradient-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GradientButtonComponent],
  exports: [GradientButtonComponent]
})
export class GradientButtonModule {}
