import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerName: "",
      registerEmail: "",
      registerPassword: ""
    };
  }

  onNameChange = event => {
    this.setState({ registerName: event.target.value });
  };

  onEmailChange = event => {
    this.setState({ registerEmail: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ registerPassword: event.target.value });
  };

  onSubmitRegister = () => {
    const { registerName, registerEmail, registerPassword } = this.state;
    if (
      registerEmail !== "" &&
      registerName !== "" &&
      registerPassword !== ""
    ) {
      fetch("http://localhost:3000/register", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.state.registerName,
          email: this.state.registerEmail,
          password: this.state.registerPassword
        })
      })
        .then(Response => Response.json())
        .then(user => {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        });
    } else {
      this.props.onRouteChange("register");
    }
  };

  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center animated lightSpeedIn">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                {/*                 <label className="db fw6 lh-copy f6" htmlFor="name">
                  Name
                </label> */}
                <input
                  placeholder="Enter name"
                  onChange={this.onNameChange}
                  className="pa2 input-reset ba bg-transparent w-100"
                  type="email"
                  name="name"
                  id="name"
                />
              </div>
              <div className="mt3">
                {/*  <label className="db fw6 lh-copy f6" htmlFor="email">
                  Email
                </label> */}
                <input
                  placeholder="Email Address"
                  onChange={this.onEmailChange}
                  className="pa2 input-reset ba bg-transparent w-100"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="mv3">
                {/*          <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label> */}
                <input
                  placeholder="Password"
                  onChange={this.onPasswordChange}
                  className="pa2 input-reset ba bg-transparent w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitRegister}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
