import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChangePasswordComponent from './Components/ChangePasswordComponent';
import AdminLoginComponent from './Components/AdminLoginComponent';
import AdminSignInComponent from './Components/AdminSignInComponent';

import UserRegister from "./Components/UserRegister.js";
import UserLogin from "./Components/UserLogin.js";
import UpdatePassword from './Components/UpdatePassword.js';

import Welcome from './Components/Welcome.js';
import CitizenComponent from './Components/CitizenComponent';
import BankAccountComponent from './Components/BankAccountComponent'

import HeaderComponent from './Components/HeaderComponent';

import HomeComponent from './Components/HomeComponent';
import TelephoneConnectionComponent from './Components/TelephoneConnectionComponent';


import ListTelephoneConnectionComponent from './Components/ListTelephoneConnectionComponent';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Router>
      {/* <HeaderComponent/> */}

        <div className="container">
          <Switch>
            {/* <Route path="/" exact component={ForgetPasswordComponent}></Route> */}
            <Route path="/updatePassword/:adminUserName" exact component={ChangePasswordComponent}></Route>
            <Route path="/SignIn" exact component={AdminSignInComponent}></Route>
            <Route path="/Login/:adminUserName/:adminPassword" exact component={AdminLoginComponent}></Route>
            <Route path='/login' exact component={UserLogin} />
          <Route path='/register' exact component={UserRegister} />
          <Route path='/resetpassword' exact component={UpdatePassword} />
         
          <Route path='/welcome' exact component={Welcome} />
          <Route path='/citizen' exact component={CitizenComponent} />
          <Route path='/account' exact component={BankAccountComponent} />


          <Route path='/' exact component={HomeComponent} />
          
          
          <Route path='/create' component={TelephoneConnectionComponent} />
         
          <Route path='/list' component={ListTelephoneConnectionComponent} />
          </Switch>
        </div>
        </Router>
        </div>
  );
}

export default App;
