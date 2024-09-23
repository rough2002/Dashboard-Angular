import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { UserAvatarComponent } from './user-avatar.component';
import { LucideAngularModule, Menu } from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UserAvatarComponent, LucideAngularModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <header
      class="flex items-center pt-8 px-6 bg-gray-200"
      [class.justify-between]="!isDesktop"
      [class.justify-end]="isDesktop"
    >
      @if(!isDesktop){
      <button
        (click)="toggleSidebar.emit()"
        class="bg-white h-12 w-12 flex justify-center items-center rounded"
      >
        <lucide-angular [img]="icons.Menu" class="my-icon"></lucide-angular>
      </button>
      }
      <user-avatar />
    </header>
  `,
})
export class HeaderComponent {
  @Input() isDesktop = false;
  @Output() toggleSidebar = new EventEmitter<void>();

  icons = {
    Menu,
  };
}
