import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-module-creadas',
  templateUrl: './module-creadas.component.html',
  styleUrls: ['./module-creadas.component.scss']
})
export class ModuleCreadasComponent implements OnInit {
  obtejo: Array<any> = [
    {title:"comunidad1",descripcion:"en el dia de"},
    {title:"comunidad2",descripcion:"descripcio2"},
    {title:"comunidad3",descripcion:"descripcion3"},
    {title:"comunidad4",descripcion:"descripcion4"},
    {title:"comunidad5",descripcion:"descripcion3"},
    {title:"comunidad2",descripcion:"descripcio2"},
    {title:"comunidad3",descripcion:"descripcion3"},
    {title:"comunidad4",descripcion:"descripcion4"},
    {title:"comunidad2",descripcion:"descripcio2"},
    {title:"comunidad3",descripcion:"descripcion3"},
    {title:"comunidad4",descripcion:"descripcion4"},
    {title:"comunidad2",descripcion:"descripcio2"},
    {title:"comunidad3",descripcion:"descripcion3"},
    {title:"comunidad4",descripcion:"descripcion4"},
    {title:"comunidad1",descripcion:"descripcion1"},
    {title:"comunidad2",descripcion:"descripcio2"},
    {title:"comunidad6",descripcion:"descripcion4"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
