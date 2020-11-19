import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-productor',
  templateUrl: './productor.component.html',
  styleUrls: ['./productor.component.scss']
})
export class ProductorComponent implements OnInit {
  url:String
  constructor(
    private ruta:ActivatedRoute
  ) { 
    this.ruta.params.subscribe(params=>{
      this.url=params['value']
    })
  }

  ngOnInit(): void {
  }

}
