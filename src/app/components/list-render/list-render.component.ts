import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.sass']
})
export class ListRenderComponent {
  animals: Animal[] = [];

  animalDetails = ''
  showAge(animal: Animal) {
    if (animal.age === 1) {
      this.animalDetails = `O ${animal.type} ${animal.name} tem 1 ano!`;
    } else {
      this.animalDetails = `O ${animal.type} ${animal.name} tem ${animal.age} anos!`;
    }
  }
  constructor(private listSevice: ListService) {
    this.getAnimals()
  }

  getAnimals(): void {
    this.listSevice.getAll().subscribe((animals) => (this.animals = animals))
  }

  removeAnimal(animal:Animal){
    this.animals = this.listSevice.remove(this.animals, animal)
  }
}
