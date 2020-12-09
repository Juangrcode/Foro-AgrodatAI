import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterUsersPipe } from './pipes/filter-users.pipe';

@NgModule({
    declarations: [FilterUsersPipe],
    imports: [CommonModule],
})
export class SharedModule {}
