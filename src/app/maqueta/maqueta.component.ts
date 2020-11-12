import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-maqueta',
  templateUrl: './maqueta.component.html',
  styleUrls: ['./maqueta.component.scss']
})
export class MaquetaComponent implements OnInit {

  public noticias: any[];

  constructor(private noticiasSrv: NoticiasService) {
    this.noticias = this.noticiasSrv.noticias;
  }

  title = 'Intereses';
  Popup = null;

  exit(){
    this.Popup = null;
  }
  showPopup(news){
    this.Popup = news;
  }

  ngOnInit(): void {
    console.log(this.noticiasSrv.noticias);
  }

}
