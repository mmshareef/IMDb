import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Signin extends React.Component {
  handleSignin = () => {
    const input = document.getElementById("myinput").value;
    const password = document.getElementById("password").value;
    if (input === "s" && password === "s") {
      const action = {
        type: "LOGIN",
        payload: input
      };
      this.props.dispatch(action);
    }
  };
  render() {
    if (this.props.isSigned) {
      return <Redirect to="/" />;
    }
    return (
      <div className="mid">
        <h1 className="decoration">Sign In</h1>
        <input id="myinput" placeholder="username" /><br/><br/>
        <input id="password" type="password"placeholder="password" /><br/><br/>
        <button onClick={this.handleSignin} >Signin</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}
export default connect(null, mapDispatchToProps)(Signin);
