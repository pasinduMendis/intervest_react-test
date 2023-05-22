/* eslint-disable no-redeclare */
/* eslint-disable no-fallthrough */
/* eslint-disable no-unreachable */
/* eslint-disable import/no-anonymous-default-export */
const reducer=(state={},action)=>{
if(action.type=== "GET_RELATED_DATA"){
    var newState={result:action.payload}
    return newState
}
return state
}

export default reducer