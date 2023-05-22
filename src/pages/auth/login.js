/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import "./login.css"
import {login} from "../../services/auth.service"
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { getData } from '../../actions/getData';
const cookies = new Cookies();

const Login = (props) => {
const [userData,setUserDate]=useState({name:"",password:""})
const [error,setError]=useState("")
const [session,setSession]=useState(cookies.get('user'))

const navigate=useNavigate()

  useEffect(() => {
   if((session && session.length>0)){
    setSession("")
    navigate('/')
   }
  }, [])

const updateUserInfo = (field, value) => {
  switch (field) {
      case 'name':
        setUserDate({ ...userData, name: value });
          break;
      case 'password':
        setUserDate({ ...userData, password: value });
          break;
      default:
          console.log("No field defined")
  }
}
  
  const loginSubmit=async(e)=>{
    e.preventDefault()
    if(userData.name.length>0 && userData.password.length>0){
      const res=await login(userData)
      if(res===false){
        setError("something went wrong. try again!")
      }
      else{  
        navigate('/')
      }
      
    }else{
      setError("name and password can not be empty!")
    }
  }
  
  return (
    <div
      className="container d-flex justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="row d-flex align-items-center w-75">
        <div className="col-12 col-lg-6">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control rounded-0"
                placeholder="Username"
                aria-autocomplete="none"
                onChange={(e) => updateUserInfo('name', e.target.value)}
              />
            </div>

            <div className="form-group mt-4">
              <input
                type="password"
                className="form-control rounded-0"
                placeholder="Password"
                onChange={(e) => updateUserInfo('password', e.target.value)}
              />
            </div>
            <div className="form-check mt-4 d-flex justify-content-start p-0">
              <input
                type="checkbox"
                id="exampleCheck1"
                style={{ accentColor: "#6A5ACD" }}
              />
              <label className="mx-2" htmlFor="exampleCheck1">
                Remember me &nbsp;&nbsp;<a href="#" style={{textDecoration:"none",color:"#6A5ACD"}}>Forgot password</a>
              </label>
            </div>

            <button
              type="submit"
              className="btn w-100 text-white rounded-0 mt-4"
              style={{ background: "#6A5ACD" }}
              onClick={(e)=>loginSubmit(e)}
            >
              Log in
            </button>
            <div className="form-check mt-1 d-flex justify-content-start p-0">
                <p>Or &nbsp;
                    <a href="#" style={{textDecoration:"none",color:"#6A5ACD"}}>Register now!</a>
                </p>
            </div>
            {error && <p className='text-danger pt-4'>{error}</p>}
          </form>
        </div>

        <div className="col-12 col-lg-6">
          <div className="d-flex justify-content-center align-items-center">
            <img src={"images/keyIllustration.png"} alt="" width="50%" />
          </div>
        </div>
      </div>
    </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Login)
