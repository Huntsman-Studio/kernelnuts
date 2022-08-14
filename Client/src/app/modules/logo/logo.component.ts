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

  DownloadFile() {

  }
}
