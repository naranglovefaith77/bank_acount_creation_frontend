import React, { Component } from 'react';
import CitizenServices from '../Services/CitizenServices';
// import niketa from './images/niketa.jpg';


class CitizenComponent extends Component {
    constructor(props) {
        super(props)
        
        
        this.state = {
            //citizenId: '',
            citizenName: '',
            citizenAge: '',
            citizenAddress: '',
            citizenEmail: '',
            citizenPhoneNumber: '',
            citizenFatherName: '',
            citizenMotherName: ''

        }

       /*/ this.changeCitizenIdHandler = this.changeCitizenIdHandler.bind(this);
        this.changeCitizenNameHandler = this.changeCitizenNameHandler.bind(this);
        this.changeCitizenAgeHandler = this.changeCitizenAgeHandler.bind(this);
        this.changeCitizenAddressHandler = this.changeCitizenAddressHandler.bind(this);
        this.changeCitizenEmailHandler = this.changeCitizenEmailHandler.bind(this);
        this.changeCitizenPhoneNumberHandler = this.changeCitizenPhoneNumberHandler.bind(this);
        this.changeCitizenFatherNameHandler = this.changeCitizenFatherNameHandler.bind(this);
        this.changeCitizenMotherNameHandler = this.changeCitizenMotherNameHandler.bind(this);
        this.saveCitizen = this.saveCitizen.bind(this);
    /*/
    }
    submitHandler = (event) => {
        event.preventDefault();

         /*/ let citizen = { citizenId: this.state.citizenId,
               citizenName: this.state.citizenName, 
               citizenAge: this.state.citizenAge,
               citizenAddress: this.state.citizenAddress,
               citizenEmail: this.state.citizenEmail,
               citizenPhoneNumber: this.state.citizenPhoneNumber,
               citizenFatherName: this.state.citizenFatherName,
               citizenMotherName: this.state.citizenMotherName
              };
           /*/
           
           
          // console.log('citizen =>' + JSON.stringify(citizen));   
         
           CitizenServices.generateCitizenId(this.state).then(response =>{
            console.log(response)
        })
          }
        

              


    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    /*/
    changeCitizenNameHandler= (event) => {
        this.setState({citizenName: event.target.value});
    }
    changeCitizenAgeHandler= (event) => {
        this.setState({citizenAge: event.target.value});
    }
    changeCitizenAddressHandler= (event) => {
        this.setState({citizenAddress: event.target.value});
    }
    changeCitizenEmailHandler= (event) => {
        this.setState({citizenEmail: event.target.value});
    }
    changeCitizenPhoneNumberHandler= (event) => {
        this.setState({citizenPhoneNumber: event.target.value});
    }
    changeCitizenFatherNameHandler= (event) => {
        this.setState({citizenFatherName: event.target.value});
    }
    changeCitizenMotherNameHandler= (event) => {
        this.setState({citizenMotherName: event.target.value});
    }
    /*/
    cancel(){
        this.props.history.push('/citizens');
    }

    
    

    render() {
        
            
        return (
            <div>

               {/* <div style={{background: `url(${niketa.jpg})`,backgroundRepeat:"no-repeat",backgroundSize:"contain"}}> */}

                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                        
                       
                        
                     <h3 className = "text-center" style={{backgroundColor: '#FFF200' }}><b>Citizen Registration Form</b></h3>
                    
                       
                    

                        <div className = "card-body">
                          
                            <form onSubmit = {this.submitHandler}>

                            <form action="" method="post" className="was-validated">
                                 {/* <div className = "form-group"> */}
                                 <div class="form-inline">
                                    <label><b>Citizen Name</b>.</label>
                                    
                                    <input placeholder="Citizen Name" name="citizenName" className="form-control"   required=" "
                                      value={this.state.citizenName} onChange={this.onChange}/>  
                                      <div className="valid-feedback">Looks Good!</div> 
                                      <div className="invalid-feedback">Please fill your name !</div>
                                 </div>
                                 
                               </form>

                                 <form action="" class="was-validated">
                                 <div className = "form-group">
                                    <label><b>Citizen Age</b>.</label>
                                    <input placeholder="Citizen Age" name="citizenAge" className="form-control" required=" "
                                      value={this.state.citizenAge} onChange={this.onChange}/> 
                                      <div className="valid-feedback">Valid Age Filled</div> 
                                      <div className="invalid-feedback">Please fill your age !</div>  
                                 </div>
                                 </form>

                                 <form action="" class="was-validated">
                                 <div className = "form-group">
                                    <label><b>Citizen Address</b>.</label>
                                    <input placeholder="Citizen Address" name="citizenAddress" className="form-control" required=" "
                                      value={this.state.citizenAddress} onChange={this.onChange}/> 
                                      <div className="valid-feedback">Address Filled</div> 
                                      <div className="invalid-feedback">Please fill your address !</div>  
                                 </div>
                                </form>

                                <form action="" class="was-validated">
                                 <div className = "form-group">
                                    <label><b>Citizen Email</b>.</label>
                                    <input placeholder="abc@yz.com" name="citizenEmail" className="form-control" required=" "
                                      value={this.state.citizenEmail} onChange={this.onChange}/>   
                                      <div className="valid-feedback">Valid Email Address Filled</div> 
                                      <div className="invalid-feedback">Please fill your valid email address !</div>
                                 </div>
                                 </form>

                                 <form action="" class="was-validated">
                                 <div className = "form-group">
                                    <label><b>Citizen Phone Number</b></label>
                                    <input placeholder="Citizen Phone Number" name="citizenPhoneNumber" className="form-control" required=" "
                                      value={this.state.citizenPhoneNumber} onChange={this.onChange}/> 
                                      <div className="valid-feedback">Valid Phone Number Filled</div> 
                                      <div className="invalid-feedback">Please fill your valid phone number !</div>  
                                 </div>
                                 </form>


                                 <form action="" class="was-validated">
                                 <div className = "form-group">
                                    <label><b>Citizen Father Name</b>.</label>
                                    <input placeholder="Citizen Father Name" name="citizenFatherName" className="form-control" required=" "
                                      value={this.state.citizenFatherName} onChange={this.onChange}/>   
                                      <div className="valid-feedback">Father's Name Filled</div> 
                                      <div className="invalid-feedback">Please fill your father's name !</div>
                                 </div>
                                 </form>

                                 <form action="" class="was-validated">
                                 <div className = "form-group">
                                    <label><b>Citizen Mother Name</b>.</label>
                                    <input placeholder="Citizen Mother Name" name="citizenMotherName" className="form-control" required=" "
                                      value={this.state.citizenMotherName} onChange={this.onChange}/>   
                                      <div className="valid-feedback">Mother's Name Filled</div> 
                                      <div className="invalid-feedback">Please fill your mothers's name !</div>
                                      
                                 </div>
                                 </form>
                                  
                                 <button  className="btn btn-success" ><b>Save</b></button>
                                 
                                 <button className="btn btn-danger"  style={{marginLeft: "15px"}}>Cancel</button>
                                
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            // </div>
           
        );
    };
}

export default CitizenComponent