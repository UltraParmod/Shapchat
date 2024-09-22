import { combineReducers } from "redux";
import auth from "./auth";
import  types  from "../types"
import actions from "../actions";

const appReducer=combineReducers({
    auth,
})
const rootReducer=(state,action)=>{
        if(actions.type==types.CLEARE_REDUX_STATE){
            state=undefined
        }
        return appReducer(state,action)
}
export default rootReducer