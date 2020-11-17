import { Component, OnInit } from '@angular/core';
import { NoticiasService } from './services/noticias.service';
import { Router, ActivatedRoute } from '@angular/router'
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  disableSelect = new FormControl(false);
  
    caja:number;
  // @Input('value') value='default'
  // perfiles:string[]=['proveedor','entidadpublica','productor']; 
  
  


  public noticias: any[];
  
  
  constructor(private _router:Router, private _activatedRoute:ActivatedRoute,private noticiasSrv: NoticiasService) {
    this.noticias = this.noticiasSrv.noticias;
  }

  title = 'AgroDatAI';
  banner = false;
  scroll = false;
  img = '../assets/images/icons8-corneta-blanca-morada.png';
  i = 2;
  valor:number;
  perfiles:any[];
  ngOnInit(){
    this.perfiles = [
      {value: 'proveedor', viewValue:1},
      {value: 'entidad publica', viewValue:2},
      {value: 'productor', viewValue:3}
    ];
    this.valor=0
  }
  perfil(e)
  { 
    console.log(e)
    // this.valor=e.target.value esta linea funciona 
    // console.log(this.valor)
    // if(this.valor==0)
    if(e=='1')
    {
      // this._router.navigate(['/entidadpublica',e.target.value]) ;
      this._router.navigate(['/proveedor'])   
    }
    else if(e=='2'){
      this._router.navigate(['/entidadpublica',e]) ;  
    }
    else if(e=='3'){
      this._router.navigate(['/productor',e])   
      
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
