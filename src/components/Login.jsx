import React from "react";
import {Field, reduxForm } from 'redux-form';
import { Input } from "./common/FormsControls/FormsControls";
import {required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../redux/auth-reducer";
import { Navigate } from 'react-router-dom';
import styles from "./common/FormsControls/FormsControls.module.css";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"}name={"password"} component={Input} validate={[required]} type={"password"}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"} /> remember me
            </div>
            {props.error &&
                <div className={styles.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm ({
    form: 'login'})(LoginForm)



const Login = (props) => {

    const onSubmit = (FormData) => {
        props.login(FormData.email, FormData.password, FormData.rememberMe);
    }

    if(props.isAuth) {
        return <Navigate to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm  onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth
})

export default connect (mapStateToProps, {login})(Login);