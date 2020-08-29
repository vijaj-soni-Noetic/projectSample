import React from 'react';
 import { Formik, Form, Field,ErrorMessage  } from 'formik';
 import * as Yup from 'yup';
 import Style from './Course.css';
 import axios from 'axios';
import { Row } from 'reactstrap';
 
 const CourseSchema = Yup.object().shape({
                    
                    name: Yup.string()
                        .required('Course Name is required'),
                    duration: Yup.string()
                        .required('Duration is required'),
                    discription: Yup.string()
                        .required('Details is required')
 });

class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     
    };
  }

  render() {
    return (
      <div style={{backgroundColor:"white", width:"70%", marginLeft:"15%"}}>
         <div style={{backgroundColor:"pink", fontSize:'24px'}} >
          <p>प्रारंभिक विद्यालय शिक्षक नियोजन 2019-20 के वर्ग VI-VIII के शिक्षकों के नियोजन प्रक्रिया हेतु औपबंधिक मेधा सूची पर आपत्ति दर्ज करने हेतु प्रपत्र ऑनलाइन भरें</p>
          </div>
      <div style={{backgroundColor:"white", width:"70%", marginLeft:"15%", padding:'2%'}}>
       
     <Formik
       initialValues={{
        name: '',
        duration: '',
        discription: '',
       }}
       validationSchema={CourseSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
         fetch('http://localhost:4000/api/tour', {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            discription: values.discription,
            duration: parseInt(values.duration),
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
                                    <div className="col-6">
                                      <label htmlFor="name" className="TxtLbl">जिला का नाम * :</label>
                                    </div>
                                    <div className="col-5">
                                      <Field name="name" type="dropbox" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                      <ErrorMessage name="name" component="div" className="invalid-feedback" />
                                    </div>
                                </div>
                            </div>
                          </div>  
                            <div className="form-row">
                                  <div className="form-group col">
                                    <div className="row">
                                      <div className="col-6">
                                      <label htmlFor="duration" className="TxtLbl">नियोजन इकाई (प्रखण्ड) * :</label>
                                      </div>
                                   
                                     <div className="col-5">
                                     <Field name="duration" type="number" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                                      <ErrorMessage name="duration" component="div" className="invalid-feedback" />
                                     </div>
                                    </div> 
                                  </div>
                            </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-6">
                              <label htmlFor="discription">क्या नियोजन इकाई नगर निकाय है? * :</label>
                            </div>
                              <div className="col-5">
                                <Field name="discription" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="discription" component="div" className="invalid-feedback" />
                              </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-6">
                              <label htmlFor="discription">औपबंधिक मेधा सूचि में क्रम संख्या (Merit Serial No.) :</label>
                            </div>
                              <div className="col-5">
                                <Field name="discription" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="discription" component="div" className="invalid-feedback" />
                              </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-6">
                              <label htmlFor="discription">अभ्यर्थी का नाम* :</label>
                            </div>
                              <div className="col-5">
                                <Field name="discription" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="discription" component="div" className="invalid-feedback" />
                              </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-6">
                              <label htmlFor="discription">पिता का नाम* :</label>
                            </div>
                              <div className="col-5">
                                <Field name="discription" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="discription" component="div" className="invalid-feedback" />
                              </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-6">
                              <label htmlFor="discription">आधार के अनुसार अभ्यर्थी का नाम * :</label>
                            </div>
                              <div className="col-5">
                                <Field name="discription" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="discription" component="div" className="invalid-feedback" />
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
   </div>
    );
  }
}

export default Forms;
