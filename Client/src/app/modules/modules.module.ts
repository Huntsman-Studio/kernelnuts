import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { SvgModule } from '../shared/svg/svg.module';



@NgModule({
  declarations: [
    LogoComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports: [
    LogoComponent
  ]
})
export class ModulesModule { }
