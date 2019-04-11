import React,{Component} from 'react';
import axios from 'axios'
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import ExamTable from './examtable'
import './table.css'


export class ExamList extends Component{

    constructor(props){
        super(props)

        this.state={
            list:[]
        }

    }

    componentDidMount(){
        
        axios.get("http://localhost:8100/api/get/examdetails?ordername=rank&order=1",{ headers: {'Content-Type': "Content-Type" ,"token":localStorage.getItem('token')}}).then((data)=>{
            
            this.setState({list:data.data})
        }).catch(e=>{
            console.log(e);
        })
    }

    render()
    {
        var header=<React.Fragment><tr><th>Rollnumber</th><th>Sub1</th><th>Sub2</th><th>Sub3</th><th>Sub4</th><th>Sub5</th><th>Total</th><th>Rank</th><th>Semester</th><th>Percentage</th></tr></React.Fragment>
        var renderdata=<div><table align= "center"><tbody>{header}<ExamTable exam={this.state.list}  /></tbody></table></div>

        return(
            <>
                <br></br>
                <a href="http://localhost:8100/api/download/examdetails">Download ExamList</a>
                <br></br>
               { renderdata }
            </>
        )
    }
}

export default ExamList

