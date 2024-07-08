import { BarGoal } from '../ui/common/barGoal';
import CategoryBars from '../ui/common/categoryHorizontalBars';
import { BarChartHero } from '../ui/common/dataBarChart';
import DateRangePeriod from '../ui/common/datePicker';
import OperationTable from '../ui/common/operationTable';

const workspaces = [
  {
    workspace: 'sales_by_day_api',
    owner: 'John Doe',
    status: 'live',
    costs: '$3,509.00',
    region: 'US-West 1',
    capacity: '99%',
    lastEdited: '23/09/2023 13:00',
  },
  {
    workspace: 'marketing_campaign',
    owner: 'Jane Smith',
    status: 'live',
    costs: '$5,720.00',
    region: 'US-East 2',
    capacity: '80%',
    lastEdited: '22/09/2023 10:45',
  },
  {
    workspace: 'sales_campaign',
    owner: 'Jane Smith',
    status: 'live',
    costs: '$5,720.00',
    region: 'US-East 2',
    capacity: '80%',
    lastEdited: '22/09/2023 10:45',
  },
  {
    workspace: 'development_env',
    owner: 'Mike Johnson',
    status: 'live',
    costs: '$4,200.00',
    region: 'EU-West 1',
    capacity: '60%',
    lastEdited: '21/09/2023 14:30',
  },
  {
    workspace: 'new_workspace_1',
    owner: 'Alice Brown',
    status: 'live',
    costs: '$2,100.00',
    region: 'US-West 2',
    capacity: '75%',
    lastEdited: '24/09/2023 09:15',
  },
  {
    workspace: 'test_environment',
    owner: 'David Clark',
    status: 'inactive',
    costs: '$800.00',
    region: 'EU-Central 1',
    capacity: '40%',
    lastEdited: '25/09/2023 16:20',
  },
  {
    workspace: 'analytics_dashboard',
    owner: 'Sarah Wilson',
    status: 'live',
    costs: '$6,500.00',
    region: 'US-West 1',
    capacity: '90%',
    lastEdited: '26/09/2023 11:30',
  },
  {
    workspace: 'research_project',
    owner: 'Michael Adams',
    status: 'live',
    costs: '$3,900.00',
    region: 'US-East 1',
    capacity: '70%',
    lastEdited: '27/09/2023 08:45',
  },
  {
    workspace: 'training_environment',
    owner: 'Laura White',
    status: 'live',
    costs: '$2,500.00',
    region: 'EU-North 1',
    capacity: '55%',
    lastEdited: '28/09/2023 12:15',
  },
];

const workspacesColumns = [
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

  return (
    <div>
      <section className='flex flex-row gap-7 items-end justify-between'>
        <div className='flex flex-col gap-7'>
          <DateRangePeriod />
          <div className='max-w-3xl'>
            <CategoryBars />
          </div>
        </div>
        <BarChartHero />
        <div className='flex flex-row gap-7 max-w-3xl'>
          <BarGoal />
        </div>
      </section>
      <OperationTable workspaces={workspaces} workspacesColumns={workspacesColumns} />
    </div>
  );
}