import { DATA_FETCHED, START_FETCHING } from "../actions/actiontypes";

const initialstate = {
    users:[],
    isFetching:true
}

export default function users (state = initialstate,action){
    switch(action.type){
        case START_FETCHING:
            return {
                ...state,
                isFetching:true
            }
        case DATA_FETCHED:
            return {
                ...state,
                users:action.users,
                isFetching:false

            }
        default:
            return state;
    }
}