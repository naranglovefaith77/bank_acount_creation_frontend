import React, { Component } from "react";
import BankAccountService from "../Services/BankAccountService";


class BankAccountComponent extends Component {

    constructor(props) {
        super(props);


        this.state = {

            accountType: "",
            accountHolderName: "",
            bankName: "",
            branchName: "",
            citizenPhoneNumber: ""

        }
    }

    
    changeAccountHolderNameHandler = (e) => {
        this.setState({
            accountHolderName: e.target.value
        })
    }
    changeCitizenPhoneNumberHandler = (e) => {
        this.setState({
            citizenPhoneNumber: e.target.value
        })
    }

    changeBankNameHandler = (e) => {
        this.setState({
            bankName: e.target.value
        })
    }

    changeBranchNameHandler = (e) => {
        this.setState({
            branchName: e.target.value
        })
    }

    changeAccountTypeHandler = (e) => {
        this.setState({
            accountType: e.target.value
        })
    }

    
   stopSubmission = (e) => {
        e.preventDefault();
        let account = {
            
            accountType: this.state.accountType,
            accountHolderName: this.state.accountHolderName,
            bankName: this.state.bankName,
            branchName: this.state.branchName,
            citizenPhoneNumber: this.state.citizenPhoneNumber
        }
        BankAccountService.createNewAccount(account)
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error))
    }




    render() {
        return (
            <div class="p-3 mb-2 bg-dark text-white">
                <div className="container mt-2">
                    
                
                    <marquee><h4>Please Fill the Details for creating bank account</h4></marquee>

                    <form method="POST" onSubmit={this.stopSubmission}>

                        

                        <div class="p-3 mb-2 bg-light text-dark">
                        
                            <label>Enter your name</label>
                            <input
                                type="text"
                                value={this.state.accountHolderName}
                                name="accountHolderName"
                                className="form-control"
                                placeholder="Please enter your first name and last name"
                                onChange={this.changeAccountHolderNameHandler}
                            />
                        </div>

                        

                        <div class="p-3 mb-2 bg-light text-dark">
                            <label>Enter the type of account you want</label>
                            <input
                                type="text"
                                value={this.state.accountType}
                                name="accountType"
                                className="form-control"
                                placeholder="Saving, Current or Salary"
                                onChange={this.changeAccountTypeHandler}
                                required=""
                            />
                        </div>


                        <div class="p-3 mb-2 bg-light text-dark">
                            <label>Bank Name</label>
                            <input
                                type="text"
                                value={this.state.bankName}
                                name="bankName"
                                className="form-control"
                                placeholder="Please enter the name of the Bank"
                                onChange={this.changeBankNameHandler}
                            />
                        </div>

                        <div class="p-3 mb-2 bg-light text-dark">
                            <label>Branch Name</label>
                            <input
                                type="text"
                                value={this.state.branchName}
                                name="branchName"
                                className="form-control"
                                placeholder="Please enter the name of the Branch"
                                onChange={this.changeBranchNameHandler}
                            />
                        </div>

                        <div class="p-3 mb-2 bg-light text-dark">
                            <label>Mobile</label>
                            <input
                                type="number"
                                value={this.state.citizenPhoneNumber}
                                name="citizenPhoneNumber"
                                className="form-control"
                                placeholder="9876543210"
                                onChange={this.changeCitizenPhoneNumberHandler}
                            />
                        </div>
                        
                        <button class="btn btn-danger mt-2">Submit your details</button>
                    </form>
                </div>
                

            </div>
        )
    }
}



export default BankAccountComponent

