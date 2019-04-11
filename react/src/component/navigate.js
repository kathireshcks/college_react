import React ,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar,Nav,Button,FormControl,Form} from 'react-bootstrap'

class navigate extends Component{
    render(){
        return(
            <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Collage</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/admin">Student Table</Nav.Link>
                <Nav.Link href="/admin/examdetails">Exam Table</Nav.Link>
                <Nav.Link href="/admin/createsubject">Create Subject</Nav.Link>
                <Nav.Link href="/admin/createstudent">Create Student</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            </>
        )
    }
}

export default navigate