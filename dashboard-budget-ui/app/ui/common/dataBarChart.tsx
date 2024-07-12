"use client"

import { SpeciesInfo } from '@/app/lib/types';
import { BarChart } from '@tremor/react';

const dataFormatter = (number: number) =>
  Intl.NumberFormat('us').format(number).toString();

export default function BarChartExtraInfo({ data }: { data: SpeciesInfo[] }) {

  const categories = data.reduce((result, item) => {
    if(!result.includes(item.category)){
      result.push(item.category)
    }
    return result;
  }, []);

  const newData = data.map(item =>  { return { name: item.name, [item.category]: item.value } })
  const categoryColors = categories.map(item => { return data.find(e => e.category == item)?.barColor ?? 'red' })

  return (
    <div className='w-[600px]'>
      <BarChart
        data={newData}
        index="name"
        categories={categories}
        colors={categoryColors}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
    </div>
  )
};