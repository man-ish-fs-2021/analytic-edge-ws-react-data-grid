import React, { useEffect, useState } from 'react';

function Table(props) {
    const {users} = props;
    const [flattenedData,setFlattenedData] = useState({
        headers:[],
        data: []
    });
    useEffect(()=>{
        const ourFlattenedData = flattenedTableData();
        // console.log(ourFlattenedData);
        setFlattenedData(ourFlattenedData);

    },[users]);
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
        <table>
            <thead>
            <tr>
                {flattenedData.headers.map((dataString,index)=>(
                    <th key={`index-${dataString}`}>
                        {dataString}
                    </th>
                     ))}
            </tr>
            </thead>
            <tbody>
                    {flattenedData.data.map((value,index)=>(
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