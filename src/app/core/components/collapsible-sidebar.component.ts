import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { navlinks } from '../../shared/utils/navlinks';

@Component({
  selector: 'app-collapsible-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
  template: `
    <aside
      class="bg-gray-0 pt-8 pl-8 bg-white grid-row-1 md:block flex flex-col gap-8  h-full transition-transform duration-300 ease-in-out w-1/3 z-50"
      [class.w-64]="isDesktop"
      [class.fixed]="!isDesktop"
      [class.transform]="!isDesktop"
      [class.translate-x-0]="isDesktop || sidebarOpen"
      [class.-translate-x-full]="!isDesktop && !sidebarOpen"
    >
      <!-- Sidebar Header -->
      <div class="flex items-center justify-between mb-6 p-4">
        <div class="flex items-center">
          <div class="w-8 h-8 bg-blue-500 rounded-lg mr-2"></div>
          <span class="text-xl font-bold">AI CV</span>
        </div>

        <button
          (click)="toggleSidebar.emit()"
          class="flex justify-center items-center lg:hidden"
        >
          <span class="w-6 h-6 hover:bg-gray-200 text-black font-medium rounded"
            >✕</span
          >
        </button>
      </div>

      <!-- Navigation Links -->
      <nav class="space-y-8 w-full">
        @for (navlink of navlinks ; track navlink.label) {
        <a
          [routerLink]="navlink.slug"
          routerLinkActive="active"
          class="flex items-center space-x-6 py-2 rounded font-medium text-gray-700 hover:text-blue-500"
          [routerLinkActiveOptions]="{ exact: true }"
          (click)="closeSidebar()"
        >
          <!-- {navlink.icon} -->
          <lucide-angular [img]="navlink.icon" class="my-icon"></lucide-angular>
          <span>{{ navlink.label }}</span>
        </a>
        }
      </nav>
    </aside>
    @if(!isDesktop && sidebarOpen) {
    <div
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
      (click)="closeSidebar()"
    ></div>
    }
  `,
})
export class CollapsibleSidebarComponent {
  @Input() isDesktop = false;
  @Input() sidebarOpen = false; // Controls the sidebar open/close state on mobile
  @Output() toggleSidebar = new EventEmitter<void>();
  navlinks = navlinks;

  // Closes sidebar
  closeSidebar() {
    this.sidebarOpen = false;
  }
}
