import React, { Component, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody, 
  Col,
  Progress,
  Row,
  Table,
  NavLink
} from 'reactstrap';

const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts:[]
    };
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  componentDidMount() {
    // development server
    const url = "http://localhost:4000/api/tour";
    fetch(url, {
        method: "GET",

    }).then(response => response.json()).then(posts => {
       // console.log("posts", posts);
        this.setState({ posts: posts.data.tours })
    })


}
showModal = name => e => {
  const url = `http://localhost:4000/api/tour/${name}`;
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
          <ui>
            <li  style={{marginLeft:'8%', marginTop:'2%'}}>
            प्रारंभिक विद्यालय शिक्षक नियोजन 2019-20 के वर्ग VI-VIII के शिक्षकों के नियोजन प्रक्रिया हेतु औपबंधिक मेधा सूची पर आपत्ति दर्ज करने हेतु
            <Link to='/createCourse'>[ यहाँ क्लिक करें |  ].</Link> 
            </li>
            <li style={{marginLeft:'8%', marginTop:'2%'}}>
            प्रारंभिक विद्यालय शिक्षक नियोजन 2019-20 के वर्ग VI-VIII के शिक्षकों के नियोजन प्रक्रिया हेतु औपबंधिक मेधा सूची पर आपत्ति सुधार करने हेतु
            <Link to='/topic'>[ यहाँ क्लिक करें |  ].</Link> 
            </li>
          </ui>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
