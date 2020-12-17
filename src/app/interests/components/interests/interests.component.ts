import { ConstantPool } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/community/services/posts.service';
import { AuthService } from 'src/app/services/auth.service';
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

    @ViewChild('busca')
    busca;
    filterPost: string = '';
    search: string;
    checkind: boolean;
    frutas_seleccionadas: any[] = [];
    mostrar: boolean = false;
    found: any;

    todoListArray: any[];
    dataUser;
    profile;
    // Contiene todos los intereses que la persona le dio checklist
    filterInterests: any[];

    pageActual: number = 1;
    constructor(
        public interestsService: InterestsService,
        public authService: AuthService,
        public router: Router,
        public postsService: PostsService
    ) {}

    ngOnInit(): void {
        if (!this.authService.isLoggedIn()) {
            this.router.navigate(['login']);
        }
        this.dataUser = localStorage.getItem('dataUser');
        this.getProfile(this.dataUser);
        this.getAllInterests();
        this.saveInterests();
    }
    getProfile(user_id: number) {
        this.postsService.getProfile(user_id).subscribe(
            (res) => {
                this.profile = res;
                console.log(this.profile);
            },
            (err) => {
                console.log(err);
            }
        );
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
                console.log(this.interestsService.interests);
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
