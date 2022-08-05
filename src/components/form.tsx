import * as React from "react";
import * as ReactDOM from "react-dom";
import { Formik, Field, Form } from 'formik';
import Cta from "../components/cta";

const Basic = () => (
  <div>
    <h1 className="text-xl align-center text-center font-bold mb-4">Contact for a Quote</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form className="text-center text-xl space-y-3">
        <div className="space-x-4">
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Garrett" className="bg-gray-100 border-2"/>
        </div>

        <div className="space-x-4">
        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Daly" className="bg-gray-100 border-2"/>
        </div>

        <div className="space-x-14">
        <label htmlFor="lastName">Phone</label>
        <Field id="phone" name="phone" placeholder="(203)559-8897" className="bg-gray-100 border-2"/>
        </div>

        <div className="space-x-16">
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="gdaly@yext.com"
          type="email"
          className="bg-gray-100 border-2"
        />
        </div>
        
        <div className="space-x-4">
        <label htmlFor="lastName">Comments</label>
        <Field id="comments" name="comments" placeholder="Type here..." className="bg-gray-100 border-2"/>
        </div>

        <div className="py-4 px-6 font-bold text-center text-xl text-white bg-contain bg-gray-400 rounded-lg">
            <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  </div>
);

export default Basic;
