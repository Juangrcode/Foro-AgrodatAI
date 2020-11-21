import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router'



@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.scss']
})
export class ProveedorComponent implements OnInit {
  imageSrc = '../iconos/eliminar.png'  
  temaInteres:Array<any>=[
    {id:0,tipo:false,nombre:'uno'},
    {id:1,tipo:false,nombre:'dos'},
    {id:2,tipo:false,nombre:'tres'},
    {id:3,tipo:false,nombre:'cuatro'},
    {id:4,tipo:false,nombre:'cinco'},
    {id:5,tipo:false,nombre:'seis'},
    {id:6,tipo:false,nombre:'siete'},
    {id:7,tipo:false,nombre:'ocho'},
    {id:8,tipo:false,nombre:'nueve'},
    {id:9,tipo:false,nombre:'ochenta'},
    {id:8,tipo:false,nombre:'unoche'},
  ]
  
  @ViewChild('busca') busca;
  filterPost:string=""
  search:string
  checkind:boolean
  frutas_seleccionadas:any[]=[]
  mostrar:boolean=false
  found:any
  constructor(
    private ruta:ActivatedRoute
    

    
    ) { 
    this.ruta.params.subscribe(params=>{
          
    })
    
  }

  ngOnInit(): void {
    
  }

  busqueda(tema,numero){
    
    this.found = this.frutas_seleccionadas.find(element =>element.tema===tema)
    if(this.found)
    {
      for(var i=0 ; i<=this.frutas_seleccionadas.length; i++) {
        console.log(this.frutas_seleccionadas)
        if(this.frutas_seleccionadas[i].tema==tema){
          this.temaInteres[this.frutas_seleccionadas[i].numero].tipo=false
            this.frutas_seleccionadas.splice(i,1)
            return this.frutas_seleccionadas.length==0
        }
      }
    }
    else{
      // console.log(tema)
      this.frutas_seleccionadas.push({numero:numero,tema:tema}) 
      

      this.temaInteres[numero].tipo=true
     } 
  }
  seleccion(tema, numero){
    
    this.mostrar=true
    let valor=this.busqueda(tema, numero)
    if(valor===true)
    {
      this.mostrar=false
    }
    console.log(this.temaInteres)
    
  }
  
  eliminar(fruta,numero){
    let valor=this.busqueda(fruta,numero)
    if(valor===true)
    {
      this.mostrar=false
    }
  }
  
}
