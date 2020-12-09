import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterestsRoutingModule } from './interests-routing.module';
import { InterestsComponent } from './components/interests/interests.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../shared/pipes/filter/filter.pipe';

@NgModule({
    declarations: [InterestsComponent, FilterPipe],
    imports: [
        CommonModule,
        InterestsRoutingModule,
        NgxPaginationModule,
        HttpClientModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
    ],
})
export class InterestsModule {}
