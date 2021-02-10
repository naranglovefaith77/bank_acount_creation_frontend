import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class AdminSignInComponent extends Component {
    constructor() {
        super();
        this.state = {
          id: this.adminUserName,
          adminUserName:"",
          adminPassword:"",
          userNameError:"",
          passwordError:"",
    
          isFormSubmitted: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
        this.validateAdminPassword = this.validateAdminPassword.bind(this);
    
        this.validateField = this.validateField.bind(this);
      }
    
      handleChange= (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({[nam]: val});
        
    
    }
      handleBlur(event) {
        const { name } = event.target;
    
    
        this.validateField(name);
        return;
      }
    
      handleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
        console.log(this.state)
        axios.post('http://localhost:8080/login/admin', this.state)
          .then(response => {
            console.log(response)
            alert("Sign In Successfully")
            this.setState({
              reset: true
            });
          })
          .catch(error => {
            console.log(error)
            alert("Please Enter UserName/Password")
          })
      }
    
      validateField(name) {
        let isValid = false;
    
        if (name === "adminUserName") isValid = this.validateAdminUserName();
    
        else if (name === "adminPassword") isValid = this.validateAdminPassword();
    
        return isValid;
      }
    
    
    
      validateAdminUserName() {
        let userNameError = "";
        const value = this.state.adminUserName;
        if (value.trim() === "") userNameError = "User Name is required";
    
        this.setState({
          userNameError
        });
        return userNameError === "";
      }
    
      validateAdminPassword() {
        let passwordError = "";
        const value = this.state.adminPassword;
        if (value.trim === "") passwordError = "Password is required";
        // else if (!passwordValidator.test(value))
        //   passwordError =
        //     "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";
    
        this.setState({
          passwordError
        });
        return passwordError === "";
      }
    
    
    
      render() {
    
    
        if(this.state.reset){
          return <Redirect to={'/Login/adminUserName/adminPassword'}/>
        }
    
        return (
          <div>
    <br></br>
          <div className="container">
            <div className="row">
              <div className="card col-md-6 offset-md-3 offset-md-3">
                <h3 className="text-center">Sign IN</h3>
                <div className="card-body"></div>
                <div style={{ textAlign: "center" }}>
                  <form onSubmit={this.handleSubmit} >
                    <table><tr><lable>User Name</lable>
                    <td>
                      <input
                        type="text"
                        placeholder="User Name"
                        name="adminUserName"
                        value={this.state.adminUserName}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        autoComplete="off"
                      />
                      <br />
                      {this.state.userNameError && (
                        <div className="errorMsg">{this.state.userNameError}</div>
                      )}
                      </td>
                      </tr>
    
                      <tr><lable>Password</lable><td>
                      <input
                        type="password"
                        placeholder="Password"
                        name="adminPassword"
                        value={this.state.adminPassword}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        autoComplete="off"
                      />
                      <br />
                      {this.state.passwordError && (
                        <div className="errorMsg">{this.state.passwordError}</div>
                      )}
                      </td>
                      </tr>
    
    
    
                      <button className="btn btn-success">Sign In</button>
                    </table>
                  </form>
                </div>
    
              </div>
            </div>
    
          </div>
          </div>
        );
      }
    }

export default AdminSignInComponent;