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

  constructor(
    private noticiasSrv: NoticiasService, 
    private route: ActivatedRoute)
    {
    this.noticias = this.noticiasSrv.noticias;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const url = params.title;
      this.noticia = this.noticiasSrv.getNews(url);
    });
  }

}
