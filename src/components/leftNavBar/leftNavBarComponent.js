import React, { useState } from 'react'
import HeaderComponet from '../header'
import { GoGraph } from 'react-icons/go';
import { AiOutlineShoppingCart,AiOutlineUser,AiOutlineWechat,AiFillQuestionCircle,AiOutlineLogout } from 'react-icons/ai';
import {FiSettings} from 'react-icons/fi';
import Dashboard from '../dashboard';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
const cookies = new Cookies();

const NavBar = () => {
    const [expand,setExpand]=useState(false)
    const navigate=useNavigate()
    const logOut=()=>{
        cookies.remove('user');
        navigate('/login')

    }
  return (
    <div>
        <HeaderComponet setExpand={(val)=>{setExpand(val)}} expand={expand}/>

        <div className='row'>

            <div className={`col-12 col-md-2 bg-white py-4 d-${expand?"block":"none"} d-md-block`} style={{minHeight:"100vh"}}>
                 <div className='d-block d-md-none'>
                    <div className='row'>
                    <div className='col-8'>
                        <input
                            type="search"
                            style={{width:"100%",background:"#ECECEC",marginLeft:"10px"}}
                            className="form-control rounded-5"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="search-addon"
                        />
                    </div>
                    <div className='col-4 my-auto'><p className='text-start my-auto btn border-dark'>search</p></div>
                    </div>
                </div>
                <div className='border-bottom py-3 mt-1 px-4'>
                <p className='my-auto'><GoGraph />&nbsp;&nbsp;Dashboard</p>
                </div>
                <div className='border-bottom py-3 mt-1 px-4'>
                <p className='my-auto'><AiOutlineShoppingCart />&nbsp;&nbsp;Order</p>
                </div>
                <div className='border-bottom py-3 mt-1 px-4'>
                <p className='my-auto'><AiOutlineUser />&nbsp;&nbsp;Account</p>
                </div>
                <div className='border-bottom py-3 mt-1 px-4'>
                <p className='my-auto'><FiSettings />&nbsp;&nbsp;Setting</p>
                </div>
                <div className='border-bottom py-3 mt-1 px-4'>
                    <p className='my-auto' style={{color:"gray"}}>Support</p>
                    <div className='py-2 mt-3 px-4'>
                    <p><AiOutlineWechat />&nbsp;&nbsp;Chat</p>
                </div>
                <div className=' py-2 px-4'>
                    <p><AiFillQuestionCircle />&nbsp;&nbsp;FAQ</p>
                </div>
                </div>

                <div className=' py-3 mt-3 px-4'>
                <div className='btn px-3 py-3 border border-dark' onClick={()=>{logOut()}} style={{width:"100%"}}>
                <p className='my-auto text-center'><AiOutlineLogout />&nbsp;&nbsp;Log Out</p>
                    </div>
                </div>

                <div className=' py-3 mt-5 px-4'>
                <div className='btn px-3 py-3 border border-dark' style={{width:"100%"}}>
                    <p className='text-center my-auto'>Dark Mode</p>
                    </div>
                
                </div>
            </div>

            <div className={`col-12 col-md-10 d-${expand?"none":"block"} d-md-block`}>
                <Dashboard />
            </div>


        </div>
    </div>
  )
}

export default NavBar