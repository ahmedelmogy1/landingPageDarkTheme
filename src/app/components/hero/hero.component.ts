import { Component } from '@angular/core';
import { DragElementDirective } from '../../directives/drag-element.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [DragElementDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
