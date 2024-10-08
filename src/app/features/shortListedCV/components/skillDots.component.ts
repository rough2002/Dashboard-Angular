import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-skill-dots',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="flex space-x-1 justify-start">
      @for (dot of [].constructor(count) ;let i = $index ;track i) {
      <div
        class="flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full"
      >
        <div class="w-3 h-3 bg-white"></div>
      </div>
      }
    </div>
  `,
})
export class SkillDotsComponent {
  @Input() count = 1; // Default value
}
