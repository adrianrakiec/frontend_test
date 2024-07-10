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

    if (func === 'add') {
      this.currentText += ' ' + quote;
      this.dataService.setCurrentQuote(this.currentText);
    } else if (func === 'replace') {
      this.currentText = quote;
      this.dataService.setCurrentQuote(this.currentText);
    }
  }
}
