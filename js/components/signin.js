import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Signin(props) {
	return (
	  <main role="main" id="signup-screen" className="bg">
	    <div className="landing-width">
	      <div className="landing-bg">
	        <h2>
	          insight•full
	        </h2>
	        <form role="form" id="signup-form" className="landing-form">
	            <h3>
	              Sign Up For an Account
	            </h3>
	            <span className="login-error"></span>
	            <label htmlFor="userEmail">
	                Enter Email Address
	            </label>
	            <input type="email" id="user-signup" name="js-user-signup" />
	            <label htmlFor="create-pw">
	                Create a Password
	            </label>
	            <input type="password" id="create-pw" name="js-create-pw" />
	            <label htmlFor="reenter-pw">
	                Re-enter Password</label>
	            <input type="password" id="reenter-password" name="js-reenter-pw" />
	            <button role="button" name="signup" className="login-button" id="js-signup-button" type="submit">Sign Up
	            	<i className="far fa-chevron-circle-right button-icon"></i>
            	</button>
	        </form>
	        <a href="#" className="account-link js-login">
	            If you have an account, Log In...
	        </a>
	      </div>
	    </div>
	  </main>
	)
}