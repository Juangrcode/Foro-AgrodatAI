import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/posts';
import { PostsService } from '../../services/posts.service';
import { AuthGuard, AuthService } from '../../../../app/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-community',
    templateUrl: './community.component.html',
    styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
    comunidades: boolean = false;
    crear: boolean = false;
    formulario: boolean = false;
    foro: boolean = true;
    destacadas: boolean = false;
    error;
    dataUser;
    constructor(
        public postsService: PostsService,
        public authGuard: AuthGuard,
        public authService: AuthService,
        public router: Router
    ) {}

    ngOnInit(): void {
        this.dataUser = localStorage.getItem('dataUser');
    }

    logout() {
        localStorage.removeItem('data');
        this.authService.logout();
        this.router.navigate(['login/']);
    }
}
