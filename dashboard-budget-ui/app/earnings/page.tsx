import { DataGoalBars, SpeciesInfo, TableOperation, TableOperationColumns, TableOperationFields, TableOperationFieldsDTO } from '../lib/types';
import { BarGoal } from '../ui/common/barGoal';
import CategoryBars from '../ui/common/categoryHorizontalBars';
import BarChartExtraInfo from '../ui/common/dataBarChart';
import DateRangePeriod from '../ui/common/datePicker';
import OperationTable from '../ui/common/operationTable';

const tableData: TableOperationFields[] = [
  {
    workspace: 'sales_by_day_api',
    owner: 'John Doe',
    status: 'live',
    costs: 3500,
    region: 'US-West 1',
    capacity: 44,
    lastEdited: '23/09/2023 13:00',
  },
  {
    workspace: 'marketing_campaign',
    owner: 'Jane Smith',
    status: 'live',
    costs: 546,
    region: 'US-East 2',
    capacity: 65,
    lastEdited: '22/09/2023 10:45',
  },
  {
    workspace: 'sales_campaign',
    owner: 'Jane Smith',
    status: 'live',
    costs: 4555,
    region: 'US-East 2',
    capacity: 80,
    lastEdited: '22/09/2023 10:45',
  },
  {
    workspace: 'development_env',
    owner: 'Mike Johnson',
    status: 'live',
    costs: 890,
    region: 'EU-West 1',
    capacity: 60,
    lastEdited: '21/09/2023 14:30',
  },
  {
    workspace: 'new_workspace_1',
    owner: 'Alice Brown',
    status: 'live',
    costs: 5645,
    region: 'US-West 2',
    capacity: 75,
    lastEdited: '24/09/2023 09:15',
  },
  {
    workspace: 'test_environment',
    owner: 'David Clark',
    status: 'inactive',
    costs: 4543,
    region: 'EU-Central 1',
    capacity: 40,
    lastEdited: '25/09/2023 16:20',
  },
  {
    workspace: 'analytics_dashboard',
    owner: 'Sarah Wilson',
    status: 'live',
    costs: 8889,
    region: 'US-West 1',
    capacity: 90,
    lastEdited: '26/09/2023 11:30',
  },
  {
    workspace: 'research_project',
    owner: 'Michael Adams',
    status: 'live',
    costs: 5000,
    region: 'US-East 1',
    capacity: 70,
    lastEdited: '27/09/2023 08:45',
  },
  {
    workspace: 'training_environment',
    owner: 'Laura White',
    status: 'live',
    costs: 2333,
    region: 'EU-North 1',
    capacity: 55,
    lastEdited: '28/09/2023 12:15',
  },
];

const tableOperationColumns: TableOperationColumns[] = [
  {
    header: 'Workspace',
    accessorKey: 'workspace',
    enableSorting: true,
    meta: {
      align: 'text-left',
    },
  },
  {
    header: 'Owner',
    accessorKey: 'owner',
    enableSorting: true,
    meta: {
      align: 'text-left',
    },
  },
  {
    header: 'Status',
    accessorKey: 'status',
    enableSorting: false,
    meta: {
      align: 'text-left',
    },
  },
  {
    header: 'Region',
    accessorKey: 'region',
    enableSorting: false,
    meta: {
      align: 'text-left',
    },
  },
  {
    header: 'Capacity',
    accessorKey: 'capacity',
    enableSorting: false,
    meta: {
      align: 'text-left',
    },
  },
  {
    header: 'Costs',
    accessorKey: 'costs',
    enableSorting: false,
    meta: {
      align: 'text-right',
    },
  },
  {
    header: 'Last edited',
    accessorKey: 'lastEdited',
    enableSorting: false,
    meta: {
      align: 'text-right',
    },
  },
];

const tableOperation: TableOperation = {
  columns: tableOperationColumns,
  fields: tableData,
}

const fieldOperationData = [
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

export default function EarningPage(
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

  
  const formatTableOperationFields: TableOperationFieldsDTO[] = tableOperation.fields.map(o => {
    return {
      ...o,
      capacity: o.capacity + "%",
      costs: "$" + o.costs
    }
  })

  tableOperation.fields = formatTableOperationFields;

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