"use client"

import { Card, DeltaBar, ProgressBar } from '@tremor/react';

export function BarGoal() {
  return (
    <>
      <Card className="mx-auto w-96 h-72">
        <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content flex items-center justify-between">
          <span>$9,012 &bull; 45%</span>
          <span>$20,000</span>
        </p>
        <ProgressBar value={45} color="teal" className="mt-3" />
        <p className="mt-10 text-tremor-default text-tremor-content dark:text-dark-tremor-content flex items-center justify-between">
          <span>$9,012 &bull; 45%</span>
          <span>$20,000</span>
        </p>
        <ProgressBar value={45} color="teal" className="mt-3" />
        <p className="mt-10 text-tremor-default text-tremor-content dark:text-dark-tremor-content flex items-center justify-between">
          <span>$9,012 &bull; 45%</span>
          <span>$20,000</span>
        </p>
        <div className="space-y-3">
          <p className="text-center font-mono text-sm text-slate-500">DeltaBar</p>
          <DeltaBar value={50} isIncreasePositive={true} />
        </div>
      </Card>
    </>
  );
}