
"use client"

import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  Button,
  Dialog,
  DialogPanel,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';
import React from 'react';
  
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function OperationTable({
  workspaces,
  workspacesColumns
}: {
  workspaces: {
    workspace: string;
    owner: string;
    status: string;
    costs: string;
    region: string;
    capacity: string;
    lastEdited: string;
  }[],
  workspacesColumns: {
    header: string;
    accessorKey: string;
    enableSorting: boolean;
    meta: {
        align: string;
    };
  }[]
}) {
  const [data, setData] = React.useState({
    isOpen: false,
    workspace: null,
  });

  const handleDialogState = (row: any) => {
    setData({
      isOpen: !data.isOpen, 
      workspace: row[0].row.original
    });
    
    console.log(data)
  }

  const handleCloseDialogState = () => {
    setData({
      isOpen: !data.isOpen,
      workspace: data.workspace
    })
  }

  const table = useReactTable({
    data: workspaces,
    columns: workspacesColumns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      sorting: [
        {
          id: 'workspace',
          desc: false,
        },
      ],
    },
  });

  return (
    <>
      <Table className='mt-5'>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              className="border-b border-tremor-border dark:border-dark-tremor-border"
            >
              {headerGroup.headers.map((header) => (
                <TableHeaderCell
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      header.column.getToggleSortingHandler()(event);
                    }
                  }}
                  className={classNames(
                    header.column.getCanSort()
                      ? 'cursor-pointer select-none'
                      : '',
                    'group px-0.5 py-1.5',
                  )}
                  tabIndex={header.column.getCanSort() ? 0 : -1}
                  aria-sort={header.column.getIsSorted()}
                >
                  <div
                    className={classNames(
                      header.column.columnDef.enableSorting === true
                        ? 'flex items-center justify-between gap-2 hover:bg-tremor-background-muted hover:dark:bg-dark-tremor-background-muted'
                        : header.column.columnDef.meta.align,
                      'rounded-tremor-default px-3 py-2.5',
                    )}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                    {/* harmonize colors with previous block (=ground truth) */}
                    {header.column.getCanSort() ? (
                      header.column.getIsSorted() === 'asc' ? (
                        <div
                          className="h-4 w-4 text-tremor-content-strong dark:text-dark-tremor-content-strong"
                          aria-hidden={true}
                        />
                      ) : header.column.getIsSorted() === 'desc' ? (
                        <div
                          className="h-4 w-4 text-tremor-content-strong dark:text-dark-tremor-content-strong"
                          aria-hidden={true}
                        />
                      ) : (
                        <div
                          className="h-4 w-4 text-tremor-content dark:text-dark-tremor-content"
                          aria-hidden={true}
                        />
                      )
                    ) : null}
                  </div>
                </TableHeaderCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id} onClick={() => handleDialogState(row.getVisibleCells())} className='cursor-pointer hover:text-slate-200 transition-colors'>
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  key={cell.id}
                  className={classNames(cell.column.columnDef.meta?.align)}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog open={data.isOpen} onClose={() => handleCloseDialogState()} static={true}>
        <DialogPanel>
          <h3 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">Account Created Successfully</h3>
          <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Your account has been created successfully. You can now login to your
            account. For more information, please contact us.
          </p>
          <p>{data.workspace?.workspace ?? "No workspace"}</p>
          <p>{data.workspace?.owner ?? "No workspace"}</p>
          <p>{data.workspace?.status ?? "No workspace"}</p>
          <p>{data.workspace?.costs ?? "No workspace"}</p>
          <h3 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">Account Created Successfully</h3>
          <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Your account has been created successfully. You can now login to your
            account. For more information, please contact us.
          </p>
          <p>{data.workspace?.workspace ?? "No workspace"}</p>
          <p>{data.workspace?.owner ?? "No workspace"}</p>
          <p>{data.workspace?.status ?? "No workspace"}</p>
          <p>{data.workspace?.costs ?? "No workspace"}</p>
          <h3 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">Account Created Successfully</h3>
          <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Your account has been created successfully. You can now login to your
            account. For more information, please contact us.
          </p>
          <p>{data.workspace?.workspace ?? "No workspace"}</p>
          <p>{data.workspace?.owner ?? "No workspace"}</p>
          <p>{data.workspace?.status ?? "No workspace"}</p>
          <p>{data.workspace?.costs ?? "No workspace"}</p>
          <h3 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">Account Created Successfully</h3>
          <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Your account has been created successfully. You can now login to your
            account. For more information, please contact us.
          </p>
          <p>{data.workspace?.workspace ?? "No workspace"}</p>
          <p>{data.workspace?.owner ?? "No workspace"}</p>
          <p>{data.workspace?.status ?? "No workspace"}</p>
          <p>{data.workspace?.costs ?? "No workspace"}</p>
          
          <div className='flex items-center justify-end gap-3'>
            <Button className="mt-8 w-[100px]" onClick={() => handleCloseDialogState()}>
              Edit!
            </Button>
            <Button className="mt-8 w-[100px]" color='red'>
              Delete!
            </Button>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}