import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LicensesRoutingModule } from './licenses-routing.module';
import { LicensesComponent } from './licenses.component';
import { IconsModule } from '@app/shared/icons/icons.module';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    LicensesRoutingModule,
    IconsModule,
    SharedModule,
  ],
  declarations: [LicensesComponent],
})
export class LicensesModule {}
