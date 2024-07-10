import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-first-block',
  standalone: true,
  imports: [],
  templateUrl: './first-block.component.html',
  styleUrl: './first-block.component.scss',
})
export class FirstBlockComponent {
  constructor(private dataService: DataService) {}

  onOptionChange(option: string): void {
    this.dataService.setSelectedOption(option);
  }
}
