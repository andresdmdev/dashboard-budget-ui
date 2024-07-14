"use client"

import { Card, ProgressBar } from '@tremor/react';

export default function ProgressGoalBar({ period }: { period: string }) {

  // Realizar peticion en base al periodo
  // Realizar la peticion por separada para que no afecte a los otros componentes

  return (
    <>
      <Card className="mx-auto max-w-sm opacity-60 hover:opacity-100 transition-opacity">
        <p className='text-slate-100 m-0'>Saving Goal</p>
        <p className="text-tremor-default dark:text-dark-tremor-content flex items-center justify-between mt-3">
          <span className='text-slate-100'>$9,012 &bull; 45%</span>
          <span className='text-slate-100'>$20,000</span>
        </p>
        <ProgressBar value={45} color="teal" className="mt-3" />
      </Card>
    </>
  );
}