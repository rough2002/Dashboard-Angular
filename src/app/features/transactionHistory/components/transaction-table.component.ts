import { Component, inject, ViewEncapsulation } from '@angular/core';
import { CheckboxComponent } from '../../../shared/components/checkbox.component';
import { LucideAngularModule, MoreHorizontal } from 'lucide-angular';
import { Transaction } from '../types';
import { TransactionService } from '../service/transaction.service';

@Component({
  selector: 'app-transaction-table',
  standalone: true,
  imports: [CheckboxComponent, LucideAngularModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="bg-white rounded-lg shadow h-[75vh] overflow-y-scroll">
      <table class="w-full">
        <thead>
          <tr class="border-b font-bold">
            <th class="px-6 py-3 text-left">
              <checkbox />
            </th>
            <th class="px-6 py-3 text-left">Invoice</th>
            <th class="px-6 py-3 text-left">Status</th>
            <th class="px-6 py-3 text-left">Credits</th>
            <th class="px-6 py-3 text-left">Amount</th>
            <th class="px-6 py-3 text-left"></th>
          </tr>
        </thead>
        <tbody>
          @for( row of transactions ; track row.id){
          <tr key="{index}" class="border-b last:border-b-0">
            <td class="px-6 py-4">
              <checkbox />
            </td>
            <td class="px-6 py-4">{{ row.invoice }}</td>
            <td class="px-6 py-4 flex items-center">
              <div class="h-3 w-3 rounded-full bg-green-500"></div>
              <span
                class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-green-400"
              >
                {{ row.status }}
              </span>
            </td>
            <td class="px-6 py-4">{{ row.credits }}</td>
            <td class="px-6 py-4">{{ row.amount }}</td>
            <td class="px-6 py-4">
              <button class="text-gray-400 hover:text-gray-600">
                <lucide-angular
                  [img]="icons.MoreHorizontal"
                  class="my-icon"
                ></lucide-angular>
              </button>
            </td>
          </tr>
          }
        </tbody>
      </table>
    </div>
  `,
})
export class TransactionTableComponent {
  // icon object for centralizing all the icons within a component
  icons = {
    MoreHorizontal,
  };
  transactions: Transaction[] = [];
  transactionService = inject(TransactionService);
  constructor() {
    this.transactions = this.transactionService.getTransactions();
  }
}
