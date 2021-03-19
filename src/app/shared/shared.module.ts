import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';

@NgModule({
  declarations: [
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
})
export class SharedModule { }
