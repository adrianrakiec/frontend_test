import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-third-block',
  standalone: true,
  imports: [],
  templateUrl: './third-block.component.html',
  styleUrl: './third-block.component.scss',
})
export class ThirdBlockComponent {
  quotes: string[] = [];
  quote: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.currentQuote$.subscribe((quote) => {
      this.quote = quote;
    });
  }
}
