import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterUsersPipe } from './pipes/filter-users.pipe';
import { FilterActivitiesPipe } from './pipes/filter-activities.pipe';

@NgModule({
    declarations: [FilterUsersPipe, FilterActivitiesPipe],
    imports: [CommonModule],
})
export class SharedModule {}
