import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.sass']
})
export class ListRenderComponent {
  animals: Animal[] = [
    {name: "Turca", type: "Dog", age: 3},
    {name: "Tom", type: "Cat", age: 4},
    {name: "Frida", type: "Dog", age: 10},
    {name: "Bob", type: "Horse", age: 1},
  ];

  animal: Animal = {
    name: "Happy",
    type: "Dog",
    age:  3
  }
  animalDetails = ''
  showAge(animal: Animal) {
    if (animal.age === 1) {
      this.animalDetails = `O ${animal.type} ${animal.name} tem 1 ano!`;
    } else {
      this.animalDetails = `O ${animal.type} ${animal.name} tem ${animal.age} anos!`;
    }
  }
}
