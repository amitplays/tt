import React, {useState,useEffect} from "react";
import '../Components/Components.css'
import fireDb from "../firebase"
import ReactBootstrap, {
  Card,
  Table,
  Jumbotron,
  Container,
} from "react-bootstrap";

const  AdminPanel = (props) => {
    var [requestObj, setrequestObj] = useState({});
    useEffect(()=>{
        fireDb.child('Contacts').on('value',snapShot =>{
            if(snapShot.val() == null){
                console.log("** Snapshot is null **")
            }else{
                setrequestObj({
                    ...snapShot.val()
                })
            }
        })
    },[]) // similar to componentDidMount
return(<>
        <Jumbotron fluid>
            <Container variant="dark" >
                <h2>Welcome to Admin Panel Amit</h2>
                    <p> We have got the following requests. </p>
            </Container>
        </Jumbotron>
        <Card style={{ margin : '50px'  }} >
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                {
                    Object.keys(requestObj).map(id =>{
                        return <tr key={id}>
                            <td>"#"</td>
                            <td>{requestObj[id].FullName}</td>
                            <td>{requestObj[id].Email}</td>
                            <td>{requestObj[id].Mobile}</td>
                        </tr>
                    })
                }
                </tbody>
            </Table>
        </Card>
    </>)
}
export default AdminPanel