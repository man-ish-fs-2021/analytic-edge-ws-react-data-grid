import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchUsers } from '../actions/users';
import {Table} from './index';



function DataGrid() {
     const dispatch = useDispatch();
     useEffect(()=>{
         dispatch(fetchUsers())
     },[]) 
     const isFetching = useSelector((state)=>state.Users.isFetching);
     const users = useSelector((state)=>state.Users.users)
    return (
        <>
        {isFetching?<div>Loading</div>:<Table users={users} />}
        </>
    );
}

export default DataGrid;