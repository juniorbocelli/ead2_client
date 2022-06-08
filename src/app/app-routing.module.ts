import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReadmeComponent } from './readme/readme.component';

const routes: Routes = [
  { path: '', component: ReadmeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
