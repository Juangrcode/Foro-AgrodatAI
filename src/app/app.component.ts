import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public noticias: any[];

  constructor(private noticiasSrv: NoticiasService) {
    this.noticias = this.noticiasSrv.noticias;
  }

  title = 'AgroDatAI';
  banner = false;
  scroll = false;
  img = '../assets/images/icons8-corneta-blanca-morada.png';
  i = 2;

  notification(){
    alert('Notification');
  }
  bannerShow() {
    if (this.i % 2 === 0){
    this.img = '../assets/images/icons8-corneta-morada.png';
    this.banner = true;
    }else{
      this.img = '../assets/images/icons8-corneta-blanca-morada.png';
      this.banner = false;
    }
    this.i++;
  }
  scrollShow(){
    this.scroll = true;
  }
  exit(){
    this.banner = false;
    this.img = '../assets/images/icons8-corneta-blanca-morada.png';
    this.i++;
  }
}
