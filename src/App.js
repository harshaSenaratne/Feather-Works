import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component'
import Shop from './pages/shop/shop.component'
import Header from '../src/components/header/header.component'
import SignInSignUp from './pages/signin-signup-page/signin.signup.component'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
import {setCurrentUser} from '../src/redux/actions/user/user.actions'
import {connect} from 'react-redux'
class App extends React.Component {
 

 unsubscribeFromAuth = null;

 componentDidMount(){
   const {setCurrentUser} =this.props

   //Listens authentication state changes in the backend 
 this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
   if(userAuth){
   const userRef= await createUserProfileDocument(userAuth);
   userRef.onSnapshot(snapshot=>{

   
      setCurrentUser({
        id:snapshot.id,
        ...snapshot.data()
      })
    
   })
   }
   setCurrentUser(userAuth);
 });

 }

 componentWillUnmount(){
   //closes the subscription when unmounts to avoid memory leaks
  this.unsubscribeFromAuth();
 }

  render(){
  return (
    <div>
     <Header/> {/*Always rendered despite what switch component decides to render */}
   <Switch>
   <Route exact path ='/' component={Homepage}/>
   <Route  path ='/shop' component={Shop}/>
   <Route path='/signin' component={SignInSignUp}/>
   
   </Switch>   
   
    </div>
  );
 }
}

const mapDispatchToProps = dispatch =>({
setCurrentUser:user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
