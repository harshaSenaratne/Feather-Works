import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component'
import Shop from './pages/shop/shop.component'
import Header from '../src/components/header/header.component'
import SignInSignUp from './pages/signin-signup-page/signin.signup.component'
import {auth} from './firebase/firebase.utils'
import { from } from 'rxjs';
class App extends React.Component {
 constructor(){
   super();
   this.state={
     currentUser:null
   }
 }

 unsubscribeFromAuth = null;

 componentDidMount(){
   //Listens authentication state changes in the backend 
 this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
   this.setState({
     currentUser:user
   });

   console.log(user);
 })
 }

 componentWillUnmount(){
   //closes the subscription when unmounts to avoid memory leaks
  this.unsubscribeFromAuth();
 }

  render(){
  return (
    <div>
     <Header currentUser={this.state.currentUser}/> {/*Always rendered despite what switch component decides to render */}
   <Switch>
   <Route exact path ='/' component={Homepage}/>
   <Route  path ='/shop' component={Shop}/>
   <Route path='/signin' component={SignInSignUp}/>
   
   </Switch>   
   
    </div>
  );
 }
}

export default App;
