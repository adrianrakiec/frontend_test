import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { FirstBlockComponent } from '../first-block/first-block.component';
import { SecondBlockComponent } from '../second-block/second-block.component';
import { ThirdBlockComponent } from '../third-block/third-block.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [TitleComponent, FirstBlockComponent, SecondBlockComponent, ThirdBlockComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  selectedOption: string = "";

  handleDataEvent(data: string) {
    this.selectedOption = data;
  }
}
