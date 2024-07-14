import { 
  RiHome3Line,
  RiNumbersLine,
  RiChargingPile2Line,
  RiGitRepositoryLine,
  RiSettings3Line
} from "react-icons/ri";

import { 
  AiOutlineFundProjectionScreen,
  AiOutlineShopping,
  AiOutlineFileDone,
  AiOutlineSwitcher 
} from "react-icons/ai";
import { TableOperation, TableOperationColumns, TableOperationFields } from "./types";

export const MENU_OPTIONS = [
  { route: 'Home', href: '/', icon: RiHome3Line },
  { route: 'Earnings', href: '/earnings', icon: RiNumbersLine },
  { route: 'Spending', href: '/spending', icon: RiChargingPile2Line },
  { route: 'Reports', href: '/reports', icon: RiGitRepositoryLine },
  { route: 'Settings', href: '/settingspage', icon: RiSettings3Line  }
];

export function getIconByName(name: string){
  
  const NextIcon = MENU_OPTIONS.find(option => option.route === name)?.icon ?? RiHome3Line;

  return NextIcon;
}

export const FIELD_OPERATION = [
  { name: 'Shooping', icon: AiOutlineShopping },
  { name: 'Investment', icon: AiOutlineFundProjectionScreen },
  { name: 'Education', icon: AiOutlineFileDone },
  { name: 'Other', icon: AiOutlineSwitcher },
]

export function getFieldIconByName(name: string){
  
  const NextIcon = FIELD_OPERATION.find(option => option.name === name)?.icon ?? AiOutlineSwitcher;

  return NextIcon;
}

export function formatTableOperationFields(tableOperation: TableOperation) : TableOperationFields[] {
  return tableOperation.fields.map(o => {

    let numberFinancialValue = [
      { name: "amount", value: o.amount.toString() }, 
      { name: "quoteAmount", value: o.quoteAmount.toString() },
    ];

    numberFinancialValue.forEach(o => {
      if (!o.value.includes('$')) {
        o.value = o.value + "$";
      }
      return o
    })

    const amount = numberFinancialValue.find(o => o.name == 'amount');
    const quoteAmount = numberFinancialValue.find(o => o.name == 'quoteAmount');

    return {
      ...o,
      amount: amount ? amount.value : o.amount.toString(),
      quoteAmount: quoteAmount ? quoteAmount.value : o.quoteAmount.toString(),
    }
  })
}

