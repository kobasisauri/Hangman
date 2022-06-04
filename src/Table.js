import "./App.css";

const Table = ({ setState, openHandler, tableData, setTable, table }) => {
  const Delate = () => {
    setTable(table.filter((i) => i.id !== tableData.id));
  };
  const Edit = () => {
    setTable(table.filter((i) => i.id !== tableData.id));
    openHandler(false);
    // setState(
    //   ...[
    //     { type: "name", value: tableData.name },
    //     { type: "lastName", value: tableData.lastName },
    //     { type: "number", value: tableData.number },
    //   ]
    // );
    setState({ type: "name", value: tableData.name });
    setState({ type: "lastName", value: tableData.lastName });
    setState({ type: "number", value: tableData.number });
  };

  return (
    <div className="tables">
      <table>
        <thead>
          <tr>
            <th colSpan="3">The Contact N:{tableData.id + 1} </th>
          </tr>
          <tr>
            <th>Name</th>
            <th>LastName</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{tableData.name}</td>
            <td>{tableData.lastName}</td>
            <td>{tableData.number}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={Edit} className="Edit">
        Edit
      </button>

      <button onClick={Delate} className="delate">
        Delate
      </button>
    </div>
  );
};
export default Table;
