import React from "react";
import {Field, reduxForm } from 'redux-form';
import { Input } from "./common/FormsControls/FormsControls";
import {required} from "../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"}name={"password"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm ({
    form: 'login'
})(LoginForm)



const Login = (props) => {

    const onSubmit = (FormData) => {
        console.log(FormData);
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm  onSubmit={onSubmit} />
    </div>
}

export default Login;