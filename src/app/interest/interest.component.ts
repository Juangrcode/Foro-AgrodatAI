import {Component,Input, Output,EventEmitter} from '@angular/core'
import { Interest } from '../models/interests'

@Component({
  selector:'app-interest',
  templateUrl:'./interest.component.html',
  styleUrls:['./interest.component.scss']
})

export class InterestComponent{
  @Input() interest:Interest
  @Output() interestClicked:EventEmitter<any> = new EventEmitter()

  constructor(){
  }

  select() {

    // this.mostrar = true
    // let valor = this.busqueda(tema, numero)
    // if (valor === true) {
    //   this.mostrar = false
    // }
    console.log('Select interest')
    console.log(this.interest)
    this.interestClicked.emit(this.interest.id)

  }

}
