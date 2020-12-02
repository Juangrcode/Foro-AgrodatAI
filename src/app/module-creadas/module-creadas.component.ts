import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-module-creadas',
  templateUrl: './module-creadas.component.html',
  styleUrls: ['./module-creadas.component.scss']
})
export class ModuleCreadasComponent implements OnInit {
  obtejo: Array<any> = [
    {title:"comunidad1",descripcion:"descripcion del dia de hoy  y andres"},
    {title:"comunidad2",descripcion:"descripcion del dia de hoy  y andres"},
    {title:"comunidad3",descripcion:"descripcion 3"},
    {title:"comunidad4",descripcion:"descripcionsda f"},
    {title:"comunidad5",descripcion:""},
    {title:"comunidad6",descripcion:"descripcio 6"},
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
