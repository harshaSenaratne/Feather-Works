import React from 'react'
import './signin.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {signInWithGoogle} from '../../firebase/firebase.utils'
import { throwStatement } from '@babel/types';

class SignIN extends React.Component{
 constructor(props){
     super(props);

     this.state={
         email:'',
         password:''
     }
     
 }

 handleSubmit=(event)=>{
 event.preventDefault();

 this.setState({
     email:"",
     password:"" 
 })
 }

 handleChange=(event)=>{
const {value,name}=event.target;
this.setState({
    [name]:value
})

 }

 render(){
     return(
         <div className ='sign-in'>
             <h2>I already have an account</h2>
             <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>

            <FormInput name="email" type="email"
            label="Email"
              handleChange={this.handleChange}
             value={this.state.email} required/> 
         

           <FormInput name="password" 
           label='Password'
           handleChange={this.handleChange}
           type="password" value={this.state.email} required/> 

           <div classname="buttons">
           <CustomButton type='submit'  >Sign In</CustomButton>

<CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>

           </div>
        
        </form>
       
         </div>
     )
 }
} 

export default SignIN; 