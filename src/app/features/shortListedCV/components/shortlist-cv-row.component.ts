import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Download, LucideAngularModule } from 'lucide-angular'; // Ensure you have lucide-angular installed
import { SkillDotsComponent } from './skillDots.component';

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
      <div class="flex items-start flex-col justify-center">
        <h3 class="font-bold text-lg text-nowrap">{{ data.name }}</h3>
        <span class="text-xs text-gray-500 text-nowrap">{{ data.title }}</span>
      </div>
      <p class="text-sm text-gray-600 mt-1">{{ data.description }}</p>
      <div class="text-xs text-blue-600 font-semibold flex flex-col">
        <div class="font-semibold flex space-x-1 items-center">
          <div class="w-4 h-1 rounded bg-blue-500"></div>
          <span>Skills</span>
        </div>
        <app-skill-dots [count]="data.skillRating"></app-skill-dots>
      </div>
      <button
        class="bg-blue-500 hover:bg-blue-600 text-nowrap text-white rounded-[13px] flex items-center justify-center p-2 w-60 h-12 space-x-2"
      >
        <lucide-angular [img]="icons.Download" class="my-icon"></lucide-angular>
        <span>Download for 30 credits</span>
      </button>
      <button size="icon">-</button>
    </div>
  `,
})
export class ShortListCvRowComponent {
  @Input() data: any; // temporary
  icons = {
    Download,
  };
}
