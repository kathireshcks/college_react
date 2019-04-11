import React,{Component} from 'react'
import {Navbar,Nav,Button,FormControl,Form,Col,InputGroup} from 'react-bootstrap'
import axios from 'axios'
import { Route, Redirect } from 'react-router'
 

/* Import Components */

import Input from './form/input';  
import Buttonn from './form/button';

class Createsubject extends Component {  
  constructor(props) {
    super(props);

    this.state = {
        error:{
            rollnumber: '',
            subject1: '',
            subject1mark: '',
            subject2: '',
            subject2mark: '',
            subject3: '',
            subject3mark: '',
            subject4: '',
            subject4mark: '',
            subject5: '',
            subject5mark: '',
            rank: '',
            semester: '',
        },
      
        rollnumber: '',
        subject1: '',
        subject1mark: '',
        subject2: '',
        subject2mark: '',
        subject3: '',
        subject3mark: '',
        subject4: '',
        subject4mark: '',
        subject5: '',
        subject5mark: '',
        rank: '',
        semester: '',
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
      axios.defaults.headers.common['token'] = localStorage.getItem('token');
      axios.defaults.headers.post['Content-Type'] = 'Content-Type';
        axios({
        method: 'post',
        url: 'http://localhost:8100/api/createsubject',
        data: body,
        })
        .then(function (response) {
            console.log("response.data");
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
        subject1: '',
        subject1mark: '',
        subject2: '',
        subject2mark: '',
        subject3: '',
        subject3mark: '',
        subject4: '',
        subject4mark: '',
        subject5: '',
        subject5mark: '',
        rank: '',
        semester: '',
    },
  
    rollnumber: '',
    subject1: '',
    subject1mark: '',
    subject2: '',
    subject2mark: '',
    subject3: '',
    subject3mark: '',
    subject4: '',
    subject4mark: '',
    subject5: '',
    subject5mark: '',
    rank: '',
    semester: '',

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
      case "subject1":
            error.subject1 = value.length>5 ? '' : 'invalid length minimum 5 letter';
      break;
      case "subject1mark":
            error.subject1mark = value.length>1 ? '' : 'invalid length minimum 1 letter';
      break;
      case "subject2":
            error.subject2 = value.length>5 ? '' : 'invalid length minimum 5 letter';
      break;
      case "subject2mark":
            error.subject2mark = value.length>1 ? '' : 'invalid length minimum 1 letter';
      break;
      case "subject3":
            error.subject3 = value.length>5 ? '' : 'invalid length minimum 5 letter';
      break;
      case "subject3mark":
            error.subject3mark = value.length>1 ? '' : 'invalid length minimum 1 letter';
      break;
      case "subject4":
            error.subject4 = value.length>5 ? '' : 'invalid length minimum 5 letter';
      break;
      case "subject4mark":
            error.subject4mark = value.length>1 ? '' : 'invalid length minimum 1 letter';
      break;
      case "subject5":
            error.subject5 = value.length>5 ? '' : 'invalid length minimum 5 letter';
      break;
      case "subject5mark":
            error.subject5mark = value.length>1 ? '' : 'invalid length minimum 1 letter';
      break;
      case "rank":
            error.rank = value.length>1 ? '' : 'invalid length minimum 1 letter';
      break;
      case "semester":
            error.semester = value.length>0 ? '' : 'invalid length minimum 1 letter';
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
            <h2 className="text-center mb-5"> Create Subject</h2>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card border-secondary">
                        <div className="card-header">
                            <h3 className="mb-0 my-2">Create Subject form</h3>
                        </div>
                            <div className="card-body">
                                <form className="well form-horizontal" onSubmit={this.handleFormSubmit}>
                                  <Input name={"rollnumber"} title="Rollnumber" type="text" value={this.state.rollnumber || ''} placeholder={"Enter Rollnumber"} handleChange={this.validate} error={error.rollnumber}  /> 

                                  <Input name={"subject1"} title={'Subject1'} type="text" value={this.state.subject1 || ''} placeholder={"Enter Subject1"} handleChange={this.validate} error={error.subject1}/> 
                                  <Input name={"subject1mark"} title={'Subject1 Mark'} type="text" value={this.state.subject1mark || ''} placeholder={"Enter Subject1mark"} handleChange={this.validate} error={error.subject1mark}/> 
                                  <Input name={"subject2"} title={"Subject2"} type="text" value={this.state.subject2 || ''} placeholder={"Enter Subject2"} handleChange={this.validate} error={error.subject2}  /> 
                                  <Input name={"subject2mark"} title={'Subject2 Mark'} type="text" value={this.state.subject2mark || ''} placeholder={"Enter Subject2mark"} handleChange={this.validate} error={error.subject2mark}/> 

                                  <Input name={"subject3"} title={'Subject3'} type="text" value={this.state.subject3 || ''} placeholder={"Enter Subject3"} handleChange={this.validate} error={error.subject3}/> 
                                  <Input name={"subject3mark"} title={'Subject3 Mark'} type="text" value={this.state.subject3mark || ''} placeholder={"Enter Subject3mark"} handleChange={this.validate} error={error.subject3mark}/> 
                                  <Input name={"subject4"} title={"Subject4"} type="text" value={this.state.subject4 || ''} placeholder={"Enter Subject4"} handleChange={this.validate} error={error.subject4}  /> 
                                  <Input name={"subject4mark"} title={'Subject4 Mark'} type="text" value={this.state.subject4mark || ''} placeholder={"Enter Subject4mark"} handleChange={this.validate} error={error.subject4mark}/> 

                                  <Input name={"subject5"} title={'Subject5'} type="text" value={this.state.subject5 || ''} placeholder={"Enter Subject5"} handleChange={this.validate} error={error.subject5}/> 
                                  <Input name={"subject5mark"} title={'Subject5 Mark'} type="text" value={this.state.subject5mark || ''} placeholder={"Enter Subject5mark"} handleChange={this.validate} error={error.subject5mark}/> 

                                  <Input name={"rank"} title={"Rank"} type="text" value={this.state.rank || ''} placeholder={"Enter Rank"} handleChange={this.validate} error={error.rank}  /> 
                                  <Input name={"semester"} title={'Semester'} type="text" value={this.state.semester || ''} placeholder={"Enter semester"} handleChange={this.validate} error={error.semester}/> 

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

export default Createsubject;

