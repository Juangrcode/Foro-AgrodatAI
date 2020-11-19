import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { InterestsService } from '../../services/interests.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private interestsService: InterestsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      const interests = this.interestsService.getInterest(id);
      console.log(id);
      console.log(interests);
    });
  }
}
