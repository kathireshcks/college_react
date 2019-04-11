import React from 'react'

const Button = (props) => {
    console.log(props.style);
    return(
        /*
        <button 
            style= {props.style} 
            onClick= {props.action}>    
            {props.title} 
        </button>)
        */
       <div className="form-group">
  <label className="col-md-4 control-label"></label>
  <div className="col-md-4">
    
    <button  className="btn btn-warning" 
    style= {props.style} 
    onClick= {props.action}> {props.title} <span className="glyphicon glyphicon-send"></span></button>
  </div>
</div>)
}

export default Button;