import { IconType } from "react-icons";

export interface TableOperationColumns 
{
  header: string,
  accessorKey: string,
  enableSorting: boolean,
  meta: {
    align: string,
  },
}

export interface TableOperationFields {
  id: number,
  date: string,
  amount: string | number,
  status: string,
  field: string,
  paidDate: string,
  quoteAmount: string | number,
  quoteFee: string | number,
  quoteNumber: string | number,
  paidDestination: string,
  paidMethod: string,
  lastEdited: string,
}

export interface TableOperation {
  columns: TableOperationColumns[],
  fields: TableOperationFields[],
}

export interface FieldOperationData {
  name: string,
  value: number,
  icon?: IconType
}

type categoryInfo = {
  name: string,
  value: number,
}

export interface SpeciesInfo {
  name: string;
  info: categoryInfo[];
  categories: string[];
  barColor: string[];
}

export interface DataGoalBars {
  title: string;
  value: number;
  goal: number;
  percentage: number;
}
