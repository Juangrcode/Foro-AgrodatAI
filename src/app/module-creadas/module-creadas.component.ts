import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-module-creadas',
    templateUrl: './module-creadas.component.html',
    styleUrls: ['./module-creadas.component.scss'],
})
export class ModuleCreadasComponent implements OnInit {
<<<<<<< HEAD
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
=======
    obtejo: Array<any> = [
        { title: 'comunidad1', descripcion: 'en el dia de' },
        { title: 'comunidad2', descripcion: 'descripcio2' },
        { title: 'comunidad3', descripcion: 'descripcion3' },
        { title: 'comunidad4', descripcion: 'descripcion4' },
        { title: 'comunidad5', descripcion: 'descripcion3' },
        { title: 'comunidad2', descripcion: 'descripcio2' },
        { title: 'comunidad3', descripcion: 'descripcion3' },
        { title: 'comunidad4', descripcion: 'descripcion4' },
        { title: 'comunidad2', descripcion: 'descripcio2' },
        { title: 'comunidad3', descripcion: 'descripcion3' },
        { title: 'comunidad4', descripcion: 'descripcion4' },
        { title: 'comunidad2', descripcion: 'descripcio2' },
        { title: 'comunidad3', descripcion: 'descripcion3' },
        { title: 'comunidad4', descripcion: 'descripcion4' },
        { title: 'comunidad1', descripcion: 'descripcion1' },
        { title: 'comunidad2', descripcion: 'descripcio2' },
        {
            title: 'comunidad6',
            descripcion: 'descripcion4ssssssssssssssssssssssssssss',
        },
    ];
    constructor() {}
>>>>>>> 9fd98160b4fa886fca4ee7697f41710ef600a579

    ngOnInit(): void {}
}
