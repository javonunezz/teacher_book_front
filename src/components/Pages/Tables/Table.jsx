import { useGlobalFilter, useTable } from 'react-table';
import React from "react";
import { GlobalFilter } from './GlobalFilter';

export const Table = ({dataInitial, columnsInitial}) => {

  const data = React.useMemo(
    () => dataInitial,
    []
  )

  const columns = React.useMemo(
    () => columnsInitial,
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state, // new
    preGlobalFilteredRows, // new
    setGlobalFilter, // new
  } = useTable({ columns, data }, useGlobalFilter)

  return (
    <>
        <div className='bg-white p-1 rounded'>
            <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
            />
        </div>
        <table {...getTableProps()} className="my-5 min-w-full rounded divide-y divide-gray-200">
            <thead className="bg-gray-50 rounded">
                {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                    <th
                        {...column.getHeaderProps()}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-t"
                    >
                        {column.render('Header')}
                    </th>
                    ))}
                </tr>
                ))}
            </thead>
            <tbody 
                {...getTableBodyProps()}
                className="bg-white divide-y divide-gray-200 rounded-b"
            >
                {rows.map(row => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                        return (
                        <td
                            {...cell.getCellProps()}
                            className="px-6 py-4 whitespace-nowrap"
                        >
                            {cell.render('Cell')}
                        </td>
                        )
                    })}
                    </tr>
                )
                })}
            </tbody>
        </table>
    </>
  )
}

