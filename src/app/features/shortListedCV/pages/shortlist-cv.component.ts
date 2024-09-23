import { Component, ViewEncapsulation } from '@angular/core';
import { ShortListCvTableComponent } from '../components/shortlist-cv-table.component';

@Component({
  selector: 'app-shortlist-cv',
  standalone: true,
  imports: [ShortListCvTableComponent],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="">
      <h1 class="text-3xl font-semibold mb-6">Shortlisted CV's</h1>
      <app-short-list-cv-table />
    </div>
  `,
  styles: ``,
})
export class ShortlistCvComponent {}
