"use client"

import { getFieldIconByName } from '@/app/lib/utils';
import { BarList, Card } from '@tremor/react';
import { IconType } from 'react-icons';

export default function CategoryBars({ data }: { data: { name: string, value: number, icon?: IconType | undefined }[] }) {

  let formatIconByName = data.map(field => {
    if (!field.icon) {
      field.icon = getFieldIconByName(field.name);
    }
    return field;
  })

  return (
    <Card className="mx-auto max-w-3xl">
      <h3 className="text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">Operation by Field</h3>
      <p className="mt-4 text-tremor-default flex items-center justify-between text-tremor-content dark:text-dark-tremor-content">
        <span>Category</span>
        <span>Count</span>
      </p>
      <BarList data={formatIconByName} className="mt-2" />
    </Card>
  );
}