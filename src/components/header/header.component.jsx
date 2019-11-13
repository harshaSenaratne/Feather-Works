import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux'; 
import {ReactComponent as Logo} from '../../assets/hanger.svg'
import './header.styles.scss'

const Header =({currentUser})=>(
    <div className='header'>   
          <Link className='logo-container' to="/" >
            <Logo className='logo'/>
          </Link>
  

      <div className='shop-options'>
          <Link className='options' to="/shop"  >
            SHOP
          </Link>
    
          <Link className='options' to="/shop"  >
            CONTACT
          </Link>
          {
            currentUser?(
              <div className='options' onClick={()=> auth.signOut()}>
                Sign Out
              </div>
            ):(
              <Link className='options' to="/signin"  >
               Sign In
            </Link>
            )
          }
    </div>   
    </div>
   
)

const mapStateToProps= state =>({ //State is the root reducer, from there we are accessing the currentUser inside the user.reducer 
currentUser:state.user.currentUser
})

export default connect(mapStateToProps)(Header);