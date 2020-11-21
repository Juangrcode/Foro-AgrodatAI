import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import { NoticiasService} from '../services/noticias.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})
export class NoticiaComponent implements OnInit {

  public noticias: any[];
  public noticia: any;
  load: Boolean = true;

  constructor(
    private noticiasSrv: NoticiasService, 
    private route: ActivatedRoute)
    {
    this.noticias = this.noticiasSrv.noticias;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.loading ();
      const url = params.title;
      this.noticia = this.noticiasSrv.getNews(url);
    });
  }

  loading () {
    if (this.load) {
      this.load = true
    }else {
      this.load = false;
    }
  }

}
