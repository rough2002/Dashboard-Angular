import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'user-avatar',
  standalone: true,
  imports: [],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="flex gap-2 items-center">
      <span class="flex flex-col items-end">
        <p class="text-lg font-semibold">Hi , Robert</p>
        <p class="text-blue-600 font-medium text-sm">Credits left: 300</p>
      </span>
      <img
        src="https://randomuser.me/api/portraits/men/10.jpg"
        alt="User Image"
        class="w-12 h-12 rounded-full"
      />
    </div>
  `,
  styles: ``,
})
export class UserAvatarComponent {}
