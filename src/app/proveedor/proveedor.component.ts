import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.scss']
})
export class ProveedorComponent implements OnInit {
  url;
  constructor(
    private ruta:ActivatedRoute
  ) { 
    this.ruta.params.subscribe(params=>{
      console.log(params)
    })
  }

  ngOnInit(): void {
  }

}
