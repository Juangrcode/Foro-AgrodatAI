import { Component, OnInit } from '@angular/core';
import { InterestsService } from '../../services/interests.service';

@Component({
    selector: 'app-foro',
    templateUrl: './foro.component.html',
    styleUrls: ['./foro.component.scss'],
})
export class ForoComponent implements OnInit {
    filterInterests: any[];

    constructor(public interestsService: InterestsService) {}

    ngOnInit(): void {
        this.getAllInterests();
    }

    getAllInterests() {
        this.interestsService.getAllInterests().subscribe(
            (res) => {
                console.log(res);
                this.interestsService.interests = res;
                this.filterInterests = this.interestsService.interests.filter(
                    (item) => {
                        return item.completed == true;
                    }
                );
                console.log(this.filterInterests);
            },
            (err) => console.error(err)
        );
    }
}
