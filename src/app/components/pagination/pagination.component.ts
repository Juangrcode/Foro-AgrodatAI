import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
} from '@angular/core';
import { Observable, range } from 'rxjs';
import { filter, map, toArray } from 'rxjs/operators';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, OnChanges {
    @Input() offset = 0;
    @Input() limit = 1;
    @Input() size = 1;
    @Input() range = 3;
    @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

    currentPage: number;
    totalPages: number;
    pages: Observable<number[]>;

    constructor() {}

    ngOnInit() {
        this.getPages(this.offset, this.limit, this.size);
    }

    ngOnChanges() {
        this.getPages(this.offset, this.limit, this.size);
    }

    selectPage(page: number, event) {
        this.cancelEvent(event);
        if (this.isValidPageNumber(page, this.totalPages)) {
            this.pageChange.emit((page - 1) * this.limit);
        }
    }

    cancelEvent(event) {
        event.preventDefault();
    }

    private getPages(offset: number, limit: number, size: number) {
        this.currentPage = this.getCurrentPage(offset, limit);
        this.totalPages = this.getTotalPages(limit, size);
        this.pages = range(-this.range, this.range * 2 + 1).pipe(
            map((offs) => this.currentPage + offs),
            filter((pageNr) => this.isValidPageNumber(pageNr, this.totalPages)),
            toArray()
        );
    }

    private isValidPageNumber(page: number, totalPages: number): boolean {
        return page > 0 && page <= totalPages;
    }

    private getCurrentPage(offset: number, limit: number): number {
        return Math.floor(offset / limit) + 1;
    }

    private getTotalPages(limit: number, size: number): number {
        return Math.ceil(Math.max(size, 1) / Math.max(limit, 1));
    }
}
