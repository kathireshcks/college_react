import React,{Component} from 'react'
import {Navbar,Nav,Button,FormControl,Form,Col,InputGroup} from 'react-bootstrap'
import axios from 'axios'
import { Route, Redirect } from 'react-router'
 

/* Import Components */

import Input from './form/input';  
import Buttonn from './form/button';

class Login extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      error:{
        username: '',
        password: '',
        formerror: ''
      },
      username: '',
      password: '',
        

      genderOptions: ['Male', 'Female', 'Others']

    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.validate = this.validate.bind(this)
  }

  formvalid=(value)=>{
    
    let valid=true;
    
     Object.values(value.error).map(val=>{
        val.length > 0 && (valid=false);
      })

      Object.values(value).map(val=>{
        val.length <= 0 && (valid=false);
      })

    return valid;

  }


  handleFormSubmit(e) {
    
    e.preventDefault();
    
    var body = JSON.parse(JSON.stringify(this.state));
    

    if(this.formvalid(this.state))
    {

      delete body.error;
      delete body.genderOptions;

      axios({
        method: 'post',
        url: 'http://localhost:8100/api/login',
        data: body,
        config: { headers: {'Content-Type': "Content-Type" }}
        })
        .then(function (response) {
            console.log(response.data);
            localStorage.setItem('token', response.data.token);
            
            console.log(localStorage.getItem('token'));
            window.location.href="/admin";
        })
        .catch(function (response) {
            console.log(response);
        });
     }else
     {
       console.log("ENter the error");
        this.state.error.formerror="Validation error"
        console.log(this.state);
     }
  }


  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      error:{
        username: '',
        formerror: '',
        password: ''
    },
  
    username: '',
    password: ''

    })
  }

  validate(e){
    e.preventDefault();

    const {name,value}=e.target;

    const {error}=this.state;

    switch(name)
    {
      case "username":
            error.username = value.length>5 ? '' : 'invalid length minimum 5 letter';
      break;
      case "password":
            error.password = value.length>6 ? '' : 'invalid length minimum 6 letter';
      break;
    }
    
    this.setState({
          [name]:value
    })
    
  }


  render() {
    let {error}=this.state;
    return (
      <div className="container py-5">
    <div className="row">
        <div className="col-md-12">
            <h2 className="text-center mb-5"> Login Form</h2>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card border-secondary">
                        <div className="card-header">
                            <h3 className="mb-0 my-2">Sign In</h3>
                        </div>
                            <div className="card-body">
                                <form className="well form-horizontal" onSubmit={this.handleFormSubmit}>
                                  <Input name={"username"} title="Username" type="text" value={this.state.username || ''} placeholder={"Enter Username"} handleChange={this.validate} error={error.username}  /> 
                                  <Input name={"password"} title={'Password'} type="password" value={this.state.password || ''} placeholder={"Enter Password"} handleChange={this.validate} error={error.password}/> 
                            
                                  <Buttonn action={this.handleFormSubmit} title={'Button'}/>
                                  <h6><font color="red">{error.formerror}</font></h6>
                                 </form>
                                 
                            </div>
                          </div>
                   </div>
              </div>
          </div>
      </div>
  </div>
    );
  }
}

export default Login;

