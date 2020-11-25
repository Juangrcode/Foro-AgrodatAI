import { Component, OnInit,ViewChild } from '@angular/core';
import { Interest } from '../models/interests';
import { InterestsService } from '../services/interests.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss'],
  // providers: [InterestsService],
})
export class InterestsComponent implements OnInit {
  // post: Boolean = false;
imageSrc = '../iconos/eliminar.png'
  interests: Interest[] = [
    {
      id:1,
      name:'Papa',
      completed:false
    },
    {
      id:1,
      name:'Arroz',
      completed:false
    },
    {
      id:1,
      name:'Platano',
      completed:false
    },
    {
      id:1,
      name:'Cacao',
      completed:false
    },
  ];

  @ViewChild('busca') busca;
  filterPost: string = ""
  search: string
  checkind: boolean
  frutas_seleccionadas: any[] = []
  mostrar: boolean = false
  found: any

  constructor(public interestsService: InterestsService) { }

  ngOnInit(): void {
    this.getAllInterests();
  }

  getAllInterests() {
    this.interestsService.getAllInterests().subscribe(
      (res) => {
        this.interestsService.interests = res;
        console.log(this.interestsService.interests)
      },
      (err) => console.error(err)
    );
  }

  clickInterest(id:number){
    console.log('interest')
    console.log(id)
  }


  // addInterest(id: any) {
  //   console.log(id);
  //   console.log(this.interestsService.getInterest(id));
  //   this.interestsService.getInterest(id).subscribe(
  //     (res) => {
  //       console.log(res);
  //     },
  //     (err) => console.error(err)
  //   );
  // }

  // seePost() {
  //   this.post = true;
  // }
}
