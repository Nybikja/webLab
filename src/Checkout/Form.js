import React from "react";
import {Formik} from "formik";
import * as Yup from 'yup';



function Form({setSuccess}) {
    

    const validationsSchema = Yup.object().shape({
        firstName: Yup.string().typeError('Must be a string.')
            .required('Valid first name is required.'),
        lastName: Yup.string().typeError('Must be a string.')
            .required('Valid last name is required.'),
        email: Yup.string().email('Please enter a valid email address for shipping updates.')
            .typeError('Must be a string.')
            .required('Valid email is required.'),
        address: Yup.string().typeError('Must be a string.')
            .required('Please enter your shipping address.'),
        state: Yup.string().typeError('Must be a string.')
            .required('Provide a valid state.'),
        zip: Yup.number().typeError('Must be a number.')
            .required('Zip code required.')
            .test('len', 'Must be exactly 5 characters', val => val && val.toString().length === 5),
        phone: Yup.string().matches('^[+][(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$', 'Invalid phone format.')
    })

    async function pushData(data) {
        setSuccess('success')
    }

    function getInput(id, text, type, placeholder, handleChange, handleBlur, values, errors, touched) {
        return (
            <div>
                <label htmlFor={id}>{text}</label>
                <input type={type} onChange={handleChange} onBlur={handleBlur} value={values[id]}
                       placeholder={placeholder}
                       className={"form-control " + (touched[id] && errors[id] ? 'is-invalid' : touched[id] ? 'is-valid' : '')}
                       id={id}/>
                {touched[id] && errors[id] && <div className="invalid-feedback">{errors[id]}</div>}
            </div>
        );
    }

    return (
        <Formik initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            state: '',
            zip: ''
        }} validateOnBlur validationSchema={validationsSchema}
                onSubmit={(values) => pushData(values)}>
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                <div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            {getInput("firstName", "First name", "text", "", handleChange, handleBlur, values, errors, touched)}
                        </div>
                        <div className="col-md-6 mb-3">
                            {getInput("lastName", "Last name", "text", "", handleChange, handleBlur, values, errors, touched)}
                        </div>
                    </div>
                    <div className="mb-3">
                        {getInput("email", "Email", "email", "you@example.com", handleChange, handleBlur, values, errors, touched)}
                    </div>
                    <div className="mb-3">
                        {getInput("address", "Address", "text", "1234 Main St", handleChange, handleBlur, values, errors, touched)}
                    </div>
                    <div className="mb-3">
                        {getInput("phone", <div>Phone <span className="text-muted">(Optional)</span>
                        </div>, "phone", "+380957452354", handleChange, handleBlur, values, errors, touched)}
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            {getInput("state", "State", "text", "Lviv", handleChange, handleBlur, values, errors, touched)}
                        </div>
                        <div className="col-md-3 mb-3">
                            {getInput("zip", "Zip", "text", "00000", handleChange, handleBlur, values, errors, touched)}
                        </div>
                    </div>
                    <hr className="mb-4"/>
                    <button onClick={handleSubmit}
                            className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout
                    </button>
                </div>)}
        </Formik>
    );
}

export default Form;