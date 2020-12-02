import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommunityComponent } from './components/community/community.component';
import { CreateCommunityComponent } from './components/create-community/create-community.component';
import { FeaturedCommunitiesComponent } from './components/featured-communities/featured-communities.component';
import { ForoComponent } from './components/foro/foro.component';
import { MyCommunitiesComponent } from './components/my-communities/my-communities.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

const routes: Routes = [
    {
        path: '',
        component: CommunityComponent,
    },
    {
        path: 'foro/:id',
        component: PostDetailComponent,
    },
    {
        path: 'crear-comunidades',
        component: CreateCommunityComponent,
    },
    {
        path: 'mis-comunidades',
        component: MyCommunitiesComponent,
    },
    {
        path: 'comunidades-destacadas',
        component: FeaturedCommunitiesComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CommunityRoutingModule {}
