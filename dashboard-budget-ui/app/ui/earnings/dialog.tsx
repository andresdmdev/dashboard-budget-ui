import { Button, Dialog, DialogPanel, TableBody, TableCell, TableRow } from '@tremor/react';
import { FaRegEdit } from "react-icons/fa";
import React, { ReactNode } from 'react';
import { Row, Table, flexRender } from '@tanstack/react-table';
import { TableBodyProps } from '@nextui-org/table';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function DialogUsageExample({
  table
}: {
  table: Table<{
    workspace: string;
    owner: string;
    status: string;
    costs: string;
    region: string;
    capacity: string;
    lastEdited: string;
  }>
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <TableBody>
      {table.getRowModel().rows.map((row) => (
        <TableRow key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <TableCell
              key={cell.id}
              className={classNames(cell.column.columnDef.meta.align)}
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}