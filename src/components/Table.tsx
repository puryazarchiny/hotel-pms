interface TableProps {
  caption: string;
  headers: string[];
  rows: object[];
}

export function Table({ caption, headers, rows }: TableProps) {
  const tableHeaders = headers.map((header, index) => (
    <th
      key={index}
      className="bg-sky-600 p-4 text-left font-semibold text-gray-200"
    >
      {header}
    </th>
  ));

  const tableRows = rows
    .map((row) => Object.values(row).map((data) => String(data)))
    .map((row) => (
      <tr key={row[0]} className="odd:bg-gray-300 even:bg-gray-200">
        {row.map((data, index) => (
          <td key={index} className="p-4 text-gray-700">
            {data}
          </td>
        ))}
      </tr>
    ));

  return (
    <table className="w-full border-separate bg-gray-100">
      <caption className="p-4 text-left text-xl font-semibold text-gray-700">
        {caption}
      </caption>
      <thead>
        <tr>{tableHeaders}</tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
}
