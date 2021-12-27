import { Component } from 'react';
import './App.css';
import {Field, Formik } from 'formik';
// import * as yup from 'yup';

class App extends Component{
       
      valo=(props)=>{
        console.log(props);
      }
      fomy=(props)=>{
        return <form onSubmit={props.handleSubmit} >
                <Field type="email" name="email"> </Field>
                <Field type="password" name="pass"> </Field>
                <button type='submit'> submit </button>
        </form> 
      }
  render () {
    return <div>
       <h1> Formik Session </h1>
       <Formik
          initialValues={{ email:"", 
                          pass:"",
                          }}
          onSubmit={this.valo}
          render={this.fomy}                
       />
    </div>
  }
}
export default App;


