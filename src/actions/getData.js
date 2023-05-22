import axios from "axios"

export const getData=(dateFilter)=>(dispatch)=>{
    
    const today = new Date();
    const filterDate = dateFilter?dateFilter:new Date();

    const getLast5Day=(relatedDate)=>{
       return new Date(relatedDate.getFullYear(), relatedDate.getMonth(), relatedDate.getDate() - 7)
    }

function formatDate(date) {
    
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
var api=`https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/${formatDate(getLast5Day(today))}/${formatDate(today)}?adjusted=true&sort=asc&limit=120&apiKey=IafDwcjtuPXvtxZhJOAjGiwegxFyZVyH`


if(dateFilter){
    api=`https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/${formatDate(getLast5Day(filterDate))}/${formatDate(filterDate)}?adjusted=true&sort=asc&limit=120&apiKey=IafDwcjtuPXvtxZhJOAjGiwegxFyZVyH`
}

axios.get(api).then((res)=>{
    dispatch({
            type:"GET_RELATED_DATA",
            payload:res.data.results
    })
})

}