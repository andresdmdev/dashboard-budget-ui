"use client"

import { DataGoalBars } from '@/app/lib/types';
import { Card, ProgressBar } from '@tremor/react';

export function BarGoal({
  data
}: {
  data: any[];
}) {
  return (
    <>
      <Card className="mx-auto w-96 h-72">
        <h3 className="text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">Goals</h3>
        {
          data.map(item => (
            <>
              <p className="mt-7 text-tremor-default text-tremor-content dark:text-dark-tremor-content flex items-center justify-between">
                <span className="font-semibold text-slate-300">${item.value} &bull; {item.percentage}%</span>
                <span className="text-orange-200">{item.title}</span>
                <span className='text-slate-300'>${item.goal}</span>
              </p>
              <ProgressBar value={item.percentage} color="teal" className="mt-3" />
            </>
          ))
        }
      </Card>
    </>
  );
}