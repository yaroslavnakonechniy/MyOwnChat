import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import {connect} from "react-redux";
 
let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.Auth.isAuth
})

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render () {
            if (!this.props.isAuth) return <Navigate to='/login' />
            return <Component {...this.props} />
            
        }
    }


      
    let connectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
      

    return connectedAuthRedirectComponent;
}