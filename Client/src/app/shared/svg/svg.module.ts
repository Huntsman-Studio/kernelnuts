import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoIconComponent } from './logo-icon/logo-icon.component';
import { DownloadFileComponent } from './download-file/download-file.component';
import { DesktopLogoComponent } from './desktop-logo/desktop-logo.component';



@NgModule({
  declarations: [
    LogoIconComponent,
    DownloadFileComponent,
    DesktopLogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoIconComponent,
    DownloadFileComponent,
    DesktopLogoComponent
  ]
})
export class SvgModule { }
