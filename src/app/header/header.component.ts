import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  personalData: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.personalData$.subscribe((data) => {
      this.personalData = data;
    });
  }
}
