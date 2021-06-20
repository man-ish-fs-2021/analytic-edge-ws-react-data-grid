import {START_FETCHING,DATA_FETCHED} from './actiontypes';



export function fetchUsers(){
    return (dispatch)=>{
        const url ='https://jsonplaceholder.typicode.com/users';
        dispatch(fetchingInProgress());
         const  startFetch = async ()=>{
            const response = await fetch(url);
            // console.log(response);
            const data = await response.json()
            // console.log("Data",data);
            dispatch(fetchedData(data))
         }
         startFetch();
    }
}

export function fetchingInProgress(){
    return {
        type: START_FETCHING
    }
}
export function fetchedData(users){
    return {
        type : DATA_FETCHED,
        users
    }
}