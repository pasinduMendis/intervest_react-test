/* eslint-disable no-template-curly-in-string */
import React, { useState } from 'react'
import HeaderComponet from '../header'
import { GoGraph } from 'react-icons/go';
import { AiOutlineShoppingCart,AiOutlineUser,AiOutlineWechat,AiFillQuestionCircle,AiOutlineLogout } from 'react-icons/ai';
import {FiSettings} from 'react-icons/fi';
import Dashboard from '../mainDashboardComponent/dashboard';
import Account from '../mainDashboardComponent/account';
import Faq from '../mainDashboardComponent/faq';
import Chat from '../mainDashboardComponent/chat';
import Order from '../mainDashboardComponent/order';
import SettingComponent from '../mainDashboardComponent/setting';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { getData } from '../../actions/getData';
import setDarkMode from '../../actions/darkMode';
const cookies = new Cookies();

const NavBar = (props) => {
    const [expand,setExpand]=useState(false)
    const [date,setDate]=useState("")
    const navigate=useNavigate()
    const logOut=()=>{
        cookies.remove('user');
        navigate('/login')
    }
    const [navSelect,setNavSelect]=useState("dashboard")

    const getDateData=()=>{
        if(date){
            const dateFormat=new Date(date)
            props.getData(dateFormat)
        }
    }
  return (
    <div>
        <HeaderComponet setExpand={(val)=>{setExpand(val)}} expand={expand}/>

        <div className='row'>

            <div className={`col-12 col-md-2 bg-white py-4 d-${expand?"block":"none"} d-md-block`} style={{minHeight:"100vh"}} onClick={()=>{setExpand(false)}}>
                 <div className='d-block d-md-none'>
                    <div className='row'>
                    <div className='col-8'>
                        <input
                            type="date"
                            onChange={(e)=>setDate(e.target.value)}
                            max={`${new Date().toISOString().split('T')[0]}`}
                            style={{width:"100%",background:"#ECECEC",marginLeft:"10px"}}
                            className="form-control rounded-5"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="search-addon"
                        />
                    </div>
                    <div className='col-4 my-auto'><p className='text-start my-auto btn border-dark' onClick={()=>{getDateData()}}>search</p></div>
                    </div>
                </div>
                <div className='border-bottom py-3 mt-1 px-4' style={{cursor:"pointer",width:"100%"}} onClick={()=>{setNavSelect("dashboard")}}>
                <p className='my-auto'><GoGraph />&nbsp;&nbsp;Dashboard</p>
                </div>
                <div className='border-bottom py-3 mt-1 px-4' style={{cursor:"pointer",width:"100%"}} onClick={()=>{setNavSelect("order")}}>
                <p className='my-auto'><AiOutlineShoppingCart />&nbsp;&nbsp;Order</p>
                </div>
                <div className='border-bottom py-3 mt-1 px-4' style={{cursor:"pointer",width:"100%"}} onClick={()=>{setNavSelect("account")}}>
                <p className='my-auto'><AiOutlineUser />&nbsp;&nbsp;Account</p>
                </div>
                <div className='border-bottom py-3 mt-1 px-4' style={{cursor:"pointer",width:"100%"}} onClick={()=>{setNavSelect("setting")}}>
                <p className='my-auto'><FiSettings />&nbsp;&nbsp;Setting</p>
                </div>
                <div className='border-bottom py-3 mt-1 px-4'>
                    <p className='my-auto' style={{color:"gray"}}>Support</p>
                    <div className='py-2 mt-3 px-4' style={{cursor:"pointer",width:"100%"}} onClick={()=>{setNavSelect("chat")}}>
                    <p><AiOutlineWechat />&nbsp;&nbsp;Chat</p>
                </div>
                <div className=' py-2 px-4' style={{cursor:"pointer",width:"100%"}} onClick={()=>{setNavSelect("faq")}}>
                    <p><AiFillQuestionCircle />&nbsp;&nbsp;FAQ</p>
                </div>
                </div>

                <div className=' py-3 mt-3 px-4'>
                <div className='btn px-3 py-3 border border-dark' onClick={()=>{logOut()}} style={{width:"100%"}}>
                <p className='my-auto text-center'><AiOutlineLogout />&nbsp;&nbsp;Log Out</p>
                    </div>
                </div>

                <div className=' py-3 mt-5 px-4'>
                <div className='btn px-3 py-3 border border-dark' style={{width:"100%"}} onClick={
                    ()=>
                    {localStorage.setItem("darkMode",localStorage.getItem("darkMode")&&localStorage.getItem("darkMode")==="false"?true:(localStorage.getItem("darkMode")&&localStorage.getItem("darkMode")==="true"?false:true))
                    props.darkModeChange(localStorage.getItem("darkMode")&&localStorage.getItem("darkMode")==="false"?true:(localStorage.getItem("darkMode")&&localStorage.getItem("darkMode")==="true"?false:true))}
                    }>
                    <p className='text-center my-auto'>Dark Mode</p>
                    </div>
                
                </div>
            </div>

            <div className={`col-12 col-md-10 d-${expand?"none":"block"} d-md-block`}>
                {navSelect==="dashboard" && <Dashboard />}
                {navSelect==="order" && <Order />}
                {navSelect==="account" && <Account />}
                {navSelect==="setting" && <SettingComponent />}
                {navSelect==="chat" && <Chat />}
                {navSelect==="faq" && <Faq />}
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
      getData:(date)=>dispatch(getData(date)),
      darkModeChange:(data)=>dispatch(setDarkMode(data))
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(NavBar)
