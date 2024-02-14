import { Button } from "@mui/material";
import React from "react";

interface DynamicTableProps {
  headers: string[];
  rows: { [key: string]: any }[];
  action?: (appointment :any) => void
}

const TableComp: React.FC<DynamicTableProps> = ({ headers, rows,action }) => {
  return (
    <div className="p-4 mx-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((row) => (
            <tr key={row.id}>
              {headers.map((header) => {
                if (header === "allDay" || header === "isDeleted" || header === "isBooked" ) {
                  return (
                    <td key={header} className="px-6 py-4 whitespace-nowrap">
                      {row[header] ? 'yes': "no"}
                    </td>
                  );
                }else if(header === "healthuser") {
                 return (
                  <td key={header} className="px-6 py-4 whitespace-nowrap">
                  {row[header].username}
                </td>
                 )
                } else if (header === "actions" && action) {
                  return (
                    <Button onClick={() => action(row)} variant="text">
                    book
                  </Button>
                  )
                }
                return (
                  <td key={header} className="px-6 py-4 whitespace-nowrap">
                    {row[header]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComp;
