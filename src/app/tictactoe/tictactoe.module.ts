import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TictactoeRoutingModule } from './tictactoe-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    TictactoeRoutingModule
  ]
})
export class TictactoeModule { }
