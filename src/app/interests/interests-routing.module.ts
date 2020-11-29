import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterestsComponent } from './components/interests/interests.component';

const routes: Routes = [
    {
        path: '',
        component: InterestsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InterestsRoutingModule {}
