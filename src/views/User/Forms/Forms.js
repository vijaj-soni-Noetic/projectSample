import React from 'react';
 import { Formik, Form, Field,ErrorMessage  } from 'formik';
 import * as Yup from 'yup';
 import Style from './Form.css';
 
 const TopicSchema = Yup.object().shape({
                    name: Yup.string()
                        .required('Name is required'),
                    discription: Yup.string()
                        .required('Details is required')
                   
 });

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teams:[],
      course:'',
    };
  }
componentDidMount() {
  fetch('http://localhost:4000/api/tour', {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
})
    .then((response) => {
        return response.json();
    })
    .then(data => {
      let teamsFromApi = data.data.tours.map(team => { return { value: team._id, display: team.name } })
        this.setState({ teams: [{ value: '', display: 'Select Role type' }].concat(teamsFromApi) });
        console.log("data",data.data.tours);
        console.log("teamsfromApi", teamsFromApi);
    }).catch(error => {
        console.log(error);
    });
}
  
  render() {
    return (
      <div>
     <h1>Add User</h1>
     <Formik
       initialValues={{
        name: '',
        discription: ''
       }}
       validationSchema={TopicSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
         fetch('http://localhost:4000/api/topic', {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            discription: values.discription,
            courseId: this.state.course,
          })
      }).then((result) => {
          result.json().then((resp) => {
              console.warn("resp", resp.message);
          //    window.location.href = '/#/app/company/data';
          })

      })
          .catch(err => {
              console.error(err)
          })
        
       }}
     >
      {({ errors, status, touched }) => (
                    <Form>
                        <div className="form-row">
                            <div className="form-group col">
                              <div className="row">
                              <div className="col-2">
                                <label className="TxtLbl">Course</label>
                            </div>
                            <div className="col-3">
                            <select value={this.state.course} className="custom-select mt-3"
                                onChange={(e) => this.setState({ course: e.target.value })}>
                                {this.state.teams.map((team) => <option key={team.value} value={team.value}>{team.display}</option>)}
                            </select>
                               
                            </div>
                            </div>
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col">
                                <div className="row">
                                    <div className="col-2">
                                      <label htmlFor="name" className="TxtLbl">Topic</label>
                                    </div>
                                    <div className="col-5">
                                      <Field name="name" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                      <ErrorMessage name="name" component="div" className="invalid-feedback" />
                                    </div>
                                </div>
                            </div>
                          </div>  
                            <div className="form-row">
                                  <div className="form-group col">
                                    <div className="row">
                                      <div className="col-2">
                                      <label htmlFor="discription" className="TxtLbl">Discription</label>
                                      </div>
                                   
                                     <div className="col-5">
                                     <Field name="discription" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                                      <ErrorMessage name="discription" component="div" className="invalid-feedback" />
                                     </div>
                                    </div> 
                                  </div>
                            </div>
                        
                        <div className="form-group">
                          <div className="row">
                            <div className="col-2">

                            </div>
                            <div className="col-5">
                            <button type="submit" className="btn btn-primary mr-2">Submit</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                            </div>
                          </div>
                        </div>
                    </Form>
                )}
     </Formik>
   </div>
    );
  }
}

export default Forms;
