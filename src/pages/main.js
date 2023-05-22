/* eslint-disable import/first */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import NavBar from '../components/leftNavBar/leftNavBarComponent'
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
const cookies = new Cookies();
import { connect } from 'react-redux';
import { getData } from '../actions/getData';
import setDarkMode from '../actions/darkMode';

const MainPage = (props) => {
  const [session,setSession]=useState(cookies.get('user'))
  const navigate=useNavigate()
 
 
  useEffect(() => {
   if(!(session && session.length>0)){
    setSession("")
    navigate('/login')
   }else{
    props.darkModeChange(localStorage.getItem("darkMode")&&localStorage.getItem("darkMode")==="false"?false:(localStorage.getItem("darkMode")&&localStorage.getItem("darkMode")==="true"?true:false))
    props.getData()
    
   }
  }, [])
  
  return (
    <>
    <div style={{background:`${props.data.darkMode.darkMode?"black":"#F5F5F5"}`}}>
        <NavBar/>
    </div>
    </>
  )
}

const mapStateToProps=(state)=>{
  return {data:state}
}

const mapDispatchToProps=(dispatch)=>{
  return {
    getData:(date)=>dispatch(getData(date)),
    darkModeChange:(data)=>dispatch(setDarkMode(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainPage)