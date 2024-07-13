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
  workspace: string,
  owner: string,
  status: string,
  costs: number,
  region: string,
  capacity: number,
  lastEdited: string,
}

export interface TableOperationFieldsDTO {
  workspace: string,
  owner: string,
  status: string,
  costs: string,
  region: string,
  capacity: string,
  lastEdited: string,
}

export interface TableOperation {
  columns: TableOperationColumns[],
  fields: TableOperationFieldsDTO[] | TableOperationFields[],
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
