import Table from "./Table"
import { BiSolidDownArrowAlt, BiSolidUpArrowAlt } from "react-icons/bi";
import useSort from '../hooks/use-sort'

function SortableTable(props) {

    const { config, data } = props;
    const {
        sortOrder,
        sortBy,
        sortedData,
        setSortColumn
    }  = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column
        }

        return {
            ...column,
            header: () => <th className="cursor-pointer hover:bg-gray-100 select-none" onClick={() => setSortColumn(column.label)}>
                <div className="flex items-center justify-center px-5 py-2">
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label}
                </div>
            </th>
        }
    })


    return (
        <Table {...props} config={updatedConfig} data={sortedData} />
    )
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div>
            <BiSolidUpArrowAlt />
            <BiSolidDownArrowAlt />
        </div>
    }

    if (sortOrder === null) {
        return <div>
            <BiSolidUpArrowAlt />
            <BiSolidDownArrowAlt />
        </div>
    } else if (sortOrder === 'asc') {
        return <div>
            <BiSolidDownArrowAlt />
        </div>
    } else if (sortOrder === 'desc') {
        return <div>
            <BiSolidUpArrowAlt />
        </div>
    }
}

export default SortableTable