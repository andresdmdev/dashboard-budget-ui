import { Card, CategoryBar } from '@tremor/react';

export default function RiskStatusBar({ period }: { period: string }) {

  // Realizar peticion en base al periodo
  // Y que la consulta no afecte a los demas componentes.

  return (
    <>
      <Card className="mx-auto max-w-sm opacity-60 hover:opacity-100 transition-opacity">
        <p className="text-tremor-default text-slate-100 dark:text-dark-tremor-content flex items-center justify-between">
          <span className='text-slate-100'>Debt Risk</span>
          <span className='text-slate-100'>62%</span>
        </p>
        <CategoryBar
          values={[40, 30, 20, 10]}
          colors={['emerald', 'yellow', 'orange', 'rose']}
          markerValue={62}
          className="mt-3"
        />
      </Card>
    </>
  );
}