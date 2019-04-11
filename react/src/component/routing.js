import React,{Component} from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Routetest from './route'
import Home from './home'
import User from './users'
import Error from './error'
import Register from './register'
import  StudentList  from './studentlist'
import  Examdetails  from './examdetails'
import Createsubject from './createsubject'

class routing extends Component {
    constructor(props){
        super(props)
    }
    render() {
      return (
        <BrowserRouter>
        <div>
            <Switch>
                <Route path={`${this.props.match.url}/`} component={StudentList} exact/>
                <Route path={`${this.props.match.url}/createstudent`} component={Register} exact/>
                <Route path={`${this.props.match.url}/examdetails`} component={Examdetails} exact/>
                <Route path={`${this.props.match.url}/createsubject`} component={Createsubject} exact/>
            </Switch>
        </div>
        </BrowserRouter>
      );
    }
  } 

  /*
function routing({match}){
    return(
        <div>
            <Route path={`${match.url}/`} component={User} exact/>
            <Route path={`${match.url}/test`} component={Routetest}/>
        </div>
    )
    
}
*/

export default routing