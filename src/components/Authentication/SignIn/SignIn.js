import React from "react";
import { NavLink } from "react-router-dom";
import "../../../assets/scss/style.scss";
import Aux from "../../../hoc/_Aux";
import AuthService from "../../../store/services/auth.service";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import path from '../../../config/path.js';


class SignIn extends React.Component {
  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user && user.accessToken) {
      this.props.history.push("/");
    }
  }
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: "",
    };
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.history.push("/");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage,
          });
        }
      );
    } else {
      this.setState({
        loading: false,
      });
    }
  }
  render() {
    return (
      <Aux>

        <div className="auth-wrapper">
          <div className="auth-content">
            <div className="auth-bg">
              <span className="r" />
              <span className="r s" />
              <span className="r s" />
              <span className="r" />
            </div>

            <Form
              onSubmit={this.handleLogin}
              ref={(c) => {
                this.form = c;
              }}
            >
              <div className="card">
                <div className="card-body text-center">
                  <div className="mb-4">
                    <i className="feather icon-unlock auth-icon" />
                  </div>
                  <h3 className="mb-4">Login</h3>
                  <div className="input-group mb-3">
                    <input
                      type="username"
                      name="username"
                      className="form-control"
                      placeholder="Username"
                      value={this.state.username}
                      onChange={this.onChangeUsername}
                      required
                    />
                  </div>
                  <div className="input-group mb-4">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      required
                    />
                  </div>
                  <div className="form-group text-left">
                    <div className="checkbox checkbox-fill d-inline">
                      <input
                        type="checkbox"
                        name="checkbox-fill-1"
                        id="checkbox-fill-a1"
                      />
                      <label htmlFor="checkbox-fill-a1" className="cr">
                        {" "}
                        Save credentials
                      </label>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary shadow-2 mb-4"
                    disabled={this.state.loading}
                  >
                    {this.state.loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    Starting
                  </button>
                  {this.state.message && (
                    <div className="form-group">
                      <div className="alert alert-danger" role="alert">
                        {this.state.message}
                      </div>
                    </div>
                  )}
                  <CheckButton
                    style={{ display: "none" }}
                    ref={(c) => {
                      this.checkBtn = c;
                    }}
                  />

                  <p className="mb-2 text-muted">
                    Forgot password?{" "}
                    <NavLink to="/auth/reset-password-1">Reset</NavLink>
                  </p>
                  <p className="mb-0 text-muted">
                    Don’t have an account?{" "}
                    <NavLink to={path.signup}>Signup</NavLink>
                  </p>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </Aux>
    );
  }
}

export default SignIn;
