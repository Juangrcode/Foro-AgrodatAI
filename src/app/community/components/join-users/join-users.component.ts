import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { JoinUserService } from '../../services/join-user.service';
import { takeUntil } from 'rxjs/operators';
import { PostsService } from '../../services/posts.service';
import { EventEmitter } from 'protractor';

@Component({
    selector: 'app-join-users',
    templateUrl: './join-users.component.html',
    styleUrls: ['./join-users.component.scss'],
})
export class JoinUsersComponent implements OnInit {
    private unsubscribe = new Subject<void>();
    filterCommunity;
    @Input() community; // Enviar  datos
    profile; // Enviar  datos
    joinUsers; // Enviar  datos
    // Enviar  datos
    @ViewChild('busca')
    busca;
    filter: string = '';
    editCommunityAdmin: boolean = false;
    dataUser;

    constructor(
        public joinuserService: JoinUserService,
        public postsService: PostsService
    ) {}

    ngOnInit(): void {
        this.dataUser = localStorage.getItem('dataUser');
        this.getProfile(this.dataUser);
        this.getAllJoinUser();
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
        await this.postsService
            .getProfile(user_id)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                (res) => {
                    this.profile = res;
                },
                (err) => {
                    console.log(err);
                }
            );
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
            },
            (err) => {
                console.log(err);
            }
        );
    }
}
