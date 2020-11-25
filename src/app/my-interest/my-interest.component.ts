import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Interest } from '../models/interests';

@Component({
    selector: 'app-my-interest',
    templateUrl: './my-interest.component.html',
    styleUrls: ['./my-interest.component.scss'],
})
export class MyInterestComponent implements OnInit {
    @Input() interes: Interest;
    // @Output() interestClicked: EventEmitter<any> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}
}
