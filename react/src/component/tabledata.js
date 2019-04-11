import React from 'react'

function Tabledata(props){
    console.log("Users");
    console.log(props);
    var user=props.user;
    return (
        <>
            {
            user.map(user=>(
                    <React.Fragment key={user.id}>
                    <tr>
                    <td>{user.rollnumber}</td>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td> {user.age}</td>
                    <td> {user.gender}</td>
                    <td> {user.department}</td>
                    <td> {user.grade}</td>
                    <td> <button type="button" class="btn btn-success" onClick={props.edit} id={user._id}>Edit</button></td>
                    <td> <button type="button" class="btn btn-danger" onClick={props.delete} id={user._id}>Delete</button></td>
                    </tr>
                    </React.Fragment>
                ))
            }
        </>
    )
}

export default Tabledata