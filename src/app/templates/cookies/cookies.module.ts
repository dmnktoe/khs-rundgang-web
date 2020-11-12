import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CookiesRoutingModule } from './cookies-routing.module';
import { CookiesComponent } from './cookies.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [CommonModule, TranslateModule, CookiesRoutingModule, SharedModule],
  declarations: [CookiesComponent],
})
export class CookiesModule {}
