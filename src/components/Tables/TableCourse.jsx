import { useFetch } from "../../hooks/useFetch"
import { Loader } from "../Loader/Loader"
import { Table } from "../Pages/Tables/Table"

export const TableCourse = () => {

    const columns = [
        {
          Header: 'ID',
          accessor: 'id',
        },
        {
          Header: 'Name',
          accessor: 'name',
        },
      ]
    const {data, loading} = useFetch("http://localhost:4000/api/v1/courses",);

    return (

        loading
            ? <Loader/>
            : <Table dataInitial={data} columnsInitial={columns}/>
        
    )
}