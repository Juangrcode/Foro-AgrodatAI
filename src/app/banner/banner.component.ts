import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NoticiasService } from '../services/noticias.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  img = '../../assets/images/icons8-corneta-blanca-morada.png';
  i = 2;
  title = 'AgroDatAI';
  banner = false;
  scroll = false;
  valor: number;
  caja: number;
  public noticias: any[];


  constructor(
      private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private noticiasSrv: NoticiasService
  ) {

    this.noticias = this.noticiasSrv.noticias;

  }

  ngOnInit(): void {
  }

  notification() {
    alert('Notification');
  }

  bannerShow() {
    if (this.i % 2 === 0) {
      this.img = '../../assets/images/icons8-corneta-morada.png';
      this.banner = true;
    } else {
      this.img = '../../assets/images/icons8-corneta-blanca-morada.png';
      this.banner = false;
    }
    this.i++;
  }

  scrollShow() {
    this.scroll = true;
  }

  exit() {
    this.banner = false;
    this.img = '../assets/images/icons8-corneta-blanca-morada.png';
    this.i++;
  }
}
