import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { FirstBlockComponent } from '../first-block/first-block.component';
import { SecondBlockComponent } from '../second-block/second-block.component';
import { ThirdBlockComponent } from '../third-block/third-block.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    TitleComponent,
    FirstBlockComponent,
    SecondBlockComponent,
    ThirdBlockComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  quotes: string[] = [];
  selectedOption: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadQuotes();
  }

  loadQuotes() {
    this.http.get<string[]>('quotes.json').subscribe({
      next: (data) => {
        this.quotes = data;
        console.log(this.quotes);
      },
      error: (error) => {
        console.error('Błąd ładowania pliku JSON', error);
      },
    });
  }

  handleDataEvent(data: string) {
    this.selectedOption = data;
  }
}
