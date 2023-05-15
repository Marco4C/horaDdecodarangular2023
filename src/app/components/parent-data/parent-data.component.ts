import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.sass']
})
export class ParentDataComponent {
  name='joãozinho'
  @Input() title: string = 'Title not found'
}
