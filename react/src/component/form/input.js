import React from 'react'


const Input = (props) => {
    return (  
  // <div className="form-group">
  //   <label htmlFor={props.name} className="form-label">{props.title}</label>
  //   <input
  //     className="form-input"
  //     id={props.name}
  //     name={props.name}
  //     type={props.type}
  //     value={props.value}
  //     onChange={props.handleChange}
  //     placeholder={props.placeholder} 
  //   />
  //   <h6>{props.error}</h6>
  // </div>



/*<div class="form-group">
<label class="col-md-4 control-label" htmlFor={props.name}>{props.title}</label>  
<div class="col-md-4 inputGroupContainer">
<div class="input-group">
<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
<input  
className="form-input"
id={props.name}
name={props.name}
type={props.type}
value={props.value}
onChange={props.handleChange}
placeholder={props.placeholder} />
  </div>
  <h6>{props.error}</h6>
</div>
</div>
*/

<div className="form-group">
    <label htmlFor="inputName">{props.title}</label>
    <input className="form-control" 
    id={props.name}
    name={props.name}
    type={props.type}
    value={props.value}
    onChange={props.handleChange}
    placeholder={props.placeholder} />
    {/* <h6><font color={props.color}>{props.error}</font></h6> */}
    {props.error && (
      <span className="alert alert-danger alert-dismissible fade show">{props.error}</span>
    )}
</div>
)
}

export default Input
