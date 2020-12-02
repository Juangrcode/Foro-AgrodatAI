import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommunityDetailComponent } from './components/community-detail/community-detail.component';
import { CommunityComponent } from './components/community/community.component';
import { CreateCommunityComponent } from './components/create-community/create-community.component';
import { FeaturedCommunitiesComponent } from './components/featured-communities/featured-communities.component';
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
        path: 'mis-comunidades/:id',
        component: CommunityDetailComponent,
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
