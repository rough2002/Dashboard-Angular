import { ChartAreaIcon, FileIcon, History, Search, User } from 'lucide-angular';

export const navlinks = [
  {
    label: 'Search CV',
    slug: 'searchCV',
    icon: Search,
  },
  {
    label: 'Shortlisted CV',
    slug: 'shortlistedCvs',
    icon: FileIcon,
  },
  { label: 'Transaction History', slug: '', icon: ChartAreaIcon },
  { label: 'Search History', slug: 'searchHistory', icon: History },
  {
    label: 'Profile',
    slug: 'profile',
    icon: User,
  },
];
