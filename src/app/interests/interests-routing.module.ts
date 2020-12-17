import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterestsAdminComponent } from './components/interests-admin/interests-admin.component';
import { InterestsComponent } from './components/interests/interests.component';

const routes: Routes = [
    {
        path: '',
        component: InterestsComponent,
    },
    {
        path: 'admin',
        component: InterestsAdminComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InterestsRoutingModule {}
