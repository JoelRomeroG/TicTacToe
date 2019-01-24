import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TictactoeRoutingModule} from './tictactoe-routing.module';
import {MainComponent} from './main/main.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    TictactoeRoutingModule,
    SharedModule,
  ]
})
export class TictactoeModule {
}
