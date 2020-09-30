import { ErrorMessage, Field, Form, Formik } from "formik"
import React, { useState } from "react"
import styled from "styled-components"
import * as Yup from "yup"

const schema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    )
    .required("Phone number is required"),
})

const FieldContainer = styled.div`
  margin-bottom: 2em;
  input {
    padding: 0.5em 0.25em;
    border: 2px solid #eee;
    border-radius: 4px;
    max-width: 300px;
    width: 100%;
  }
  label {
    color: #fff;
    display: block;
  }

  span {
    display: block;
    color: #fff;
  }
`

export function ContactForm() {
  const [isShowing, setisShowing] = useState(true)
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      }}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false)
        setisShowing(false)
      }}
      validationSchema={schema}
    >
      {() =>
        isShowing ? (
          <Form>
            <FieldContainer>
              <label htmlFor="firstName">First Name: </label>
              <Field name="firstName" placeholder="John" />
              <span>
                <ErrorMessage name="firstName" />
              </span>
            </FieldContainer>

            <FieldContainer>
              <label htmlFor="lastName">First Name: </label>
              <Field name="lastName" placeholder="Doe" />
              <span>
                <ErrorMessage name="lastName" />
              </span>
            </FieldContainer>

            <FieldContainer>
              <label htmlFor="email">Email: </label>
              <Field name="email" placeholder="example@gmail.com" />
              <span>
                <ErrorMessage name="email" />
              </span>
            </FieldContainer>

            <FieldContainer>
              <label htmlFor="phone">Phone Number: </label>
              <Field name="phone" placeholder="4085555555" />
              <span>
                <ErrorMessage name="phone" />
              </span>
            </FieldContainer>

            <button type="submit">Submit form</button>
          </Form>
        ) : (
          <h1 style={{ color: "#fff" }}>Thank You</h1>
        )
      }
    </Formik>
  )
}
