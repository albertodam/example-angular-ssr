import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-albertot',
  templateUrl: './albertot.component.html',
  styleUrls: ['./albertot.component.scss']
})
export class AlbertotComponent implements OnInit {

  constructor(private readonly title: Title, private readonly meta : Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Albertot');
    this.meta.addTag({ property: 'og:title', content: 'albertot.dev - Componente de Prueba SSR' }, true);
    this.meta.addTag({ property: "og:image",  content: 'https://albertot.dev/images/ssr_github_angular.png'}, true);
    this.meta.addTag({ property: 'twitter:card', content:'summary_large_image'}, true);
    this.meta.addTag({ property: "twitter:site", content:'@_albertot_'}, true);
    this.meta.addTag({ property: "twitter:creator", content:'@_albertot_'}, true);
    this.meta.addTag({ property: "twitter:title", content:'albertot.dev - Componente de Prueba SSR'}, true);
    this.meta.addTag({ property: "twitter:description", content:'Esto es una prueba para mi nuevo post'}, true);
    this.meta.addTag({ property: "twitter:image", content:'https://albertot.dev/images/ssr_github_angular.png'}, true);
  }
}
