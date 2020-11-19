import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-maqueta',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  url:string;
  perfiles:string[]=['proveedor','entidadpublica','productor']; 
  constructor(
    private ruta:ActivatedRoute
  ){
    this.ruta.params.subscribe(params=>{
      this.url=params['value']
    })
  }

  ngOnInit(): void {

  }
  title = 'NOTICIAS';
  Popup = null;

}
