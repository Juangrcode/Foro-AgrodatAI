import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Interest } from '../models/interests';

@Component({
    selector: 'app-interest',
    templateUrl: './interest.component.html',
    styleUrls: ['./interest.component.scss'],
})
export class InterestComponent {
    @Input() interest: Interest;
    @Output() interestClicked: EventEmitter<any> = new EventEmitter();

    view: boolean = false;
    found: any;
    selectInterests: any[] = [];
    valor: boolean;

    constructor() {}

    select() {
        console.log('Select interest');
        console.log(this.interest);
        this.interestClicked.emit(this.interest.id);
    }

    search() {
        this.found = this.selectInterests.find((item) =>
            console.log(item, 'hola')
        );
        return false;
    }
}
