import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { JoinUserService } from '../../services/join-user.service';
import { takeUntil } from 'rxjs/operators';
import { PostsService } from '../../services/posts.service';
import { EventEmitter } from 'protractor';
import { CommunityService } from '../../services/community.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-join-users',
    templateUrl: './join-users.component.html',
    styleUrls: ['./join-users.component.scss'],
})
export class JoinUsersComponent implements OnInit {
    private unsubscribe = new Subject<void>();
    filterCommunity;
    @Input() community; // Enviar  datos
    @Input() profile; // Enviar  datos
    joinUsers; // Enviar  datos
    // Enviar  datos
    @ViewChild('busca')
    busca;
    filter: string = '';
    editCommunityAdmin: boolean = false;
    dataUser;
    id;

    constructor(
        public joinuserService: JoinUserService,
        public postsService: PostsService,
        private activateRoute: ActivatedRoute,
        private router: Router,
        public communityService: CommunityService
    ) {}

    ngOnInit(): void {
        this.getCommunityDetail();
    }

    async getCommunityDetail() {
        await this.activateRoute.params.subscribe((params: Params) => {
            this.id = params['id'];
            this.communityService.getCommunity(this.id).subscribe(
                (res) => {
                    this.community = res;
                    console.log(this.community);
                    this.dataUser = localStorage.getItem('dataUser');
                    this.getProfile(this.dataUser);
                    this.getAllJoinUser();
                },
                (err) => console.log(err)
            );
        });
    }

    async getAllJoinUser() {
        await this.joinuserService
            .getAllJoinUser()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                (res) => {
                    this.joinUsers = res;
                    this.validateProfileAdmin();
                },
                (err) => {
                    console.log(err);
                }
            );
    }

    // // Profiles

    async getProfile(user_id) {
        // await this.postsService
        //     .getProfile(user_id)
        //     .pipe(takeUntil(this.unsubscribe))
        //     .subscribe(
        //         (res) => {
        //             this.profile = res;
        //         },
        //         (err) => {
        //             console.log(err);
        //         }
        //     );
    }

    validateProfileAdmin() {
        if (this.community.profile.id === this.profile.id) {
            this.editCommunityAdmin = true;
        } else {
            this.editCommunityAdmin = false;
        }
        this.filterCommunity = this.joinUsers.filter((item) => {
            return item.community === this.community.id;
        });

        // if (this.filterCommunity.length) {
        //     this.validateJoin = true;
        // } else {
        //     this.validateJoin = false;
        // }
    }

    deleteJoinUser(id: number) {
        this.joinuserService.deleteJoinUser(id).subscribe(
            (res) => {
                console.log(res);
                this.getCommunityDetail();
            },
            (err) => {
                console.log(err);
            }
        );
    }
}
