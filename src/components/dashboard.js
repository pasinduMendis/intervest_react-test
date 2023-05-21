import React from 'react'
import HighLowOpen from './highLowOpen'
import MonthlyGraph from './monthlyGraph'
import DoughnutChart from './doughnutChart'

const dashboard = () => {
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

            <div className='col-12 col-md-4 px-2' >
              <img src="/images/xSmallDataBox.png" alt="" style={{ width: '100%' }}/>
            </div>
          </div>

          <div className='secondLine row gx-5 mt-4'>

              <HighLowOpen type={"High"} value={"2,134"} presentage={"1.10%"} img={"/images/high-graph.png"}/>
              <HighLowOpen type={"Low"} value={"2,134"} presentage={"1.10%"} img={"/images/low-graph.png"}/>
              <HighLowOpen type={"Open"} value={"2,134"} presentage={"1.10%"} img={"/images/open-graph.png"}/>

          </div>


          <div className='thirdLine row mt-4 gx-5'>
            <div className='col-12 col-md-8 bg-white rounded-3'>
                <MonthlyGraph />
            </div>

            <div className='col-12 col-md-4 mt-4 mt-md-0 bg-white rounded-3'>
            <DoughnutChart />
                {/* <DoughnutChart /> */}
            </div>
          </div>
        </div>

    </div>
  )
}

export default dashboard