import { Component, ViewEncapsulation } from '@angular/core';
import { ShortListCvRowComponent } from './shortlist-cv-row.component';
import { CheckboxComponent } from '../../../shared/components/checkbox.component';

@Component({
  selector: 'app-short-list-cv-table',
  standalone: true,
  imports: [ShortListCvRowComponent, CheckboxComponent],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="h-[75vh] overflow-y-scroll space-y-3 w-full">
      @for (data of dummyData ; track data.id) {
      <div class="flex items-center space-x-4 ">
        <checkbox />
        <app-short-list-cv-row [data]="data" />
      </div>
      }
    </div>
  `,
})
export class ShortListCvTableComponent {
  dummyData = [
    {
      id: 1,
      name: 'John Doe',
      title: 'UI/UX Designer',
      description:
        'From France, Paris. I have rich experience in web design, also I am good at WordPress. I love to talk with you about our unique.',
      imageUrl: '/placeholder.svg?height=48&width=48',
      skillRating: 3,
    },
    {
      id: 2,
      name: 'Jane Smith',
      title: 'Frontend Developer',
      description:
        'From France, Paris. I have rich experience in web design, also I am good at WordPress. I love to talk with you about our unique.',
      imageUrl: '/placeholder.svg?height=48&width=48',
      skillRating: 5,
    },
    {
      id: 3,
      name: 'Alice Johnson',
      title: 'Full Stack Developer',
      description:
        'From France, Paris. I have rich experience in web design, also I am good at WordPress. I love to talk with you about our unique.',
      imageUrl: '/placeholder.svg?height=48&width=48',
      skillRating: 2,
    },
    {
      id: 4,
      name: 'Bob Williams',
      title: 'Backend Developer',
      description:
        'From France, Paris. I have rich experience in web design, also I am good at WordPress. I love to talk with you about our unique.',
      imageUrl: '/placeholder.svg?height=48&width=48',
      skillRating: 3,
    },
    {
      id: 5,
      name: 'Emma Brown',
      title: 'DevOps Engineer',
      description:
        'From France, Paris. I have rich experience in web design, also I am good at WordPress. I love to talk with you about our unique.',
      imageUrl: '/placeholder.svg?height=48&width=48',
      skillRating: 1,
    },
    {
      id: 6,
      name: 'Michael Davis',
      title: 'Data Scientist',
      description:
        'From France, Paris. I have rich experience in web design, also I am good at WordPress. I love to talk with you about our unique.',
      imageUrl: '/placeholder.svg?height=48&width=48',
      skillRating: 4,
    },
  ];
}
