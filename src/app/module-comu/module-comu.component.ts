import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-comu',
  templateUrl: './module-comu.component.html',
  styleUrls: ['./module-comu.component.scss']
})
export class ModuleComuComponent implements OnInit {
comunidades:boolean=false
crear:boolean=false
formulario:boolean=false
foro:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

}