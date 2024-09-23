import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Download, LucideAngularModule } from 'lucide-angular'; // Ensure you have lucide-angular installed
import { SkillDotsComponent } from './skillDots.component';
import { ShortlistedCV } from '../types';

@Component({
  selector: 'app-short-list-cv-row',
  standalone: true,
  imports: [SkillDotsComponent, LucideAngularModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div
      class="flex items-center space-x-4 bg-white p-4 rounded-lg shadow h-24"
    >
      <img
        [src]="'https://randomuser.me/api/portraits/men/' + data.id + '.jpg'"
        alt="Random Male Person"
        class="h-12 w-12 rounded-xl"
      />
      <div class="w-28 flex-shrink-0">
        <h3 class="font-bold text-sm truncate">{{ data.name }}</h3>
        <span class="text-xs text-gray-500 block truncate">{{
          data.title
        }}</span>
      </div>
      <p
        class="text-sm text-gray-600 prose line-clamp-3 overflow-hidden text-ellipsis max-w-md"
      >
        {{ data.description }}
      </p>
      <div class="w-32 flex-shrink-0">
        <div
          class="text-xs text-blue-600 font-semibold flex items-center space-x-1"
        >
          <div class="w-4 h-1 rounded bg-blue-500"></div>
          <span>Skills</span>
        </div>
        <app-skill-dots [count]="data.skillRating"></app-skill-dots>
      </div>
      <button
        class="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl text-nowrap flex items-center justify-center p-2 space-x-2 h-12 w-[30%] flex-shrink-0 px-5"
      >
        <lucide-angular [img]="icons.Download" class="my-icon"></lucide-angular>
        <span class="text-sm md:text-xs">Download for 30 credits</span>
      </button>
      <button
        class="rounded w-4 h-4 flex-shrink-0 bg-blue-700 text-white flex items-center justify-center"
      >
        -
      </button>
    </div>
  `,
})
export class ShortListCvRowComponent {
  @Input() data!: ShortlistedCV;
  icons = {
    Download,
  };
}
