
"use client"

import { TableOperation } from '@/app/lib/types';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';
import React from 'react';
import DialogPanelOperationRow from './tableDialog';
  
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default function OperationTable({
  tableOperation
}: {
  tableOperation: TableOperation
}) {
  const [data, setData] = React.useState({
    isOpen: false,
    tableOperationRow: null,
  });

  const handleDialogState = (row: any) => {
    setData({
      isOpen: !data.isOpen, 
      tableOperationRow: row[0].row.original
    });
  }

  const handleCloseDialogState = () => {
    setData({
      isOpen: !data.isOpen,
      tableOperationRow: data.tableOperationRow
    })
  }

  const table = useReactTable({
    data: tableOperation.fields,
    columns: tableOperation.columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      sorting: [
        {
          id: 'lastEdited',
          desc: true,
        }
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
      <DialogPanelOperationRow operationData={data.tableOperationRow} isDialogOpen={data.isOpen} closeDialogFunction={handleCloseDialogState} />
    </>
  );
}