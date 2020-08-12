import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LicensesRoutingModule } from './licenses-routing.module';
import { LicensesComponent } from './licenses.component';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [CommonModule, TranslateModule, LicensesRoutingModule, SharedModule],
  declarations: [LicensesComponent],
})
export class LicensesModule {}
