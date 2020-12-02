import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityComponent } from './components/community/community.component';

import { CommunityRoutingModule } from './community-routing.module';
import { CreateCommunityComponent } from './components/create-community/create-community.component';
import { FormNewCommunityComponent } from './components/form-new-community/form-new-community.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ForoComponent } from './components/foro/foro.component';
import { MyCommunitiesComponent } from './components/my-communities/my-communities.component';
import { FeaturedCommunitiesComponent } from './components/featured-communities/featured-communities.component';
import { CommunityNavbarComponent } from './components/community-navbar/community-navbar.component';
import { TimeAgoPipe } from 'time-ago-pipe';
import { MomentModule } from 'ngx-moment';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

@NgModule({
    declarations: [
        CommunityComponent,
        CreateCommunityComponent,
        FormNewCommunityComponent,
        ForoComponent,
        MyCommunitiesComponent,
        FeaturedCommunitiesComponent,
        CommunityNavbarComponent,
        PostDetailComponent,
    ],
    imports: [
        CommonModule,
        CommunityRoutingModule,
        HttpClientModule,
        FormsModule,
        // TimeAgoPipe,
        MomentModule.forRoot({
            relativeTimeThresholdOptions: {
                m: 59,
            },
        }),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CommunityModule {}
