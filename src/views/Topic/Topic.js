import React, { Component, lazy, Suspense } from 'react';
import {Link} from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input,
   InputGroup, InputGroupAddon, InputGroupText, Row, Label } from 'reactstrap';




class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts:[]
    };
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  componentDidMount() {
    // development server
    const url = "http://localhost:4000/api/topic";
    fetch(url, {
        method: "GET",

    }).then(response => response.json()).then(posts => {
       // console.log("posts", posts);
        this.setState({ posts: posts.data.tours })
    })


}
showModal = name => e => {
  const url = `http://localhost:4000/api/topic/${name}`;
  fetch(url, {
      method: "DELETE",

  }).then(response => response.json()).then(posts => {
      console.log("posts", posts);
  })

}
  render() {
      const data = this.state.posts;
      console.log("data", data);
    return (
      <div className="animated fadeIn">

        <Row>
          <Col>
            <Card style={{width:'91%', marginLeft:'6%'}}>
              
              <CardBody >
              <Form style={{width:'40%', marginLeft:'30%', backgroundColor:'blue', borderRadius:'2%'}}>
                    <h1 style={{marginLeft:'2%', color:'white', textAlign:'center', padding:'10px'}}>User Login</h1>
                    <h5  style={{marginLeft:'2%', color:'white'}}>Reference No.</h5>
                    <InputGroup className="mb-3" style={{padding:'2%'}}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Username" autoComplete="username" />
                    </InputGroup>
                    <h5  style={{marginLeft:'2%', color:'white'}}>Mobile No.</h5>
                    <InputGroup className="mb-3" style={{padding:'2%'}}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="icon-user"></i></InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Number" />
                    </InputGroup>
                    <InputGroup className="mb-3" style={{padding:'2%', height:'25%'}}>
                    <InputGroupAddon addonType="prepend">                       
                      </InputGroupAddon>                              
                    <Card style={{width:'100%'}}>                      
                      <CardBody >
                       <label style={{color:'#4CAF50', marginLeft:'40%',fontSize:'24px' }}>ABCD</label>
                        </CardBody>
                        </Card>     
                    </InputGroup>
                    <h5  style={{marginLeft:'2%', color:'white'}}>Enter Code Shown:</h5>
                    <InputGroup className="mb-4" style={{padding:'2%'}}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text"  />
                    </InputGroup>
                    <Button color="success" block>Login</Button>
                  </Form>
                
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Topic;
