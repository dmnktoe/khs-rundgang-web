import { Component, OnInit } from '@angular/core';
import { UiStyleToggleService } from '@app/core/services/ui-style-toggle.service';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.scss'],
})
export class DarkModeToggleComponent implements OnInit {
  isDarkModeActivated: Boolean;

  constructor(private uiStyleToggleService: UiStyleToggleService) {}

  ngOnInit(): void {
    this.isDarkModeActivated = document.body.classList.contains('theme-dark');
  }

  toggleTheme() {
    this.uiStyleToggleService.toggle();
  }
}
