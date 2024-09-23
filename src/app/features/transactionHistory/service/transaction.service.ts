import { Injectable } from '@angular/core';
import { Transaction } from '../types';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transactions: Transaction[] = [
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
  getTransactions() {
    return this.transactions;
  }
}
