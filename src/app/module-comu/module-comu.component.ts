import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
// import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
    selector: 'app-module-comu',
    templateUrl: './module-comu.component.html',
    styleUrls: ['./module-comu.component.scss'],
})
<<<<<<< HEAD
export class ModuleComuComponent  {
  comunidades:boolean=false
  crear:boolean=false
  foro:boolean=false
  filterName:string
  constructor() { } 

  guardar(){
    Swal.fire({ 
      icon: 'success',
      title: 'gracias',
      showConfirmButton: true,
      
    }).then(function () {
        console.log ('Se hizo clic en el botón Aceptar.');
      });
    
  }
  addPost(form: NgForm){
    form.resetForm(); // or form.reset();

    // console.log(form)
  }
}
=======
export class ModuleComuComponent implements OnInit {
    comunidades: boolean = false;
    crear: boolean = false;
    formulario: boolean = false;
    foro: boolean = false;
    constructor() {}

    ngOnInit() {}
}
>>>>>>> 9fd98160b4fa886fca4ee7697f41710ef600a579
