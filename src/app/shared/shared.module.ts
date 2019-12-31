import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { CurrentTrackComponent } from './current-track/current-track.component';
import { ApiService } from '@app/core/api.service';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SafeHtmlPipe } from '@app/schedule/SafeHtmlPipe';
import { IconsModule } from '@app/shared/icons/icons.module';

@NgModule({
  imports: [CommonModule, NgbDropdownModule, IconsModule],
  declarations: [LoaderComponent, CurrentTrackComponent, SafeHtmlPipe],
  exports: [LoaderComponent, CurrentTrackComponent, SafeHtmlPipe],
  providers: [ApiService]
})
export class SharedModule {}
