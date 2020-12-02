import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/posts';
import { PostsService } from '../../services/posts.service';

@Component({
    selector: 'app-community',
    templateUrl: './community.component.html',
    styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
    comunidades: boolean = false;
    crear: boolean = false;
    formulario: boolean = false;
    foro: boolean = false;
    destacadas: boolean = false;
    constructor(public postsService: PostsService) {}

    ngOnInit(): void {}
}
