/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import HighLowOpen from '../charts/highLowOpen'
import MonthlyGraph from '../charts/monthlyGraph'
import DoughnutChart from '../charts/doughnutChart'
import HighVal from '../charts/highValChart'
import { connect } from 'react-redux'
import { getData } from '../../actions/getData'

const Dashboard = (props) => {
  const [high,setHigh]=useState({
    today :props && props.data && props.data.result.result && props.data.result.result.length>0 ?props.data.result.result[props.data.result.result.length-1].h:"loading..",
    lastDay :props && props.data && props.data.result.result && props.data.result.result.length>0 ?props.data.result.result[props.data.result.result.length-2].h:"loading"
  })
  const [low,setLow]=useState({
    today :props && props.data && props.data.result.result && props.data.result.result.length>0 ?props.data.result.result[props.data.result.result.length-1].l:"loading..",
    lastDay :props && props.data && props.data.result.result && props.data.result.result.length>0 ?props.data.result.result[props.data.result.result.length-2].l:"loading"
  })
  const [open,setOpen]=useState({
    today :props && props.data && props.data.result.result && props.data.result.result.length>0 ?props.data.result.result[props.data.result.result.length-1].o:"loading..",
    lastDay :props && props.data && props.data.result.result && props.data.result.result.length>0 ?props.data.result.result[props.data.result.result.length-2].o:"loading"
  })

  useEffect(() => {
    setHigh({
      today :props && props.data && props.data.result.result && props.data.result.result.length>0 ?props.data.result.result[props.data.result.result.length-1].h:"loading..",
      lastDay :props && props.data && props.data.result.result && props.data.result.result.length>0 ?props.data.result.result[props.data.result.result.length-2].h:"loading"
    } )
    setLow({
      today :props && props.data && props.data.result.result && props.data.result.result.length>0 ?props.data.result.result[props.data.result.result.length-1].l:"loading..",
      lastDay :props && props.data && props.data.result.result && props.data.result.result.length>0 ?props.data.result.result[props.data.result.result.length-2].l:"loading"
    } )
    setOpen({
      today :props && props.data && props.data.result.result && props.data.result.result.length>0 ?props.data.result.result[props.data.result.result.length-1].o:"loading..",
      lastDay :props && props.data && props.data.result.result && props.data.result.result.length>0 ?props.data.result.result[props.data.result.result.length-2].o:"loading"
    } )
  }, [props.data])
  
  return (
    <div className='p-4'>
        <div className='mainWrapDashboard'>

          <div className='firstLine row d-flex align-items-center gx-5'>
            <div className='col-12 col-md-8'>
                <div className='row px-3 py-4' style={{background:"#2BEBC8"}}>
                  <div className='col-12 col-md-6 py-4'>
                    <h5>Welcome to your dashboard!</h5>
                  <p>
                  Try our new Admin Dashboard Template, build with live Ant-Design components. Customize it to your needs and release to production!
                  </p>
                  </div>
                  <div className='col-12 col-md-6'>
                  <img src="/images/dashboardImage.png" alt="" style={{ width: '100%' }}/>
                  </div>
                </div>
            </div>

            <div className='col-12 col-md-4 ' >
              <div className='px-2 py-2 bg-white  rounded-3'>
              <HighVal />
              </div>
            
            </div>
          </div>

          <div className='secondLine row gx-5 mt-4'>

              <HighLowOpen type={"high"} value={high.today} presentage={high.today !=="loading" & high.lastDay !=="loading" ? ((high.today-high.lastDay)/high.lastDay).toFixed(2):"loading"} img={"/images/high-graph.png"}/>
              <HighLowOpen type={"Low"} value={low.today} presentage={low.today !=="loading" & low.lastDay !=="loading" ? ((low.today-low.lastDay)/low.lastDay).toFixed(2):"loading"} img={"/images/low-graph.png"}/>
              <HighLowOpen type={"Open"} value={open.today} presentage={open.today !=="loading" & open.lastDay !=="loading" ? ((open.today-open.lastDay)/open.lastDay).toFixed(2):"loading"} img={"/images/open-graph.png"}/>

          </div>


          <div className='thirdLine row mt-4 gx-5'>
            <div className='col-12 col-md-8 bg-white rounded-3'>
            <p className='h6 px-4 pt-4'>Last Month</p>
                <MonthlyGraph dataArry={props && props.data && props.data.result.result && props.data.result.result.length>0?props.data.result.result:[]}/>
            </div>

            <div className='col-12 col-md-4 mt-4 mt-md-0 bg-white rounded-3'>
              <p className='h6 px-4 pt-4'>Chart</p>
            <DoughnutChart />
                {/* <DoughnutChart /> */}
            </div>
          </div>
        </div>

    </div>
  )
}

const mapStateToProps=(state)=>{
  return {data:state}
}

const mapDispatchToProps=(dispatch)=>{
  return {
    getData:(date)=>dispatch(getData(date))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)

