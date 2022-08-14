import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {

    // MetaTags
    this.meta.addTags([
        { name: 'dercription', content: 'Logotype & Logomark Files for Kernel' },
        { name: 'author', content: 'Huntsman Studio | huntsmanstudio.gr' },
        { name: 'keywords', content: 'Logotype, Logomark, Branding, Huntsman' },
        { name: 'robots', content: 'index, follow' }

    ]);
    this.title.setTitle("Download Logo");
  }

  // SetTile
  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  ngOnInit(): void {
  }

  // DownloadFiles
  DownloadFile() {
    let link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/logo/');
    link.setAttribute('download', 'kernel.zip');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
