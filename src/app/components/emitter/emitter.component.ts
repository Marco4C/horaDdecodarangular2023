import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.sass']
})
export class EmitterComponent {
  myNumber: number = 0

  onChangeNumber(){
    //não funciona
    this.myNumber = Math.floor(Math.random() * 10)
  }

}
