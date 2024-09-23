import { Component, inject, ViewEncapsulation } from '@angular/core';
import { ShortListCvRowComponent } from './shortlist-cv-row.component';
import { CheckboxComponent } from '../../../shared/components/checkbox.component';
import { ShorlistedCvService } from '../service/shorlisted-cv.service';
import { ShortlistedCV } from '../types';

@Component({
  selector: 'app-short-list-cv-table',
  standalone: true,
  imports: [ShortListCvRowComponent, CheckboxComponent],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="h-[75vh] overflow-y-scroll space-y-3 w-full">
      @for (item of shortListedCvData ; track item.id) {
      <div class="flex items-center space-x-4 ">
        <checkbox />
        <app-short-list-cv-row [data]="item" />
      </div>
      }
    </div>
  `,
})
export class ShortListCvTableComponent {
  shortListedCvData: ShortlistedCV[] = [];
  shorlistedCvService = inject(ShorlistedCvService);
  constructor() {
    this.shortListedCvData = this.shorlistedCvService.getShortlistedCvs();
  }
}
