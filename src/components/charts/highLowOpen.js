import React from 'react'

const highLowOpen = ({type,value,presentage,img}) => {
  return (
    <div className='col-12 col-md-4 rounded-4 mt-3 mt-md-0'>
              <div className='bg-white row p-4 rounded-4'>
                <div className='col-7'>
                  <p style={{fontSize:"12px"}}>{type}</p>
                  <p className='h6'>{value}</p>
                  <p style={{fontSize:"12px"}}><img src="/images/arrow_upward.png" alt=""/>&nbsp;{presentage} Since yesterday</p>
                </div>
                <div className='col-5 d-flex align-items-center'>
                <img src={img} alt="" style={{ width: '100%' }}/>
                </div>
              </div>
            </div>
  )
}

export default highLowOpen