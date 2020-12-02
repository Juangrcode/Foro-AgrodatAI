import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-comu',
  templateUrl: './module-comu.component.html',
  styleUrls: ['./module-comu.component.scss']
})
export class ModuleComuComponent implements OnInit {
comunidades:boolean=false
creadas:boolean=false
destacado:boolean=false
formulario:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

}



//