import { Component, ViewEncapsulation } from '@angular/core';
import { CheckboxComponent } from '../../../shared/components/checkbox.component';
import { LucideAngularModule, MoreHorizontal } from 'lucide-angular';

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
  transactions = [
    {
      id: 1,
      invoice: 'INV-01-09072010',
      status: 'Completed',
      credits: 1200,
      amount: '$240',
    },
    {
      id: 2,
      invoice: 'INV-01-09072010',
      status: 'Completed',
      credits: 2400,
      amount: '$240',
    },
    {
      id: 3,
      invoice: 'INV-01-09072010',
      status: 'Completed',
      credits: 120,
      amount: '$240',
    },
    {
      id: 4,
      invoice: 'INV-01-09072010',
      status: 'Completed',
      credits: 4000,
      amount: '$500',
    },
    {
      id: 5,
      invoice: 'INV-01-09072010',
      status: 'Completed',
      credits: 350,
      amount: '$240',
    },
    {
      id: 6,
      invoice: 'INV-01-09072010',
      status: 'Completed',
      credits: 600,
      amount: '$240',
    },
    {
      id: 7,
      invoice: 'INV-01-09072010',
      status: 'Completed',
      credits: 1200,
      amount: '$240',
    },
    {
      id: 8,
      invoice: 'INV-01-09072010',
      status: 'Completed',
      credits: 2400,
      amount: '$240',
    },
    {
      id: 9,
      invoice: 'INV-01-09072010',
      status: 'Completed',
      credits: 120,
      amount: '$240',
    },
    {
      id: 10,
      invoice: 'INV-01-09072010',
      status: 'Completed',
      credits: 4000,
      amount: '$500',
    },
    {
      id: 11,
      invoice: 'INV-01-09072010',
      status: 'Completed',
      credits: 350,
      amount: '$240',
    },
    {
      id: 12,
      invoice: 'INV-01-09072010',
      status: 'Completed',
      credits: 600,
      amount: '$240',
    },
    {
      id: 13,
      invoice: 'INV-01-09072010',
      status: 'Completed',
      credits: 1200,
      amount: '$240',
    },
    {
      id: 14,
      invoice: 'INV-01-09072010',
      status: 'Completed',
      credits: 2400,
      amount: '$240',
    },
    {
      id: 15,
      invoice: 'INV-01-09072010',
      status: 'Completed',
      credits: 120,
      amount: '$240',
    },
    {
      id: 16,
      invoice: 'INV-01-09072010',
      status: 'Completed',
      credits: 4000,
      amount: '$500',
    },
    {
      id: 17,
      invoice: 'INV-01-09072010',
      status: 'Completed',
      credits: 350,
      amount: '$240',
    },
    {
      id: 18,
      invoice: 'INV-01-09072010',
      status: 'Completed',
      credits: 600,
      amount: '$240',
    },
  ];
}
