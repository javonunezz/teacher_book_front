import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../loader/Loader";
import { Table } from "../Pages/tables/Table";

export const TableStudent = () => {
  const columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Gender",
      accessor: "gender",
    },
  ];
  const { data, loading } = useFetch("http://localhost:4000/api/v1/student");

  return loading ? (
    <Loader />
  ) : (
    <Table dataInitial={data} columnsInitial={columns} />
  );
};
