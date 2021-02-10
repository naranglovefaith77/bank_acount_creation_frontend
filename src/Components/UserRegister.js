import React, { Component } from "react";
import "../styles/styles.css";
import UserRegisterService from "../Services/UserRegisterService.js"
class UserRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uemailid: "",
      upass: "",
      confirmpassword:"",
      errors:{}
    };
    
  }
  changeHandler=(event)=>
  {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
    
  }
 
 submitHandler=(e)=>{
  e.preventDefault();
  let user = {uemailid: this.state.uemailid, upass: this.state.upass};
  if(this.validate()){
  UserRegisterService.saveUser(user).then(res =>{

    alert("Successfully Registered")
    this.redirect()
});
  }
 }

 redirect(){
  window.location.href="/login"
}

 validate(){
    let errors = {};
     let isValid= true;

    const { uemailid, upass, confirmpassword } = this.state;
    if (!uemailid) {
        isValid= false;
        errors["uemailid"] = "Please enter your email Address.";
      
    }
    if (typeof uemailid !== "undefined") {
          
        var pattern = new RegExp("^[A-Za-z]+@(.+)$");
        if (!pattern.test(uemailid)) {
          isValid = false;
          errors["uemailid"] = "Please enter valid email address.";
        }
      }
    if (!upass ) {
        isValid= false;
        errors["upass"] = "Please enter your Password.";
      
    }
    if (!confirmpassword ) {
        isValid= false;
        errors["upass"] = "Please enter your Password.";
    }
    if (upass !== confirmpassword) {
        isValid = false;
        errors["confirmpassword"] = "Passwords don't match.";
      }

      this.setState({
        errors: errors
      });
  
      return isValid;
 }

  render() {
    return (
      <div className="page">
        <div className="row">
          <div class="col-sm-8 text-center signup" >
          </div>

          <div class="col-sm-4 signin text-center ">
          
            <h4 class="text-center mt-2">Just few steps away</h4>
            <h2 class="text-center mt-2">Register Here!</h2>

<form>

<div class="form-inline">
  <label > Email Id &nbsp;</label><input
   style={{borderRadius:"40px"}}
      type="email"
      value={this.state.uemailid}
      name="uemailid"
      className="form-control"
      placeholder="Enter Email"
      onChange={this.changeHandler}
     
    />
  </div>
  <div className="text-danger">{this.state.errors.uemailid}</div>
  <div class="form-inline">
  <label > Password &nbsp;</label>
    <input 
    style={{borderRadius:"40px"}}
    type="password"
      value={this.state.upass}
      name="upass"
      className="form-control mt-3"
      placeholder="Enter Password"
      onChange={this.changeHandler}
      
    />
  </div>
  <div className="text-danger">{this.state.errors.upass}</div>
  <div class="form-inline">
  <label > Confirm &nbsp;  <br></br>Password&nbsp;</label>
    <input
    style={{borderRadius:"40px"}}
      type="password"
      value={this.state.confirmpassword}
      name="confirmpassword"
      className="form-control mt-3"
      placeholder="Confirm Password"
      onChange={this.changeHandler}
   
    />
  </div>
  <div className="text-danger">{this.state.errors.confirmpassword}</div>
  <br></br>
  <button className="btn btn-dark mr-5" onClick={this.submitHandler}>Submit</button>
  <br></br>

  <a href="/welcome" class="text-left text-dark mr-5">Homepage</a>
</form>
            </div>
        </div>
        </div>

    );
  }
}

export default UserRegister;