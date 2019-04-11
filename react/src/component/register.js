import React,{Component} from 'react'
import {Navbar,Nav,Button,FormControl,Form,Col,InputGroup} from 'react-bootstrap'
import axios from 'axios'
import { Route, Redirect } from 'react-router'
 

/* Import Components */

import Input from './form/input';  
import Buttonn from './form/button';

class FormContainer extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      error:{
        rollnumber: '',
        firstname: '',
        lastname:'',
        age: '',
        gender: '',
        department: '',
        password: '',
        formerror: '',
        grade:''
      },
      rollnumber: '',
      firstname: '',
      lastname:'',
      age: '',
      gender: '',
      department: '',
      password: '',
      grade:'',
        

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

      axios.defaults.headers.common['token'] = localStorage.getItem('token');
      axios.defaults.headers.post['Content-Type'] = 'Content-Type';

      axios({
        method: 'post',
        url: 'http://localhost:8100/api/register',
        data: body,
        })
        .then(function (response) {
            
            console.log(response.data);
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
        rollnumber: '',
        firstname: '',
        lastname:'',
        age: '',
        gender: '',
        department: '',
        formerror: '',
        password: '',
        grade:''
    },
  
    rollnumber: '',
    firstname: '',
    lastname:'',
    age: '',
    gender: '',
    department: '',
    password: '',
    grade:''

    })
  }

  validate(e){
    e.preventDefault();

    const {name,value}=e.target;

    const {error}=this.state;

    switch(name)
    {
      case "rollnumber":
            error.rollnumber = value.length>5 ? '' : 'invalid length minimum 5 letter';
      break;
      case "firstname":
            error.firstname = value.length>5 ? '' : 'invalid length minimum 5 letter';
      break;
      case "lastname":
            error.lastname = value.length>5 ? '' : 'invalid length minimum 5 letter';
      break;
      case "age":
            error.age = value.length>1 ? '' : 'invalid length minimum 1 letter';
      break;
      case "gender":
            error.gender = value.length>3 ? '' : 'invalid length minimum 3 letter';
      break;
      case "department":
            error.department = value.length>3 ? '' : 'invalid length minimum 3 letter';
      break;
      case "password":
            error.password = value.length>6 ? '' : 'invalid length minimum 6 letter';
      break;
      case "grade":
            error.grade = value.length>0 ? '' : 'invalid length minimum 1 letter';
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
            <h2 className="text-center mb-5"> Register Form</h2>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card border-secondary">
                        <div className="card-header">
                            <h3 className="mb-0 my-2">Sign Up</h3>
                        </div>
                            <div className="card-body">
                                <form className="well form-horizontal" onSubmit={this.handleFormSubmit}>
                                  <Input name={"rollnumber"} title="Rollnumber" type="text" value={this.state.rollnumber || ''} placeholder={"Enter Rollnumber"} handleChange={this.validate} error={error.rollnumber}  /> 
                                  <Input name={"password"} title={'Password'} type="password" value={this.state.password || ''} placeholder={"Enter Password"} handleChange={this.validate} error={error.password}/> 
                                  <Input name={"firstname"} title={'Firstname'} type="text" value={this.state.firstname || ''} placeholder={"Enter Firstname"} handleChange={this.validate} error={error.firstname}/> 
                                  <Input name={"lastname"} title="Lastname" type="text" value={this.state.lastname || ''} placeholder={"Enter Lastname"} handleChange={this.validate} error={error.lastname}  /> 
                                  <Input name={"age"} title="Age" type="number" value={this.state.age || ''} placeholder={"Enter Age"} handleChange={this.validate} error={error.age}  /> 
                                  <Input name={"gender"} title="Gender" type="text" value={this.state.gender || ''} placeholder={"Enter Gender"} handleChange={this.validate} error={error.gender}  /> 
                                  <Input name={"department"} title="Department" type="text" value={this.state.department || ''} placeholder={"Enter Department"} handleChange={this.validate} error={error.department}  /> 
                                  <Input name={"grade"} title="Grade" type="number" value={this.state.grade || ''} placeholder={"Enter Grade"} handleChange={this.validate} error={error.grade}  /> 
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

export default FormContainer;

