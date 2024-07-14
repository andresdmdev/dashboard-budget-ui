'use client';
import {
  LineChart,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const data = [
  {
    date: 'Aug 01',
    'Invoices': 2100.2,
    'Spendings': 4434.1,
    'Savings': 7943.2,
  },
  {
    date: 'Aug 02',
    'Invoices': 2943.0,
    'Spendings': 4954.1,
    'Savings': 8954.1,
  },
  {
    date: 'Aug 03',
    'Invoices': 4889.5,
    'Spendings': 6100.2,
    'Savings': 9123.7,
  },
  {
    date: 'Aug 04',
    'Invoices': 3909.8,
    'Spendings': 4909.7,
    'Savings': 7478.4,
  },
  {
    date: 'Aug 05',
    'Invoices': 5778.7,
    'Spendings': 7103.1,
    'Savings': 9504.3,
  },
  {
    date: 'Aug 06',
    'Invoices': 5900.9,
    'Spendings': 7534.3,
    'Savings': 9943.4,
  },
  {
    date: 'Aug 07',
    'Invoices': 4129.4,
    'Spendings': 7412.1,
    'Savings': 10112.2,
  },
  {
    date: 'Aug 08',
    'Invoices': 6021.2,
    'Spendings': 7834.4,
    'Savings': 10290.2,
  },
  {
    date: 'Aug 09',
    'Invoices': 6279.8,
    'Spendings': 8159.1,
    'Savings': 10349.6,
  },
  {
    date: 'Aug 10',
    'Invoices': 6224.5,
    'Spendings': 8260.6,
    'Savings': 10415.4,
  },
  {
    date: 'Aug 11',
    'Invoices': 6380.6,
    'Spendings': 8965.3,
    'Savings': 10636.3,
  },
  {
    date: 'Aug 12',
    'Invoices': 6414.4,
    'Spendings': 7989.3,
    'Savings': 10900.5,
  },
  {
    date: 'Aug 13',
    'Invoices': 6540.1,
    'Spendings': 7839.6,
    'Savings': 11040.4,
  },
  {
    date: 'Aug 14',
    'Invoices': 6634.4,
    'Spendings': 7343.8,
    'Savings': 11390.5,
  },
  {
    date: 'Aug 15',
    'Invoices': 7124.6,
    'Spendings': 6903.7,
    'Savings': 11423.1,
  },
  {
    date: 'Aug 16',
    'Invoices': 7934.5,
    'Spendings': 6273.6,
    'Savings': 12134.4,
  },
  {
    date: 'Aug 17',
    'Invoices': 10287.8,
    'Spendings': 5900.3,
    'Savings': 12034.4,
  },
  {
    date: 'Aug 18',
    'Invoices': 10323.2,
    'Spendings': 5732.1,
    'Savings': 11011.7,
  },
  {
    date: 'Aug 19',
    'Invoices': 10511.4,
    'Spendings': 5523.1,
    'Savings': 11834.8,
  },
  {
    date: 'Aug 20',
    'Invoices': 11043.9,
    'Spendings': 5422.3,
    'Savings': 12387.1,
  },
  {
    date: 'Aug 21',
    'Invoices': 6700.7,
    'Spendings': 5334.2,
    'Savings': 11032.2,
  },
  {
    date: 'Aug 22',
    'Invoices': 6900.8,
    'Spendings': 4943.4,
    'Savings': 10134.2,
  },
  {
    date: 'Aug 23',
    'Invoices': 7934.5,
    'Spendings': 4812.1,
    'Savings': 9921.2,
  },
  {
    date: 'Aug 24',
    'Invoices': 9021.0,
    'Spendings': 2729.1,
    'Savings': 10549.8,
  },
  {
    date: 'Aug 25',
    'Invoices': 9198.2,
    'Spendings': 2178.0,
    'Savings': 10968.4,
  },
  {
    date: 'Aug 26',
    'Invoices': 9557.1,
    'Spendings': 2158.3,
    'Savings': 11059.1,
  },
  {
    date: 'Aug 27',
    'Invoices': 9959.8,
    'Spendings': 2100.8,
    'Savings': 11903.6,
  },
  {
    date: 'Aug 28',
    'Invoices': 10034.6,
    'Spendings': 2934.4,
    'Savings': 12143.3,
  },
  {
    date: 'Aug 29',
    'Invoices': 10243.8,
    'Spendings': 3223.4,
    'Savings': 12930.1,
  },
  {
    date: 'Aug 30',
    'Invoices': 10078.5,
    'Spendings': 3779.1,
    'Savings': 13420.5,
  },
  {
    date: 'Aug 31',
    'Invoices': 11134.6,
    'Spendings': 4190.3,
    'Savings': 14443.2,
  },
  {
    date: 'Sep 01',
    'Invoices': 12347.2,
    'Spendings': 4839.1,
    'Savings': 14532.1,
  },
  {
    date: 'Sep 02',
    'Invoices': 12593.8,
    'Spendings': 5153.3,
    'Savings': 14283.5,
  },
  {
    date: 'Sep 03',
    'Invoices': 12043.4,
    'Spendings': 5234.8,
    'Savings': 14078.9,
  },
  {
    date: 'Sep 04',
    'Invoices': 12144.9,
    'Spendings': 5478.4,
    'Savings': 13859.7,
  },
  {
    date: 'Sep 05',
    'Invoices': 12489.5,
    'Spendings': 5741.1,
    'Savings': 13539.2,
  },
  {
    date: 'Sep 06',
    'Invoices': 12748.7,
    'Spendings': 6743.9,
    'Savings': 13643.2,
  },
  {
    date: 'Sep 07',
    'Invoices': 12933.2,
    'Spendings': 7832.8,
    'Savings': 14629.2,
  },
  {
    date: 'Sep 08',
    'Invoices': 13028.8,
    'Spendings': 8943.2,
    'Savings': 13611.2,
  },
  {
    date: 'Sep 09',
    'Invoices': 13412.4,
    'Spendings': 9932.2,
    'Savings': 12515.2,
  },
  {
    date: 'Sep 10',
    'Invoices': 13649.0,
    'Spendings': 10139.2,
    'Savings': 11143.8,
  },
  {
    date: 'Sep 11',
    'Invoices': 13748.5,
    'Spendings': 10441.2,
    'Savings': 8929.2,
  },
  {
    date: 'Sep 12',
    'Invoices': 13148.1,
    'Spendings': 10933.8,
    'Savings': 8943.2,
  },
  {
    date: 'Sep 13',
    'Invoices': 12839.6,
    'Spendings': 11073.4,
    'Savings': 7938.3,
  },
  {
    date: 'Sep 14',
    'Invoices': 12428.2,
    'Spendings': 11128.3,
    'Savings': 7533.4,
  },
  {
    date: 'Sep 15',
    'Invoices': 12012.8,
    'Spendings': 11412.3,
    'Savings': 7100.4,
  },
  {
    date: 'Sep 16',
    'Invoices': 11801.3,
    'Spendings': 10501.1,
    'Savings': 6532.1,
  },
  {
    date: 'Sep 17',
    'Invoices': 10102.9,
    'Spendings': 8923.3,
    'Savings': 4332.8,
  },
  {
    date: 'Sep 18',
    'Invoices': 12132.5,
    'Spendings': 10212.1,
    'Savings': 7847.4,
  },
  {
    date: 'Sep 19',
    'Invoices': 12901.1,
    'Spendings': 10101.7,
    'Savings': 7223.3,
  },
  {
    date: 'Sep 20',
    'Invoices': 13132.6,
    'Spendings': 12132.3,
    'Savings': 6900.2,
  },
  {
    date: 'Sep 21',
    'Invoices': 14132.2,
    'Spendings': 13212.5,
    'Savings': 5932.2,
  },
  {
    date: 'Sep 22',
    'Invoices': 14245.8,
    'Spendings': 12163.4,
    'Savings': 5577.1,
  },
  {
    date: 'Sep 23',
    'Invoices': 14328.3,
    'Spendings': 10036.1,
    'Savings': 5439.2,
  },
  {
    date: 'Sep 24',
    'Invoices': 14949.9,
    'Spendings': 8985.1,
    'Savings': 4463.1,
  },
  {
    date: 'Sep 25',
    'Invoices': 15967.5,
    'Spendings': 9700.1,
    'Savings': 4123.2,
  },
  {
    date: 'Sep 26',
    'Invoices': 17349.3,
    'Spendings': 10943.4,
    'Savings': 3935.1,
  },
];

const valueFormatter = (number: number) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`;

export default function SumaryGraph({ period }: { period: string }) {

  // Realizar la consulta en base al periodo.
  // Crear un endpoint en el backend que devuelva la informacion necesaria para utilizar las graficas

  return (
    <>
      <LineChart
        data={data}
        index="date"
        categories={[
          'Invoices',
          'Spendings',
          'Savings',
        ]}
        colors={['blue', 'violet', 'fuchsia']}
        valueFormatter={valueFormatter}
        yAxisWidth={55}
        onValueChange={() => {}}
        className="mt-6 hidden h-96 sm:block"
      />
      <LineChart
        data={data}
        index="date"
        categories={[
          'Invoices',
          'Spendings',
          'Savings',
        ]}
        colors={['blue', 'violet', 'fuchsia']}
        valueFormatter={valueFormatter}
        showYAxis={false}
        showLegend={false}
        startEndOnly={true}
        className="mt-6 h-72 sm:hidden"
      />
    </>
  );
}