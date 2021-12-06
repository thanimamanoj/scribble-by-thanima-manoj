// import React, { useMemo } from "react";

// import { Edit, Delete } from "@bigbinary/neeto-icons";
// import { Typography, Button } from "@bigbinary/neetoui/v2";
// import { useHistory } from "react-router-dom";
// import { useTable} from "react-table";

// import { COLUMNS } from "./columns";

// const Table = ({ tableData }) => {
//   const columns = useMemo(() => COLUMNS, []);
//   const data = useMemo(() => tableData, []);
//   const history = useHistory();
//   const tableInstance = useTable(
//     {
//       columns,
//       data
//     }
//   );
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow
//   } = tableInstance;
//   if (!data ) return;
//   return (
//          <table {...getTableProps()}>
//                 <thead>
//                   {headerGroups.map((headerGroup, index) => (
//                     <tr key={index} {...headerGroup.getHeaderGroupProps()}>
//                       {headerGroup.headers.map((column, index) => (
//                         <th key={index} {...column.getHeaderProps()}>
//                           {column.render("Header")}
//                         </th>
//                       ))}
//                     </tr>
//                   ))}
//                 </thead>
//                 <tbody {...getTableBodyProps()}>
//                   {rows.map((row, index) => {
//                     prepareRow(row);
//                     return (
//                       <tr key={index} {...row.getRowProps()}>
//                         {row.cells.map((cell, index) => {
//                           return (
//                             <td key={index} {...cell.getCellProps()}>
//                               <div className="flex  ">
//                                 <Typography>{cell.render("Cell")}</Typography>
//                               </div>
//                             </td>
//                           );
//                         })}
//                         <td>
//                           <div className="flex">
//                             <div className=" mr-4">
//                               <Button
//                                 label="Edit"
//                                 // onClick={() => {
//                                 //   history.push({
//                                 //     pathname: `/articles/${row.original.id}/edit`,
//                                 //     state: { categories: categories },
//                                 //   });
//                                 // }}
//                                 style="secondary"
//                                 icon={() => <Edit />}
//                                 iconPosition="left"
//                               />
//                             </div>
//                             <div className=" mr-8">
//                               <Button
//                                 label="Delete"
//                                // onClick={() => deleteArticle(row.original.id)}
//                                 style="danger"
//                                 icon={() => <Delete />}
//                                 iconPosition="left"
//                               />
//                             </div>
//                           </div>
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>

//   );
// };

// export default Table;
