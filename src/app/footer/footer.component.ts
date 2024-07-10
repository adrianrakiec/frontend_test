import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  optionsVisible = false;

  constructor(private dataService: DataService) {}

  toggleOptions() {
    this.optionsVisible = !this.optionsVisible;
  }

  resetDisplay() {
    this.dataService.setResetDisplay();
    this.dataService.setPersonalData('');
    this.toggleOptions();
  }

  personalDataDisplay() {
    this.dataService.setPersonalData('Adrian Rakieć');
    this.toggleOptions();
  }
}
