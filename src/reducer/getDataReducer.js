/* eslint-disable no-fallthrough */
/* eslint-disable no-unreachable */
/* eslint-disable import/no-anonymous-default-export */
const reducer=(state={},action)=>{
if(action.type=== "GET_RELATED_DATA"){
    console.log("call :",action.payload)
    var newState={result:action.payload.results}
    console.log(newState)
    return newState
}
console.log(newState)
return state
}

export default reducer