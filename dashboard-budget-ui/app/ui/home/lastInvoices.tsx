import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@tremor/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const summary = [
  {
    name: 'Invoices',
    value: '$21,349.36',
    invested: '$19,698.65',
    cashflow: '$14,033.74',
    gain: '+$11,012.39',
    realized: '+$177.48',
    dividends: '+$490.97',
    bgColor: 'bg-blue-500',
    changeType: 'positive',
  },
  {
    name: 'Spendings',
    value: '$25,943.43',
    invested: '$23,698.65',
    cashflow: '$11,033.74',
    gain: '+$3,012.39',
    realized: '+$565.41',
    dividends: '+$290.97',
    bgColor: 'bg-violet-500',
    changeType: 'positive',
  },
  {
    name: 'Invoices',
    value: '$21,349.36',
    invested: '$19,698.65',
    cashflow: '$14,033.74',
    gain: '+$11,012.39',
    realized: '+$177.48',
    dividends: '+$490.97',
    bgColor: 'bg-blue-500',
    changeType: 'positive',
  },
  {
    name: 'Savings',
    value: '$9,443.46',
    invested: '$14,698.65',
    cashflow: '$2,033.74',
    gain: '-$5,012.39',
    realized: '-$634.42',
    dividends: '-$990.97',
    bgColor: 'bg-fuchsia-500',
    changeType: 'negative',
  },
  {
    name: 'Invoices',
    value: '$21,349.36',
    invested: '$19,698.65',
    cashflow: '$14,033.74',
    gain: '+$11,012.39',
    realized: '+$177.48',
    dividends: '+$490.97',
    bgColor: 'bg-blue-500',
    changeType: 'positive',
  },
];

export default function LastInvoices({ period }: { period: string }){

  // Realizar consulta en base al periodo
  // Mostrar la informacion de las ultimas 10 operaciones realizadas

  return (
    <Table className="mt-8">
        <TableHead>
          <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Name
            </TableHeaderCell>
            <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Value
            </TableHeaderCell>
            <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Invested
            </TableHeaderCell>
            <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Cashflow
            </TableHeaderCell>
            <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Gain
            </TableHeaderCell>
            <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Realized
            </TableHeaderCell>
            <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Dividends
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {summary.map((item) => (
            <TableRow key={item.name}>
              <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                <div className="flex space-x-3">
                  <span
                    className={classNames(item.bgColor, 'w-1 shrink-0 rounded')}
                    aria-hidden={true}
                  />
                  <span>{item.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-right">{item.value}</TableCell>
              <TableCell className="text-right">{item.invested}</TableCell>
              <TableCell className="text-right">{item.cashflow}</TableCell>
              <TableCell className="text-right">
                <span
                  className={classNames(
                    item.changeType === 'positive'
                      ? 'text-emerald-700 dark:text-emerald-500'
                      : 'text-red-700 dark:text-red-500',
                  )}
                >
                  {item.gain}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <span
                  className={classNames(
                    item.changeType === 'positive'
                      ? 'text-emerald-700 dark:text-emerald-500'
                      : 'text-red-700 dark:text-red-500',
                  )}
                >
                  {item.realized}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <span
                  className={classNames(
                    item.changeType === 'positive'
                      ? 'text-emerald-700 dark:text-emerald-500'
                      : 'text-red-700 dark:text-red-500',
                  )}
                >
                  {item.dividends}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  )
}