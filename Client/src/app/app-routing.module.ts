import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogoComponent } from './modules/logo/logo.component';

const routes: Routes = [
  { path: '', component: LogoComponent },
  { path: 'logo/download', component: LogoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
