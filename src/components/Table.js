import React, { useEffect, useState } from 'react';
const SortingDirection = {
    ASCENDING : "ASCENDING",
    DESCENDING : "DESCENDING",
    UNSORTED : "UNSORTED"
  }
//   creating an enum like function to store the direction of the sort 
  Object.freeze(SortingDirection);
//   sorting data based on their sorting order
  const sortData = (data,sortKey,sortingDirection)=>{
      data.sort((a,b)=>{
          const valueA = a[sortKey];
          const valueB = b[sortKey];
          if (
            sortingDirection === SortingDirection.UNSORTED ||
            sortingDirection === SortingDirection.ASCENDING
          ) {
            if (valueA < valueB) return -1;
            if (valueA > valueB) return 1;
            return 0;
          } else {
            if (valueA > valueB) return -1;
            if (valueA < valueB) return 1;
            return 0;
          }
      })
  }
//   sets next sorting direction
  const getNextSortingDirection = (sortingDirection)=>{
    if (
        sortingDirection === SortingDirection.UNSORTED ||
        sortingDirection === SortingDirection.ASCENDING
      ){
          return SortingDirection.DESCENDING;
      }
      return SortingDirection.ASCENDING;
  }
  const getFilteredRows = (rows,filterKey)=>{
    return rows.filter((row)=>Object.values(row).some((s)=>(""+s).toLowerCase().includes(filterKey)))
  }
function Table(props) {
    const {users} = props;
    const [flattenedData,setFlattenedData] = useState({
        headers:[],
        data: []
    });
    const [sortingDirections, setSortingDirections] = useState({});
    const [inputFieldValue,setInputFieldValue] = useState('');
    const sortColumn = (sortKey)=>{
        const newFlattenedData = {
            ...flattenedData,
            data: [...flattenedData.data]
        }
        const currentSortingDirection = sortingDirections[sortKey];
        sortData(newFlattenedData.data,sortKey,currentSortingDirection);
        const nextSortingDirection = getNextSortingDirection(currentSortingDirection);
        const newSortingDirection = {...sortingDirections};
        newSortingDirection[sortKey] = nextSortingDirection;

        setFlattenedData(newFlattenedData);
        setSortingDirections(newSortingDirection);
    }
    
    useEffect(()=>{
        const ourFlattenedData = flattenedTableData();
        // console.log(ourFlattenedData);
        setFlattenedData(ourFlattenedData);
        const {headers} = ourFlattenedData;
        const ourSortingDirection = {};
        for(const header of headers){
            ourSortingDirection[header] = SortingDirection.UNSORTED;
        }
        setSortingDirections(ourSortingDirection);

    },[]);
    const flattenedTableData = ()=>{
        const data = [];
        // console.log(users)
        for(const {id,name,email,phone,website,company} of users){
            data.push({id,email,name,phone,website,company:company.name})
        }
        // console.log(data);
        const flattenedHeaders = objectHeaders();
        return {headers:flattenedHeaders,data}
        
    }
    const objectHeaders = ()=>{
        let objectKeys = [];
        objectKeys.push("id",'name','email','phone','website','company')
        return objectKeys.map((x)=>{return x.toUpperCase()});
    }
  
    return (
        <>
        <input value={inputFieldValue} onChange={(e)=>{ setInputFieldValue(e.target.value)}} />
        <table>
            <thead>
            <tr>
                {flattenedData.headers.map((dataString,index)=>(
                    <th key={`${index}-${dataString}`} onClick={() => {sortColumn(dataString.toLowerCase())}}>
                        {dataString}
                    </th>
                     ))}
            </tr>
            </thead>
            <tbody>
                    {getFilteredRows(flattenedData.data,inputFieldValue).map((value,index)=>(
                        <tr key={`${index}-${value}`}>
                            {flattenedData.headers.map((header,index)=>(
                                <td key={`${index}-${header}`}>
                                    {value[header.toLowerCase()]}
                                </td>
                            ))}
                        </tr>
                    ))}
            </tbody>
        </table>
        </>
    );
}

export default Table;