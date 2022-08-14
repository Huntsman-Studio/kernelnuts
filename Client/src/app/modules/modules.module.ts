import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { SvgModule } from '../shared/svg/svg.module';
import { LogoModule } from './logo/logo.module';



@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports: [
    LogoModule
  ]
})
export class ModulesModule { }
