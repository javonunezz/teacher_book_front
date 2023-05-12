import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../loader/Loader";
import { Table } from "../Pages/tables/Table";

export const TableTeacher = () => {
  const columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Last Name",
      accessor: "last_name",
    },
  ];
  const { data, loading } = useFetch("http://localhost:4000/api/v1/teacher");

  return loading ? (
    <Loader />
  ) : (
    <Table dataInitial={data} columnsInitial={columns} />
  );
};
