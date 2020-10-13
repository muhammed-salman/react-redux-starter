import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {
  onSubmit = (formProps) => {
    this.props.signin(formProps, () => {
      this.props.history.push('/dashboard');
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset className="form-group">
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
            className="form-control"
          />
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
            className="form-control"
          />
        </fieldset>
        <div>
        {
          this.props.errorMessage &&
          <div className='alert alert-danger'>{this.props.errorMessage}</div>
        }
        </div>
        <button className="btn btn-primary">Sign In!</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signin' })
)(Signin);
