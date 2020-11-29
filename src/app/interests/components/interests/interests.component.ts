import { ConstantPool } from '@angular/compiler';
import {
    Component,
    OnInit,
    ViewChild,
    Input,
    Output,
    NgModule,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Interest } from '../../../models/interests';
import { InterestsService } from '../../services/interests.service';

@Component({
    selector: 'app-interests',
    templateUrl: './interests.component.html',
    styleUrls: ['./interests.component.scss'],
})
export class InterestsComponent implements OnInit {
    // imageSrc = '../iconos/eliminar.png';
    temaInteres: Array<any> = [];

    @ViewChild('busca') busca;
    filterPost: string = '';
    search: string;
    checkind: boolean;
    frutas_seleccionadas: any[] = [];
    mostrar: boolean = false;
    found: any;

    todoListArray: any[];

    // Contiene todos los intereses que la persona le dio checklist
    filterInterests: any[];

    pageActual: number = 1;

    constructor(
        private ruta: ActivatedRoute,
        public interestsService: InterestsService
    ) {
        this.ruta.params.subscribe((params) => {});
    }

    ngOnInit(): void {
        this.getAllInterests();
        this.saveInterests();
    }

    getAllInterests() {
        this.interestsService.getAllInterests().subscribe(
            (res) => {
                console.log(res);
                this.interestsService.interests = res;
                this.temaInteres = this.interestsService.interests;
                this.filterInterests = this.temaInteres.filter((item) => {
                    return item.completed == true;
                });
                console.log(this.filterInterests);
            },
            (err) => console.error(err)
        );
    }

    saveInterests() {}

    editInterest(interest: Interest) {
        this.interestsService.selectInterest = interest;
    }

    busqueda(interest) {
        this.editInterest(interest);
        if (interest.completed === false) {
            this.temaInteres[interest.id - 1].completed = true;
            this.interestsService
                .updateInterest(this.temaInteres[interest.id - 1])
                .subscribe(
                    (res) => {
                        console.log(res);
                    },
                    (err) => {
                        console.log(err);
                    }
                );
            return true;
        } else {
            this.temaInteres[interest.id - 1].completed = false;
            this.interestsService
                .updateInterest(this.temaInteres[interest.id - 1])
                .subscribe(
                    (res) => {
                        console.log(res);
                    },
                    (err) => {
                        console.log(err);
                    }
                );
            return false;
        }
    }
    seleccion(interest) {
        let valor = this.busqueda(interest);
        if (!interest.completed) {
            this.mostrar = true;
        }
        if (valor === true) {
            this.mostrar = false;
        }
    }

    eliminar(fruta, id, interest) {
        let valor = this.busqueda(interest);
        if (valor === true) {
            this.mostrar = false;
        }
    }
}
