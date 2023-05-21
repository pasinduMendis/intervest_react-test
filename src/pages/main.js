/* eslint-disable import/first */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import NavBar from '../components/leftNavBar/leftNavBarComponent'
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
const cookies = new Cookies();
import { connect } from 'react-redux';
import { getData } from '../actions/getData';

const MainPage = (props) => {
  const [session,setSession]=useState(cookies.get('user'))
  console.log(props.data)
  const navigate=useNavigate()
  useEffect(() => {
   if(!(session && session.length>0)){
    setSession("")
    navigate('/login')
   }
  }, [])
  
  return (
    <>
        <NavBar/>
    </>
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

export default connect(mapStateToProps,mapDispatchToProps)(MainPage)