import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterUsersPipe } from './pipes/filter-users.pipe';
import { FilterActivitiesPipe } from './pipes/filter-activities.pipe';
import { FilterMyCommunitiesPipe } from './pipes/filter-my-communities.pipe';

@NgModule({
    declarations: [FilterUsersPipe, FilterActivitiesPipe, FilterMyCommunitiesPipe],
    imports: [CommonModule],
})
export class SharedModule {}
