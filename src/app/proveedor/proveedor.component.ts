import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterestsService } from '../interests/services/interests.service';

@Component({
    selector: 'app-proveedor',
    templateUrl: './proveedor.component.html',
    styleUrls: ['./proveedor.component.scss'],
})
export class ProveedorComponent implements OnInit {
    imageSrc = '../iconos/eliminar.png';
    temaInteres: Array<any> = [
        // { id: 0, tipo: false, nombre: 'Agrícola' },
        // { id: 1, tipo: false, nombre: 'Pecuario' },
        // { id: 2, tipo: false, nombre: 'Comercio' },
        // { id: 3, tipo: false, nombre: 'Costos' },
        // { id: 4, tipo: false, nombre: 'Gremios' },
        // { id: 5, tipo: false, nombre: 'Insumos' },
        // { id: 6, tipo: false, nombre: 'Proveedores' },
        // { id: 7, tipo: false, nombre: 'Créditos' },
        // { id: 8, tipo: false, nombre: 'Clima' },
        // { id: 9, tipo: pññ,{´
    k lmo }, nombre: 'Producción' },
        // { id: 8, tipo: false, nombre: 'Subsidios' },
    ];

    @ViewChild('busca') busca;
    filterPost: string = '';
    search: string;
    checkind: boolean;
    frutas_seleccionadas: any[] = [];
    mostrar: boolean = false;
    found: any;
    constructor( 
        private ruta: ActivatedRoute,
        public interestsService: InterestsService
    ) {
        this.ruta.params.subscribe((params) => {});
    }

    ngOnInit(): void {
        this.getAllInterests();
    }
    getAllInterests() {
        this.interestsService.getAllInterests().subscribe(
            (res) => {
                console.log(res);
                this.interestsService.interests = res;
                this.temaInteres = this.interestsService.interests;
            },
            (err) => console.error(err)
        );
    }

    busqueda(tema, numero) {
        this.found = this.frutas_seleccionadas.find(
            (element) => element.tema === tema
        );
        console.log(this.found);
        if (this.found) {
            for (let i = 0; i <= this.frutas_seleccionadas.length; i++) {
                console.log(this.frutas_seleccionadas);
                if (this.frutas_seleccionadas[i].tema == tema) {
                    this.temaInteres[
                        this.frutas_seleccionadas[i].numero
                    ].completed = false;
                    this.frutas_seleccionadas.splice(i, 1);
                    return this.frutas_seleccionadas.length == 0;
                }
            }
        } else {
            console.log(tema);
            this.frutas_seleccionadas.push({ numero: numero, tema: tema });

            this.temaInteres[numero].completed = true;
        }
    }
    seleccion(tema, numero) {
        this.mostrar = true;
        let valor = this.busqueda(tema, numero);
        if (valor === true) {
            this.mostrar = false;
        }
        console.log(this.temaInteres);
    }

    eliminar(fruta, numero) {
        let valor = this.busqueda(fruta, numero);
        if (valor === true) {
            this.mostrar = false;
        }
    }
}
