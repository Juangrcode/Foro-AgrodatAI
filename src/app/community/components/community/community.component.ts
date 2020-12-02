import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-community',
    templateUrl: './community.component.html',
    styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
    foro:boolean=false
    crear:boolean=false
    comunidades:boolean=false
    destacado:boolean=false
    constructor() {}

    ngOnInit(): void {}
}
