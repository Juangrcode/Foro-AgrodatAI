import { Component, OnInit } from '@angular/core';
import { InterestsService } from '../../services/interests.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss'],
  providers: [InterestsService],
})
export class InterestsComponent implements OnInit {
  post: Boolean = false;

  constructor(public interestsService: InterestsService) {}

  ngOnInit(): void {
    this.getAllInterests();
  }

  getAllInterests() {
    this.interestsService.getAllInterests().subscribe(
      (res) => {
        this.interestsService.interests = res;
      },
      (err) => console.error(err)
    );
  }

  addInterest(id: any) {
    console.log(id);
    console.log(this.interestsService.getInterest(id));
    this.interestsService.getInterest(id).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.error(err)
    );
  }

  seePost() {
    this.post = true;
  }
}
