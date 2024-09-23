import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './core/components/sidebar.component';
import { HeaderComponent } from './core/components/header.component';
import { CollapsibleSidebarComponent } from './core/components/collapsible-sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    HeaderComponent,
    CollapsibleSidebarComponent,
  ],
  encapsulation: ViewEncapsulation.None,
  template: `<div class="flex h-screen bg-gray-100">
    @if(isDesktop) {

    <app-sidebar />
    } @else {
    <app-collapsible-sidebar
      [isDesktop]="isDesktop"
      [sidebarOpen]="sidebarOpen"
      (toggleSidebar)="toggleSidebar()"
    />
    }
    <div class="flex flex-col flex-1 overflow-hidden">
      <app-header [isDesktop]="isDesktop" (toggleSidebar)="toggleSidebar()" />
      <main class="flex-1 bg-gray-200 p-6">
        <router-outlet />
      </main>
    </div>
  </div>`,
})
export class AppComponent {
  isDesktop = window.innerWidth >= 1024;
  sidebarOpen = false;

  constructor() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  // Function to check screen size and set `isDesktop` accordingly
  checkScreenSize() {
    this.isDesktop = window.innerWidth >= 1024;
    if (this.isDesktop) {
      this.sidebarOpen = false; // Close sidebar automatically if on desktop
    }
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  // on Unmount
  ngOnDestroy() {
    window.removeEventListener('resize', this.checkScreenSize.bind(this));
  }
}
