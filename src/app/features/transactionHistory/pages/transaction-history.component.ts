import { Component, ViewEncapsulation } from '@angular/core';
import { TransactionTableComponent } from '../components/transaction-table.component';

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [TransactionTableComponent],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="">
      <h1 class="text-3xl font-semibold mb-4">Create Purchase History</h1>
      <app-transaction-table></app-transaction-table>
    </div>
  `,
})
export class TransactionHistoryComponent {}
