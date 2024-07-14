import { DataGoalBars, FieldOperationData, SpeciesInfo } from '../lib/types';
import { fakeDataTableOperation, formatTableOperationFields } from '../lib/utils';
import { BarGoal } from '../ui/common/barGoal';
import CategoryBars from '../ui/common/categoryHorizontalBars';
import BarChartExtraInfo from '../ui/common/dataBarChart';
import DateRangePeriod from '../ui/common/datePicker';
import OperationTable from '../ui/common/operationTable';

const fieldOperationData: FieldOperationData[] = [
  {
    name: 'Shooping',
    value: 456,
  },
  {
    name: 'Investment',
    value: 351,
  },
  {
    name: 'Education',
    value: 271,
  },
  {
    name: 'Other',
    value: 191,
  }
];

const barChartExtraInfo: SpeciesInfo[] = [
  {
    name: 'Shopping',
    info: [
      {
        name: "Debit",
        value: 2499
      },
      {
        name: "Credit",
        value: 100
      }
    ],
    barColor: ['blue','gray'],
    categories: ['Debit', 'Credit']
  },
  {
    name: 'Investment',
    info: [
      {
        name: "Debit",
        value: 345
      },
      {
        name: "Credit",
        value: 3456
      }
    ],
    barColor: ['blue','gray'],
    categories: ['Debit', 'Credit']
  },
  {
    name: 'Education',
    info: [
      {
        name: "Debit",
        value: 3900
      },
      {
        name: "Credit",
        value: 100
      }
    ],
    barColor: ['blue','gray'],
    categories: ['Debit', 'Credit']
  }
];

const goalData: DataGoalBars[] = [
  {
    title: "Meta de Ahorro",
    value: 3000,
    goal: 30000,
    percentage: 30,
  },
  {
    title: "Meta de Ingresos",
    value: 5000,
    goal: 10000,
    percentage: 50,
  },
  {
    title: "Meta de Inversion",
    value: 2000,
    goal: 10000,
    percentage: 20,
  }
]

export default function Spending(
  {
    searchParams,
  }: {
    searchParams?: {
      period?: string;
    };
  }
) {

  let periodTime = searchParams?.period || 7;

  // Hacer consultas a la api para los siguientes objetos.
  // tableOperation -> workspaces
  // tableOperation -> workspacesColumns
  // fieldOperationData
  // barChartExtraInfo
  // goalData
  const fakeDataOperationTable = fakeDataTableOperation();
  const tableOperation = fakeDataOperationTable;
  tableOperation.fields = formatTableOperationFields(tableOperation);

  return (
    <div>
      <section className='flex flex-row gap-7 items-end justify-between'>
        <div className='flex flex-col gap-7'>
          <DateRangePeriod />
          <div className='max-w-3xl'>
            <CategoryBars data={fieldOperationData} />
          </div>
        </div>
        <BarChartExtraInfo data={barChartExtraInfo} />
        <div className='flex flex-row gap-7 max-w-3xl'>
          <BarGoal data={goalData} />
        </div>
      </section>
      <OperationTable tableOperation={tableOperation} />
    </div>
  );
}