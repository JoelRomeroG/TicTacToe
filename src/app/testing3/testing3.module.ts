import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Testing3RoutingModule} from './testing3-routing.module';
import {MainComponent} from './main/main.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    Testing3RoutingModule,
    SharedModule,
  ]
})
export class Testing3Module {
}
