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
<<<<<<< HEAD
=======
// import { TimeAgoPipe } from 'time-ago-pipe';
>>>>>>> 3554e72baf9c116387f99a0b035223c24a0258fd
import { MomentModule } from 'ngx-moment';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { CommunityDetailComponent } from './components/community-detail/community-detail.component';
import { NombreComponent } from './components/nombre/nombre.component';

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
        CommunityDetailComponent,
        NombreComponent,
    ],
    imports: [
        CommonModule,
        CommunityRoutingModule,
        HttpClientModule,
        FormsModule,
        MomentModule.forRoot({
            relativeTimeThresholdOptions: {
                m: 59,
            },
        }),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CommunityModule {}
