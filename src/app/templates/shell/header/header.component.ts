import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '@app/core/services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isNavVisible = false;
  isLanguagePickerVisible = false;
  now: number;

  constructor(private router: Router, private modalService: ModalService) {
    setInterval(() => {
      this.now = Date.now();
    }, 10);
  }

  toggleNav() {
    this.isNavVisible = !this.isNavVisible;
  }

  closeNav() {
    this.isNavVisible = false;
  }

  toggleLanguagePicker() {
    this.isLanguagePickerVisible = !this.isLanguagePickerVisible;
  }

  ngOnInit() {}

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
