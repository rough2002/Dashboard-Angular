import { NgModule } from '@angular/core';
import { LucideAngularModule, FileIcon } from 'lucide-angular';

@NgModule({
  imports: [LucideAngularModule],
})
export class AppModule {
  readonly FileIcon = FileIcon;
}
