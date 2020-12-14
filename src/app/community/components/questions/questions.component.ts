import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ActivitiesService } from '../../services/activities.service';
import { InterestsService } from '../../services/interests.service';
import { PostsService } from '../../services/posts.service';

interface HtmlInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
    profile;
    pushUser;
    dataUser;
    activityId;
    activities;
    photoSelected;
    file: File;

    temaInteres: Array<any> = [];

    // Contiene todos los intereses que la persona le dio checklist
    filterInterests: any[];
    id;

    constructor(
        public postsService: PostsService,
        private router: Router,
        public interestsService: InterestsService,
        public activitiesService: ActivitiesService,
        private activateRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.activateRoute.params.subscribe((params: Params) => {
            this.id = params['id'];
            console.log(this.id);
        });
        this.dataUser = localStorage.getItem('dataUser');
        this.getProfile(this.dataUser);
        this.getAllInterests();
        this.getAllActivities();
    }

    getAllInterests() {
        this.interestsService.getAllInterests().subscribe(
            (res) => {
                console.log(res);
                this.interestsService.interests = res;
                this.temaInteres = this.interestsService.interests;
                this.filterInterests = this.temaInteres.filter((item) => {
                    return item.completed == true;
                });
                console.log(this.filterInterests);
            },
            (err) => console.error(err)
        );
    }

    getAllActivities() {
        this.activitiesService.getAllActivities().subscribe(
            (res) => {
                console.log(res);
                this.activities = res;
            },
            (err) => console.error(err)
        );
    }

    getProfile(user_id: number) {
        this.postsService.getProfile(user_id).subscribe(
            (res) => {
                this.profile = res;
            },
            (err) => {
                console.log(err);
            }
        );
    }

    addPost(form: NgForm) {
        switch (form.value.activity) {
            case 'Agricola':
                this.activityId = 1;
                break;
            case 'Bovino':
                this.activityId = 2;
                break;
            case 'Porcino':
                this.activityId = 3;
                break;
            case 'Avicola':
                this.activityId = 4;
                break;
            case 'Acuicola - Pesca':
                this.activityId = 5;
                break;
            default:
                this.activityId = 1;
                break;
        }

        // let formUser = {
        //     user: this.profile.id,
        //     profile: this.profile.id,
        //     content: form.value.content,
        //     profileId: this.profile.id,
        //     activityId: this.activityId,
        //     title: form.value.title,
        //     photo: this.file,
        // };
        console.log(form.value);
        // console.log(formUser);
        if (form.value.id) {
            this.postsService
                .updatePost(
                    this.profile.id,
                    form,
                    this.activityId,
                    this.file,
                    form.value.id
                )
                .subscribe(
                    (res) => {
                        console.log(res);
                        this.router.navigate(['/comunidad/']);
                    },
                    (err) => {
                        console.log(err);
                    }
                );
        } else {
            this.postsService
                .createPost(this.profile.id, form, this.activityId, this.file)
                .subscribe(
                    (res) => {
                        console.log('anadir al post');
                        this.router.navigate(['/comunidad/']);
                        // this.communityClicked.emit(this.community.id);
                        // this.getAllPosts();
                        form.reset();
                        this.pushUser = [];
                        // alert('pOst Creada');
                    },
                    (err) => {
                        console.log(err);
                    }
                );
        }
    }

    onPhotoSelected(event: HtmlInputEvent): void {
        console.log(event.target.files[0]);
        if (event.target.files && event.target.files[0]) {
            this.file = <File>event.target.files[0];
            // image preview
            console.log(this.file);
            const reader = new FileReader();
            reader.onload = (e) => (this.photoSelected = reader.result);
            reader.readAsDataURL(this.file);
        }
    }
}
