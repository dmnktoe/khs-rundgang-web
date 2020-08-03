import { Component, OnInit } from '@angular/core';
import { UiStyleToggleService } from '@app/services/ui-style-toggle.service';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.scss'],
})
export class DarkModeToggleComponent implements OnInit {
  constructor(private uiStyleToggleService: UiStyleToggleService) {}

  ngOnInit(): void {}

  toggleTheme() {
    this.uiStyleToggleService.toggle();
  }
}
