import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import { getData } from '../actions/getData';
const cookies = new Cookies();

const HeaderComponet=({setExpand,expand,getData})=> {
  const [date,setDate]=useState("")

  const getDateData=()=>{
    if(date){
        const dateFormat=new Date(date)
        getData(dateFormat)
    }
}

  return (
    <>
      <Navbar bg="white" variant="white" className='w-100' style={{maxWidth:"100vw"}}>
          <Navbar.Brand className='col-2 p-0 px-2 d-none d-md-block' href="#home">
            <img src="/images/logo.png" alt=""/>
          </Navbar.Brand>
          <Navbar.Brand className='col-2 p-0 px-3 d-block d-md-none btn' onClick={()=>{setExpand(!expand)}}>
            <img src="/images/expand.png" alt=""/>
          </Navbar.Brand>

            <Nav.Item className='d-none d-md-block col-0 col-md-3'>
                <input
                  type="date"
                  onChange={(e)=>setDate(e.target.value)}
                  max={`${new Date().toISOString().split('T')[0]}`}
                  style={{width:"100%",background:"#ECECEC"}}
                  className="form-control rounded-5"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                </Nav.Item>
                <Nav.Item className='col-6 col-md-0 d-block d-md-none d-flex justify-content-center'>
            <img src="/images/logo.png" alt=""/>
            </Nav.Item>
                <Nav.Item className='d-none d-md-block col-0 col-md-2'>
                <div className='my-auto'><p className='text-start my-auto btn border-dark' onClick={()=>{getDateData()}}>search</p></div>

              </Nav.Item>
                

              <Nav.Item className='d-flex justify-content-end text-dark col-2 col-md-4'> 
          <div className='d-flex justify-content-end text-dark'>
          <Nav className="navItem">
            <div className='row d-flex align-items-center'>
              <div className='col-2 d-none d-md-block'>
              <img src="/images/notification.png" alt=""/>
              
              </div>
              <div className='col-8 d-none d-md-block'>
                <p className='my-auto text-end'>{cookies.get('user')}</p>
              </div>
              <div className='col-2'>
                <img src="/images/Avatar-circle.png" alt=""/>
              </div>
            </div>
          </Nav>
          
          </div>
          </Nav.Item>
          

      </Navbar>
    </>
  );
}

const mapStateToProps=(state)=>{
  return {data:state}
}

const mapDispatchToProps=(dispatch)=>{
  return {
    getData:(date)=>dispatch(getData(date))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderComponet)
