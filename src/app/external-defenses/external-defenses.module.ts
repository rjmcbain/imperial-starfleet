import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TieFighterComponent } from './tie-fighter/tie-fighter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TieFighterComponent
  ],
  exports: [
    TieFighterComponent
  ]
})
export class ExternalDefensesModule { }