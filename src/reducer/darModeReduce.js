/* eslint-disable no-redeclare */
/* eslint-disable no-fallthrough */
/* eslint-disable no-unreachable */
/* eslint-disable import/no-anonymous-default-export */
const reducerDark=(state={darkMode:true},action)=>{
    if(action.type=== "CHANGR_DARK_MODE"){
        var newState={darkMode:action.payload}
        return newState
    }
    return state
    }
    
    export default reducerDark