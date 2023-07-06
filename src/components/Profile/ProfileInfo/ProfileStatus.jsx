import React from "react";

class ProfileStatus extends React.Component {
   
    state = {
        editMode: false,
        status: this.props.status
    }

    activeEditMode = () =>{
        this.setState({
            editMode:true
        });
    }
    deactiveEditMode = () =>{
        this.setState({
            editMode:false
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) =>{
       this.setState({
        status:e.currentTarget.value
       });
        
    }

    render(){
        return(
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activeEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactiveEditMode} value={this.state.status}/>
                    </div> 
                }

            </div>
        )
    }
}

export default ProfileStatus;