import React from 'react'
import './signin.styles.scss'
import FormInput from '../form-input/form-input.component'
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
              onChange={this.handleChange}
             value={this.state.email}
             lable='email' required/> 
           <label>Email</label>
           <FormInput name="password" 
           lable='email'
           handleChange={this.handleChange}
           type="password" value={this.state.password} required/> 
           <label>Password</label>
       <FormInput type='submit' value='Submit Form'/>
       
       
        </form>
       
         </div>
     )
 }
} 

export default SignIN; 