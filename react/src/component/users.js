import React,{Component} from 'react'
import axios from 'axios'

import Input from './form/input';  
import Buttonn from './form/button';

class users extends Component{
    constructor(props){

        super(props)

        this.state={
            id:props.match.params.id,
            error:{
                rollnumber: '',
                firstname: '',
                lastname:'',
                age: '',
                gender: '',
                department: '',
                formerror: '',
                grade:''
            },
            rollnumber: '',
            firstname: '',
            lastname:'',
            age: '',
            gender: '',
            department: '',
            grade:''
           
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
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
          case "grade":
                error.grade = value.length>0 ? '' : 'invalid length minimum 1 letter';
          break;
        }
        
        this.setState({
              [name]:value
        })
        console.log(this.state);
      }
    

    handleFormSubmit(e) {
    
        e.preventDefault();
        
        var body = JSON.parse(JSON.stringify(this.state));
        
    
        if(this.formvalid(this.state))
        {
    
          delete body.error;
          delete body.id;
        
          console.log(localStorage.getItem('token'));
          axios.defaults.headers.common['token'] = localStorage.getItem('token');
          axios.defaults.headers.post['Content-Type'] = 'Content-Type';
            axios({
                method: 'put',
                url: `http://localhost:8100/api/update/student/${this.state.id}`,
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
            this.state.error.formerror="Validation error"
         }
      }
    

    componentDidMount(){
        
        axios.get(`http://localhost:8100/api/get/userprofile/${this.state.id}`,{ headers: {'Content-Type': "Content-Type" ,"token":localStorage.getItem('token')}}).then((data)=>{
            
            this.setState({rollnumber:data.data.rollnumber})
            this.setState({firstname:data.data.firstname})
            this.setState({lastname:data.data.lastname})
            this.setState({age:data.data.age})
            this.setState({gender:data.data.gender})
            this.setState({department:data.data.department})
            this.setState({grade:data.data.grade})

        }).catch(e=>{
            console.log(e);
        })
    }

    render(){
        let {error}=this.state;

        return (
            <div className="container py-5">
        <div className="row">
        <div className="col-md-12">
            <h2 className="text-center mb-5"> Profile</h2>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card border-secondary">
                        <div className="card-header">
                            <h3 className="mb-0 my-2">Edit Profile</h3>
                        </div>
                            <div className="card-body">
                                <form className="well form-horizontal" onSubmit={this.handleFormSubmit}>
                                  <Input name={"rollnumber"} title="Rollnumber" type="text" value={this.state.rollnumber || ''} placeholder={"Enter Rollnumber"} handleChange={this.validate} error={error.rollnumber}  /> 
                                  <Input name={"firstname"} title={'Firstname'} type="text" value={this.state.firstname || ''} placeholder={"Enter Firstname"} handleChange={this.validate} error={error.firstname}/> 
                                  <Input name={"lastname"} title="Lastname" type="text" value={this.state.lastname || ''} placeholder={"Enter Lastname"} handleChange={this.validate} error={error.lastname}  /> 
                                  <Input name={"age"} title="Age" type="number" value={this.state.age || ''} placeholder={"Enter Age"} handleChange={this.validate} error={error.age}  /> 
                                  <Input name={"gender"} title="Gender" type="text" value={this.state.gender || ''} placeholder={"Enter Gender"} handleChange={this.validate} error={error.gender}  /> 
                                  <Input name={"department"} title="Department" type="text" value={this.state.department || ''} placeholder={"Enter Department"} handleChange={this.validate} error={error.department}  /> 
                                  <Input name={"grade"} title="Grade" type="text" value={this.state.grade || ''} placeholder={"Enter Grade"} handleChange={this.validate} error={error.grade}  /> 
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
        )
    }
}

export default users