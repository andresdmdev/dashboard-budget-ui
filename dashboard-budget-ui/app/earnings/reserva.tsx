/* export default function Earnings(){
  return (
    <main className="px-7 pt-10 ml-72 flex flex-col gap-6 w-full text-slate-100 bg-slate-900">
      Earnings
    </main>
  )
} */

"use client"
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';

import DialogUsageExample from '../ui/earnings/dialog';
import SelectPeriod from '../ui/common/selectPeriod';
import { PERIOD_TIME } from '../lib/utils';


const data = [
  {
    "id": 1,
    "date": "03/07/2024",
    "amount": "$120.00",
    "status": "paid",
    "field": "Investment",
    "paidDate": "03/07/2024",
    "quoteAmount": "",
    "quoteFee": "",
    "quoteNumber": "",
    "paidDestination": "Services",
    "paidMethod": "Debit",
    "comments": ""
  },
  {
    "id": 2,
    "date": "01/07/2024",
    "amount": "$820.00",
    "status": "paid",
    "field": "Investment",
    "paidDate": "03/07/2024",
    "quoteAmount": "",
    "quoteFee": "",
    "quoteNumber": "",
    "paidDestination": "Services",
    "paidMethod": "Debit",
    "comments": ""
  },
  {
    "id": 3,
    "date": "03/07/2024",
    "amount": "$620.00",
    "status": "paid",
    "field": "Investment",
    "paidDate": "03/07/2024",
    "quoteAmount": "",
    "quoteFee": "",
    "quoteNumber": "",
    "paidDestination": "Services",
    "paidMethod": "Debit",
    "comments": ""
  },
  {
    "id": 4,
    "date": "02/07/2024",
    "amount": "$120.00",
    "status": "paid",
    "field": "Investment",
    "paidDate": "03/07/2024",
    "quoteAmount": "",
    "quoteFee": "",
    "quoteNumber": "",
    "paidDestination": "Services",
    "paidMethod": "Debit",
    "comments": ""
  },
  {
    "id": 5,
    "date": "03/07/2024",
    "amount": "$320.00",
    "status": "paid",
    "field": "Investment",
    "paidDate": "03/07/2024",
    "quoteAmount": "",
    "quoteFee": "",
    "quoteNumber": "",
    "paidDestination": "Services",
    "paidMethod": "Debit",
    "comments": ""
  },
  {
    "id": 6,
    "date": "03/07/2024",
    "amount": "$120.00",
    "status": "paid",
    "field": "Investment",
    "paidDate": "03/07/2024",
    "quoteAmount": "",
    "quoteFee": "",
    "quoteNumber": "",
    "paidDestination": "Services",
    "paidMethod": "Debit",
    "comments": ""
  },
  {
    "id": 7,
    "date": "02/07/2024",
    "amount": "$520.00",
    "status": "paid",
    "field": "Investment",
    "paidDate": "03/07/2024",
    "quoteAmount": "",
    "quoteFee": "",
    "quoteNumber": "",
    "paidDestination": "Services",
    "paidMethod": "Debit",
    "comments": ""
  },
  {
    "id": 8,
    "date": "03/07/2024",
    "amount": "$150.00",
    "status": "paid",
    "field": "Investment",
    "paidDate": "03/07/2024",
    "quoteAmount": "",
    "quoteFee": "",
    "quoteNumber": "",
    "paidDestination": "Services",
    "paidMethod": "Debit",
    "comments": ""
  }
];

export default function TableUsageExample({
  searchParams,
}: {
  searchParams?: {
    period?: string;
  };
}) {

  let periodTime = searchParams?.period || 'Week';

  return (
    <>
      <Card className='px-7 pt-10 ml-72 flex flex-col gap-6 w-full text-slate-100 bg-slate-900'>
        <SelectPeriod periods={PERIOD_TIME} />
        <Table className="mt-5">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Date</TableHeaderCell>
              <TableHeaderCell>Amount</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell className='flex justify-center'>Actions</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id} className='hover:text-slate-100 transition-colors'>
                <TableCell className='flex items-center gap-2'>
                  {item.date}
                </TableCell>
                <TableCell>
                  {item.amount}
                </TableCell>
                <TableCell>
                  {item.status}
                </TableCell>
                <TableCell>
                  <DialogUsageExample />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  );
}