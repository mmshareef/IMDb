import React from 'react';
import {BrowserRouter, Route, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Signin from './components/Signin';
import Navigation from './components/Navigation';
import Movies from './components/Movies';
import {connect} from 'react-redux';

function PrivateRoute({ component: Component, isSigned, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isSigned) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/signin" />;
        }
      }}
    />
  );
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation />
            <PrivateRoute
              exact={true}
              component={Home}
              path="/"
              isSigned={this.props.user}
            />
            <PrivateRoute
              component={Movies}
              path="/movies"
              isSigned={this.props.user}
            />
            <Route
              path="/signin"
              render={(props) => {
                return (
                  <Signin
                    {...props}
                    handleSignin={this.handleSignin}
                    isSigned={this.props.user}
                  />
                );
              }}
            />
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    user: state.user
  };
}
export default connect(mapStateToProps)(App);
