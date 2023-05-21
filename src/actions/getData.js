import axios from "axios"

export const getData=(date)=>(dispatch)=>{
    const today = new Date();
console.log('Before: ', today);
const month = today.getMonth();
const beforeMonth=today.setMonth(month - 1);
console.log(today,beforeMonth)


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

axios.get(`https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-04-23/2023-05-23?apiKey=IafDwcjtuPXvtxZhJOAjGiwegxFyZVyH`).then((res)=>{
    console.log("dataset ;",res.data);
    dispatch({
            type:"GET_RELATED_DATA",
            payload:res.data
    })
})

}