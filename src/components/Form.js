import React from "react"
// import emailjs from 'emailjs-com'
import "./Form.css"
import {Formik, Form, Field, ErrorMessage} from "formik"

const DataForm = () => (
  <div className="main-container">
    <h1>¿Como te podemos ayudar?</h1>
    <Formik
      initialValues={{name: "", email: "", acceptedTerms: false}}
      onSubmit={(values, {setSubmitting}) => {
        // post data to server
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
      }}
    >
      {({isSubmitting, dirty, handleReset}) => (
        <Form className="container">
          <div className="inputs">
            <label>
              Name
              <Field className="inner-input" type="text" name="name" />
            </label>
            <ErrorMessage name="name" component="span" />
          </div>
          <div className="inputs">
            <label htmlFor="email">Email</label>
            <Field className="inner-input" type="email" name="email" />
            <ErrorMessage name="email" component="span" />
          </div>
          <button
            className="form-button"
            type="button"
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
          >
            Reset
          </button>
          <button className="form-button" type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
)

export default DataForm

// function sendEmail(e){
//     e.preventDefault()

//     emailjs.sendForm()
// }

// return (
//     <div >
//         <h2>Platicanos sobre tu vaje</h2>
//         <form onSubmit={sendEmail}>
//             <label>Nombre</label>
//             <input
//             type="text"
//             name="name"
//             required
//             />
//             <label>Email</label>
//             <input
//             type="email"
//             required
//             />
//             <label>Mensaje</label>
//             <textarea name='message' rows='4' />
//             <input
//             type="submit"
//             value='Send'
//             />
//         </form>
//     </div>
// )
//}

// export default Form
