import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '@app/shared';
import { IconsModule } from '@app/shared/icons/icons.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    TranslateModule,
    RouterModule,
    SharedModule,
    IconsModule,
  ],
  declarations: [HeaderComponent, ShellComponent, FooterComponent],
})
export class ShellModule {}
