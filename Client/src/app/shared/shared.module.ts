import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgModule } from './svg/svg.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports: [
    SvgModule
  ]
})
export class SharedModule { }
