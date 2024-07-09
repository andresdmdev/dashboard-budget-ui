"use client"

import { BarChart } from '@tremor/react';

interface SpeciesInfo {
  name: string;
  [key: string]: string | number;
}

const dataFormatter = (number: number) =>
  Intl.NumberFormat('us').format(number).toString();

export default function BarChartExtraInfo({ data }: { data: SpeciesInfo[] }) {
  return (
    <div className='w-[600px]'>
      <BarChart
        data={data}
        index="name"
        categories={['Number of threatened species','Hola mundo']}
        colors={['blue','red']}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
        onValueChange={(v) => console.log(v)}
      />
    </div>
  )
};