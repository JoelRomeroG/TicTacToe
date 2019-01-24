import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './tictactoe/tictactoe.module#TictactoeModule',
    canLoad: []
  }, {
    path: 'test3',
    loadChildren: './testing3/testing3.module#Testing3Module',
    canLoad: []
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
