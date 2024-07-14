"use client"

import { DonutChart } from '@tremor/react';

const datahero = [
  {
    name: 'Invoices',
    value: 9800,
  },
  {
    name: 'Spendings',
    value: 4567,
  },
  {
    name: 'Savings',
    value: 3908,
  }
];

const dataFormatter = (number: number) =>
  `$ ${Intl.NumberFormat('us').format(number).toString()}`;

export default function ExpensesDonutChart({ period }: { period: string }){

  // Realiza peticion en base al periodo
  // Realizar una consulta teniendo en cuenta el periodo

 return (
  <>
    <div className="mx-auto space-y-12 mt-8">
      <div className="space-y-3">
        <span className="text-center block font-mono text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          Total Expenses
        </span>
        <div className="flex justify-center">
          <DonutChart
            data={datahero}
            variant="donut"
            valueFormatter={dataFormatter}
            onValueChange={(v) => console.log(v)}
            className='w-80'
          />
        </div>
      </div>
    </div>
  </>
 )
}