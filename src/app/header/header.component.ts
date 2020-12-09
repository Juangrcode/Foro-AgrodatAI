import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostsService } from '../community/services/posts.service';

import { NoticiasService } from '../services/noticias.service';

interface Profile {
    id?: number;
    user: string;
    picture?: string;
    created?: string;
    modified?: string;
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    img = '../../assets/images/icons8-corneta-blanca-morada.png';
    i = 2;
    title = 'AgroDatAI';
    banner = false;
    scroll = false;
    valor: number;
    caja: number;
    dataUser;
    profile: any = {
        user: '',
    };

    public noticias: any[];

    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private noticiasSrv: NoticiasService,
        public postsService: PostsService
    ) {
        this.noticias = this.noticiasSrv.noticias;
    }

    ngOnInit(): void {
        this.dataUser = localStorage.getItem('dataUser');
        this.getProfile(this.dataUser);
    }

    getProfile(id: number) {
        this.postsService.getProfile(id).subscribe(
            (res) => {
                this.profile = res;
            },
            (err) => {
                console.log(err);
            }
        );
    }

    notification() {
        alert('Notification');
    }

    bannerShow() {
        if (this.i % 2 === 0) {
            this.img = '../../assets/images/icons8-corneta-morada.png';
            this.banner = true;
        } else {
            this.img = '../../assets/images/icons8-corneta-blanca-morada.png';
            this.banner = false;
        }
        this.i++;
    }

    scrollShow() {
        this.scroll = true;
    }

    exit() {
        this.banner = false;
        this.img = '../assets/images/icons8-corneta-blanca-morada.png';
        this.i++;
    }
}
