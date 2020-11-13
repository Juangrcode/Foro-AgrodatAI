import { Component, Input } from '@angular/core';
import { NoticiasService } from './services/noticias.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @Input('value') value='default'
  // perfiles:string[]=['proveedor','entidadpublica','productor']; 
  perfiles: any[] = [
    {value: 'proveedor', viewValue:0},
    {value: 'entidad publica', viewValue: 1},
    {value: 'productor', viewValue: 2}
  ];
  public noticias: any[];
  
  
  constructor(private _router:Router, private _activatedRoute:ActivatedRoute,private noticiasSrv: NoticiasService) {
    this.noticias = this.noticiasSrv.noticias;
  }

  title = 'AgroDatAI';
  banner = false;
  scroll = false;
  img = '../assets/images/icons8-corneta-blanca-morada.png';
  i = 2;
  valor;
  perfil(e)
  { 
    
    this.valor=e.target.value
    console.log(this.valor)
    if(this.valor==0)
    {
      this._router.navigate(['/entidadpublica',e.target.value]) ;
      
    }
    else if(this.valor==1){
      this._router.navigate(['/proveedor',e.target.value])   
      
    }
    else if(this.valor==2){
      this._router.navigate(['/productor',e.target.value])   
      
    }
  
  }    
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
