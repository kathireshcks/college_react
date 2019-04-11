import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import Tabledata from './tabledata'
import './table.css'

export class StudentList extends Component{

    constructor(props){
        super(props)

        this.state={
            list:[]
        }

        this.edituser = this.edituser.bind(this)
        this.deleteuser = this.deleteuser.bind(this)
    }

    
    componentDidMount(){
        
        axios.get("http://localhost:8100/api/get/students?ordername=grade&order=1",{ headers: {'Content-Type': "Content-Type" ,"token":localStorage.getItem('token')}}).then((data)=>{
            
            this.setState({list:data.data})
        }).catch(e=>{
            console.log(e);
        })
    }


    edituser(e){
            console.log(e.target.id);
            window.location.href=`/user/${e.target.id}`;
    }

    deleteuser(e){  
        console.log(e.target.id);

            axios.delete(`http://localhost:8100/api/delete/student/${e.target.id}`,{ headers: {'Content-Type': "Content-Type" ,"token":localStorage.getItem('token')}}).then((data)=>{
                console.log(data.response);
                this.componentDidMount();
            }).catch(e=>{
                console.log(e);
            })
    }
    
    render()
    {
        var header=<React.Fragment><tr><th>Rollnumber</th><th>Firstname</th><th>Lastname</th><th>Age</th><th>Gender</th><th>Department</th><th>Grade</th><th>Edit</th><th>Delete</th></tr></React.Fragment>
        var renderdata=<div><table align= "center"><tbody>{header}<Tabledata user={this.state.list} edit={this.edituser} delete={this.deleteuser} /></tbody></table></div>

        return(
            <>
            <br></br>
            <a href="http://localhost:8100/api/download/studentlist">Download StudentList</a>
            <br></br>
               { renderdata }
            </>
        )
    }

}

export default StudentList
