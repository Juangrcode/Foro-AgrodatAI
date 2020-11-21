import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router'



@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.scss']
})
export class ProveedorComponent implements OnInit {
  
  temaInteres:Array<any>=[
    {tipo:false,nombre:'uno'},
    {tipo:false,nombre:'dos'},
    {tipo:false,nombre:'tres'},
    {tipo:false,nombre:'cuatro'},
    {tipo:false,nombre:'cinco'},
    {tipo:false,nombre:'seis'},
    {tipo:false,nombre:'siete'},
    {tipo:false,nombre:'ocho'},
    {tipo:false,nombre:'nueve'},
    {tipo:false,nombre:'diez'},
    {tipo:false,nombre:'once'},
    {tipo:false,nombre:'cator'},
    {tipo:false,nombre:'uno'},
    {tipo:false,nombre:'dos'},
    {tipo:false,nombre:'tres'},
    {tipo:false,nombre:'cuatro'},
    {tipo:false,nombre:'cinco'},
    {tipo:false,nombre:'seis'},
    {tipo:false,nombre:'siete'},
    {tipo:false,nombre:'ocho'},
    {tipo:false,nombre:'nueve'},
    {tipo:false,nombre:'diez'},
    {tipo:false,nombre:'once'},
    {tipo:false,nombre:'cator'},
    {tipo:false,nombre:'uno'},
    {tipo:false,nombre:'dos'},
    {tipo:false,nombre:'tres'},
    {tipo:false,nombre:'cuatro'},
    {tipo:false,nombre:'cinco'},
    {tipo:false,nombre:'seis'},
    {tipo:false,nombre:'siete'},
    {tipo:false,nombre:'ocho'},
    {tipo:false,nombre:'nueve'},
    {tipo:false,nombre:'diez'},
    {tipo:false,nombre:'once'},
    {tipo:false,nombre:'cator'},
    {tipo:false,nombre:'uno'},
    {tipo:false,nombre:'dos'},
    {tipo:false,nombre:'tres'},
    {tipo:false,nombre:'cuatro'},
    {tipo:false,nombre:'cinco'},
    {tipo:false,nombre:'seis'},
    {tipo:false,nombre:'siete'},
    {tipo:false,nombre:'ocho'},
    {tipo:false,nombre:'nueve'},
    {tipo:false,nombre:'diez'},
    {tipo:false,nombre:'once'},
    {tipo:false,nombre:'cator'},
    {tipo:false,nombre:'uno'},
    {tipo:false,nombre:'dos'},
    {tipo:false,nombre:'tres'},
    {tipo:false,nombre:'cuatro'},
    {tipo:false,nombre:'cinco'},
    {tipo:false,nombre:'seis'},
    {tipo:false,nombre:'siete'},
    {tipo:false,nombre:'ocho'},
    {tipo:false,nombre:'nueve'},
    {tipo:false,nombre:'diez'},
    {tipo:false,nombre:'once'},
    {tipo:false,nombre:'cator'},

  ]
  
  @ViewChild('numero') p1;
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
  buscador(){
    console.log("hola")
  }
}
