import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-second-block',
  standalone: true,
  imports: [],
  templateUrl: './second-block.component.html',
  styleUrl: './second-block.component.scss',
})
export class SecondBlockComponent {
  currentText: string = '';

  constructor(private dataService: DataService) {}

  onClickHandle(func: 'replace' | 'add') {
    const quote = this.dataService.getNextUniqueQuote(func);

    if (quote) {
      const spanQuote = `<span>${quote}</span>`;

      if (func === 'add') {
        this.currentText += ' ' + spanQuote;
        this.dataService.setCurrentQuote(this.currentText);
      } else if (func === 'replace') {
        this.currentText = spanQuote;
        this.dataService.setCurrentQuote(this.currentText);
      }
    }
  }
}
