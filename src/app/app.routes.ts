import { Routes } from '@angular/router';
import { TransactionHistoryComponent } from './features/transactionHistory/pages/transaction-history.component';
import { ShortlistCvComponent } from './features/shortListedCV/pages/shortlist-cv.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Transaction History',
    component: TransactionHistoryComponent,
  },
  {
    path: 'shortlistedCvs',
    title: 'Shortlisted CV',
    component: ShortlistCvComponent,
  },
];
