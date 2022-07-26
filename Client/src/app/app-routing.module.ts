import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogoComponent } from './modules/logo/logo.component';

const routes: Routes = [
  { path: '', component: LogoComponent },
  // { path: 'logo/download', component: LogoComponent },
  { path: 'logo/download', loadChildren: () => import('./modules/logo/logo.module').then(m => m.LogoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
