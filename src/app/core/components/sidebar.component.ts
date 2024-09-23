import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { navlinks } from '../../shared/utils/navlinks';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <aside
      class="bg-gray-0 pt-8 pl-8 border-r bg-white grid-row-1 md:block flex flex-col gap-8 w-[20rem] h-full"
    >
      <div class="flex items-center mb-14">
        <div class="w-8 h-8 bg-blue-500 rounded-lg mr-2"></div>
        <span class="text-xl font-bold">AI CV</span>
      </div>
      <nav class="space-y-8 w-full">
        @for (navlink of navlinks ; track navlink.label) {
        <a
          [routerLink]="navlink.slug"
          routerLinkActive="active"
          class="flex items-center space-x-6 px-2 py-2 rounded font-medium text-gray-700 hover:text-blue-500"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          <!-- {navlink.icon} -->
          <lucide-angular [img]="navlink.icon" class="my-icon"></lucide-angular>
          <span>{{ navlink.label }}</span>
        </a>
        }
      </nav>
      <!-- {/*
      <div class="mt-auto pt-4">
        <NavItem icon="{<LogOut" class="w-5 h-5" />} label="Sign Out" />
      </div>
      */} -->
    </aside>
  `,
  styles: ``,
})
export class SidebarComponent {
  navlinks = navlinks;
}