const tableData: TableOperationFields[] = [
  {
    id: 1,
    date: "23/09/2023 13:00",
    amount: 1000,
    status: "paid",
    field: "education",
    paidDate: "Not defined",
    quoteAmount: 1000,
    quoteFee: "Not defined",
    quoteNumber: 1,
    paidDestination: "Other",
    paidMethod: "Debit",
    lastEdited: '23/09/2023 13:00',
  },
  {
    id: 2,
    date: "23/09/2023 13:00",
    amount: 2000,
    status: "paid",
    field: "shopping",
    paidDate: "Not defined",
    quoteAmount: 2000,
    quoteFee: "Not defined",
    quoteNumber: 1,
    paidDestination: "Other",
    paidMethod: "Debit",
    lastEdited: '23/09/2023 12:59',
  },
  {
    id: 3,
    date: "23/09/2023 13:00",
    amount: 3000,
    status: "paid",
    field: "education",
    paidDate: "Not defined",
    quoteAmount: 3000,
    quoteFee: "Not defined",
    quoteNumber: 1,
    paidDestination: "Other",
    paidMethod: "Debit",
    lastEdited: '22/09/2023 10:45',
  },
  {
    id: 4,
    date: "23/09/2023 13:00",
    amount: 8000,
    status: "paid",
    field: "investment",
    paidDate: "Not defined",
    quoteAmount: 8000,
    quoteFee: "Not defined",
    quoteNumber: 1,
    paidDestination: "Other",
    paidMethod: "Debit",
    lastEdited: '21/09/2023 14:30',
  },
  {
    id: 5,
    date: "23/09/2023 13:00",
    amount: 4500,
    status: "paid",
    field: "shopping",
    paidDate: "Not defined",
    quoteAmount: 450,
    quoteFee: 10,
    quoteNumber: 10,
    paidDestination: "Other",
    paidMethod: "Credit",
    lastEdited: '24/09/2023 09:15',
  },
  {
    id: 6,
    date: "20/10/2023 13:00",
    amount: 1000,
    status: "paid",
    field: "education",
    paidDate: "Not defined",
    quoteAmount: 1000,
    quoteFee: "Not defined",
    quoteNumber: 1,
    paidDestination: "Other",
    paidMethod: "Debit",
    lastEdited: '25/09/2023 16:20',
  },
  {
    id: 7,
    date: "29/09/2023 13:00",
    amount: 1500,
    status: "paid",
    field: "investment",
    paidDate: "Not defined",
    quoteAmount: 1500,
    quoteFee: "Not defined",
    quoteNumber: 1,
    paidDestination: "Other",
    paidMethod: "Credit",
    lastEdited: '26/09/2023 11:30',
  },
  {
    id: 8,
    date: "23/09/2023 13:00",
    amount: 500,
    status: "paid",
    field: "education",
    paidDate: "Not defined",
    quoteAmount: 500,
    quoteFee: "Not defined",
    quoteNumber: 1,
    paidDestination: "Other",
    paidMethod: "Credit",
    lastEdited: '27/09/2023 08:45',
  },
  {
    id: 9,
    date: "23/09/2023 13:00",
    amount: 2000,
    status: "not paid",
    field: "shopping",
    paidDate: "Not defined",
    quoteAmount: 2000,
    quoteFee: "Not defined",
    quoteNumber: 1,
    paidDestination: "Other",
    paidMethod: "Debit",
    lastEdited: '28/09/2023 12:15',
  },
];

const tableOperationColumns: TableOperationColumns[] = [
  {
    header: 'Date',
    accessorKey: 'date',
    enableSorting: true,
    meta: {
      align: 'text-left',
    },
  },
  {
    header: 'Amount',
    accessorKey: 'amount',
    enableSorting: true,
    meta: {
      align: 'text-left',
    },
  },
  {
    header: 'Status',
    accessorKey: 'status',
    enableSorting: true,
    meta: {
      align: 'text-left',
    },
  },
  {
    header: 'Field',
    accessorKey: 'field',
    enableSorting: true,
    meta: {
      align: 'text-left',
    },
  },
  {
    header: 'PaidDate',
    accessorKey: 'paidDate',
    enableSorting: true,
    meta: {
      align: 'text-left',
    },
  },
  {
    header: 'QuoteAmount',
    accessorKey: 'quoteAmount',
    enableSorting: true,
    meta: {
      align: 'text-left',
    },
  },
  {
    header: 'QuoteFee',
    accessorKey: 'quoteFee',
    enableSorting: true,
    meta: {
      align: 'text-left',
    },
  },
  {
    header: 'QuoteNumber',
    accessorKey: 'quoteNumber',
    enableSorting: true,
    meta: {
      align: 'text-left',
    },
  },
  {
    header: 'PaidDestination',
    accessorKey: 'paidDestination',
    enableSorting: true,
    meta: {
      align: 'text-left',
    },
  },
  {
    header: 'PaidMethod',
    accessorKey: 'paidMethod',
    enableSorting: true,
    meta: {
      align: 'text-left',
    },
  },
  {
    header: 'Last edited',
    accessorKey: 'lastEdited',
    enableSorting: true,
    meta: {
      align: 'text-left',
    },
  },
];

const tableOperation: TableOperation = {
  columns: tableOperationColumns,
  fields: tableData,
}

export function fakeDataTableOperation(){
  return tableOperation
}