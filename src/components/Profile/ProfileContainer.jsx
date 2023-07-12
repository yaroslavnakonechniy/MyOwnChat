import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getStatus, updateStatus} from "../../redux/post-reducer";
import {useLocation,useNavigate,useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
import {compose} from "redux";

class ProfileContainer extends React.Component {

  componentDidMount(){
    
      let userId = this.props.router.params.userId;
      
      this.props.getUserProfile(userId);
      this.props.getStatus(userId);

  }

  render(){
    return  <Profile  {...this.props} profile = {this.props.profile} status = {this.props.status} updateStatus ={this.props.updateStatus}/>
  }

}

let mapStateToProps = (state) => ({
  profile: state.PostPage.profile,
  status: state.PostPage.status
})

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
