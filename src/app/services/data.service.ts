import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private quotes: string[] = [];
  private tempQuotes: string[] = [];

  constructor(private http: HttpClient) {
    this.loadQuotes();
  }

  private selectedOption = new BehaviorSubject<string>('');
  private currentQuote = new BehaviorSubject<string>('');
  private resetDisplay = new BehaviorSubject<boolean>(false);
  private personalData = new BehaviorSubject<string>('');

  selectedOption$ = this.selectedOption.asObservable();
  currentQuote$ = this.currentQuote.asObservable();
  resetDisplay$ = this.resetDisplay.asObservable();
  personalData$ = this.personalData.asObservable();

  setSelectedOption(option: string): void {
    this.selectedOption.next(option);
  }

  setCurrentQuote(quote: string): void {
    this.currentQuote.next(quote);
  }

  setResetDisplay() {
    this.resetDisplay.next(!this.resetDisplay.value);
  }

  setPersonalData(data: string) {
    this.personalData.next(data);
  }

  private loadQuotes() {
    this.http.get<string[]>('quotes.json').subscribe({
      next: (data) => {
        this.quotes = data;
      },
      error: (error) => {
        console.error('Błąd ładowania pliku JSON', error);
      },
    });
  }

  getNextUniqueQuote(func: string): string {
    let quote: string = '';
    const selectedOption = this.selectedOption.value;

    switch (selectedOption) {
      case 'random':
        if (func === 'add') {
          let index = Math.floor(Math.random() * this.quotes.length);

          quote = this.quotes[index];

          while (
            this.tempQuotes.includes(quote) &&
            this.tempQuotes.length < this.quotes.length
          ) {
            index = Math.floor(Math.random() * this.quotes.length);
            quote = this.quotes[index];
          }

          if (!this.tempQuotes.includes(quote)) {
            this.tempQuotes.push(quote);
          } else {
            quote = '';
          }
        } else if (func === 'replace') {
          let index = Math.floor(Math.random() * this.quotes.length);
          quote = this.quotes[index];
        }
        break;

      case 'first':
        quote = this.quotes[0];

        if (func === 'add') {
          if (!this.tempQuotes.includes(quote)) {
            this.tempQuotes.push(quote);
          } else {
            quote = '';
          }
        } else if (func === 'replace') {
          this.tempQuotes = [quote];
        }
        break;

      case 'second':
        quote = this.quotes[1];

        if (func === 'add') {
          if (!this.tempQuotes.includes(quote)) {
            this.tempQuotes.push(quote);
          } else {
            quote = '';
          }
        } else if (func === 'replace') {
          this.tempQuotes = [quote];
        }
        break;
    }

    return quote;
  }
}
