import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second-block',
  standalone: true,
  imports: [],
  templateUrl: './second-block.component.html',
  styleUrl: './second-block.component.scss',
})
export class SecondBlockComponent {
  @Input() option: string = '';

  replace() {
    this.selectOption();
  }

  add() {
    this.selectOption();
  }

  selectOption() {
    switch (this.option) {
      case 'first':
        alert('first');
        break;

      case 'second':
        alert('second');
        break;

      case 'random':
        alert('random');
        break;

      default:
        alert('Nie wybrano opcji!');
        break;
    }
  }
}
