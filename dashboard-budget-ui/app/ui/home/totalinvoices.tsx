/* import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card" */

import { Card } from '@tremor/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function CardDashboard({value, diference, timeSearched, title, subTitle}: {value: string, diference: string,timeSearched: string, title: string, subTitle: string}){

  // Buscar en db el total invoices del cliente
  // Formatear el valor para que tenga simbolos y signos.
  // Calcular en base a la semana en curso
  // Y comparar con la semana pasada.
  value = "$45,231.89"; // delete

  // Valor con respecto a la semana pasada
  // El calculo debe ir en una accion
  // Formatear el valor en base a lo que se requiera
  diference = "+20.1%" // delete

  // Agregar signo para que se pueda devolver de la api 
  // changeType

  return (
    <Card decoration="top" decorationColor="indigo" className='opacity-100 hover:opacity-80 transition-opacity'>
      <p className="text-tremor-default font-medium text-tremor-content dark:text-dark-tremor-content">
        {title}
      </p>
      <div className="mt-2 block items-baseline">
        <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          {value}
        </p>
        <span
          className={classNames(
            'positive' === 'positive'
              ? 'text-emerald-700 dark:text-emerald-500'
              : 'text-red-700 dark:text-red-500',
            'text-tremor-default font-medium',
          )}
        >
          {diference} {timeSearched}
        </span>
      </div>
    </Card>
  )
}