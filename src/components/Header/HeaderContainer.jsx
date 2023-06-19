import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataCreator} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

        componentDidMount(){

          axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
          })
          .then (response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setAuthUserDataCreator(id, email, login );
            }
            debugger
          });
      }

      render() {
        return <Header {...this.props}/>
      }
}

let mapStateToProps = (state) => ({
    isAuth : state.Auth.isAuth,
    login : state.Auth.login
    
});

export default connect (mapStateToProps,{setAuthUserDataCreator})(HeaderContainer);