import React from 'react'
import './Signup.css'
import HeadingComp from './HeadingComp'
const Signin = () => {
  return (
    <div className='signup'>
      <div className="container">
        <div className="row">
            <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
                <HeadingComp first="Sign" second="In"/>
            </div>
            <div className="col-lg-8 column d-flex justify-content-center align-items-center">
                <div className='d-flex flex-column w-100 p-5'>
                    <input className='p-2 my-3 input-signup' name='email' type="email" placeholder='Enter your email'/>
                    <input className='p-2 my-3 input-signup' name='password' type="password" placeholder='Enter your Password'/>
                    <button className='btn-signup p-2'>SignIn</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
