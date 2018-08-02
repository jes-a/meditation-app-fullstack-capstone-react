import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Login(props) {
    return (
      <main role="main" id="login-screen" className="bg">
        <div className="landing-width">
          <div className="landing-bg">
            <h2>
              insight•full
            </h2>
            <p class="demo">
              To view a demo: <br /> email: demo@email.com <br /> password: demo123
            </p>
            <span class="js-signin-success change-status"></span>
            <form role="form" id="login-form" className="landing-form">
              <h3>
                Log In
              </h3>
              <span className="login-error"></span>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="js-userName" />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="js-userPw" className="pw" />
              <button role="button" name="login" className="login-button" id="js-login-button" type="submit">Log In
                  <i className="far fa-chevron-circle-right button-icon"></i>
              </button>
            </form>
              <a href="#" className="account-link js-signup">
                  If you don't have an account, Sign Up...
              </a>
          </div>
        </div>
      </main>
    )
}
