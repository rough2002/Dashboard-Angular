import { Injectable } from '@angular/core';
import { ShortlistedCV } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ShorlistedCvService {
  private dummyData = [
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
  getShortlistedCvs(): ShortlistedCV[] {
    return this.dummyData;
  }
}
