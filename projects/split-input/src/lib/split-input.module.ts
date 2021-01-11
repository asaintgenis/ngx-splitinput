import { NgModule } from '@angular/core';
import { SplitInputComponent } from './lib-split-input/split-input.component';
import {CommonModule} from '@angular/common';
import {SplitInputDirective} from './split-input.directive';



@NgModule({
  imports: [CommonModule],
  declarations: [SplitInputComponent, SplitInputDirective],
  exports: [SplitInputComponent, SplitInputDirective]
})
export class SplitInputModule { }
