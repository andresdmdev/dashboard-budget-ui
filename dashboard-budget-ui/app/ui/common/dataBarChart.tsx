"use client"

import { SpeciesInfo } from '@/app/lib/types';
import { BarChart } from '@tremor/react';

const dataFormatter = (number: number) =>
  Intl.NumberFormat('us').format(number).toString();

export default function BarChartExtraInfo({ data }: { data: SpeciesInfo[] }) {

  const categories = data[0].categories;
  const barColors = data[0].barColor;

  const newData = data.map(item => {
    const combinedObject = item.info.reduce((acc, curr) => {
      return { ...acc, [curr.name]: curr.value };
    }, {});
    
    return { name: item.name, ...combinedObject };
  });

  return (
    <div className='w-[600px]'>
      <BarChart
        data={newData}
        index="name"
        categories={categories}
        colors={barColors}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
    </div>
  )
};