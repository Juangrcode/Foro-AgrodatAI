import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Community } from '../models/new_communities';

@Component({
    selector: 'app-create-community',
    templateUrl: './create-community.component.html',
    styleUrls: ['./create-community.component.scss'],
})
export class CreateCommunityComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    clickCommunity(id: number) {
        console.log('community');
        console.log(id);
    }
}
