import React, { Component } from "react";
import Field from "../Common/Field";
import { withFormik } from "formik";
import * as Yup from "yup";

const fields = {
  sections: [
    [
      {
        name: "name",
        elementName: "input",
        type: "text",
        placeHolder: "Your name",
        message: "Please enter your name..",
      },

      {
        name: "email",
        elementName: "input",
        type: "email",
        placeHolder: "Your email",
        message: "Please enter your email..",
      },
      {
        name: "phone",
        elementName: "input",
        type: "text",
        placeHolder: "Your phone number",
        message: "Please enter your phone number..",
      },
    ],
    [
      {
        name: "message",
        elementName: "textarea",
        type: "text",
        placeHolder: "Type your message",
      },
    ],
  ],
};

class Contact extends Component {
  render() {
    return (
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <form
            id="contactForm"
            onSubmit={this.props.handleSubmit}
            name="sentMessage"
            noValidate="noValidate"
          >
            <div className="row align-items-stretch mb-5">
              {fields.sections.map((section, sectionIndex) => {
                console.log("rendering section", sectionIndex, section);
                return (
                  <div className="col-md-6" key={sectionIndex}>
                    {section.map((field, i) => {
                      return (
                        <Field
                          {...field}
                          key={i}
                          value={this.props.values[field.name]}
                          name={field.name}
                          onChange={this.props.handleChange}
                          onBlur={this.props.handleBlur}
                          touched={this.props.touched[field.name]}
                          errors={this.props.errors[field.name]}
                        />
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <div className="text-center">
              <div id="success"></div>
              <button
                className="btn btn-primary btn-xl text-uppercase"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    phone: "",
    message: "",
  }),

  validationSchema: Yup.object().shape({
    name: Yup.string().min(3, "Yoooo").required("You must give us your name"),
  }),
  handleSubmit: (values, setSubmitting) => {
    alert("You have submitted the form", JSON.stringify(values));
  },
})(Contact);
