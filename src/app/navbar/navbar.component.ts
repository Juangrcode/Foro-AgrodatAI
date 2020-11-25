import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  valor: number;
  perfiles: any[];


  constructor(    private _router: Router,) {

    }

  ngOnInit(): void {
        this.perfiles = [
      { value: 'proveedor', viewValue: 1 },
      { value: 'entidad publica', viewValue: 2 },
      { value: 'productor', viewValue: 3 },
    ];
    this.valor = 0;
  }

  perfil(e) {
    console.log(e);
    if (e == '1') {
      this._router.navigate(['/proveedor']);
    } else if (e == '2') {
      this._router.navigate(['/entidadpublica', e]);
    } else if (e == '3') {
      this._router.navigate(['/productor', e]);
    }
  }
}
