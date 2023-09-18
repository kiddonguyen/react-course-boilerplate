import React from "react";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
// With Yup
export default function SignUpFormV2() {
    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(20, "Must be 20 characters or less")
                    .required("Required"),
                lastName: Yup.string()
                    .max(10, "Must be 10 characters or less")
                    .required("Required"),
            })}
            onSubmit={(values) => {
                console.log(values);
            }}
            autoComplete="off"
        >
            <Form className="p-10 w-full max-w-[500px] mx-auto">
                <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="firstName">First Name</label>
                    <Field
                        type="text"
                        name="firstName"
                        placeholder="Enter your first name"
                        className="p-4 rounded-md border-gray-100"
                    />
                    <div className="text-sm text-red-500">
                        <ErrorMessage name="firstName"></ErrorMessage>
                    </div>
                </div>
                <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="lastName">First Name</label>
                    <Field
                        type="text"
                        name="lastName"
                        placeholder="Enter your last name"
                        className="p-4 rounded-md border-gray-100"
                    />
                    <div className="text-sm text-red-500">
                        <ErrorMessage
                            name="lastName"
                            className="text-sm text-red-500"
                        ></ErrorMessage>
                    </div>
                </div>
                <div>
                    <button
                        className="w-full p-4 bg-blue-600 text-white font-semibold rounded-md"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </Form>
        </Formik>
    );
}
