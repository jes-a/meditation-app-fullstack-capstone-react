import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function ChangePw(props) {
	return (
	  <main role="main" id="change-password-screen">
	    <div className="row col-12">
	      <h1>
	        Change Password
	      </h1>
	      <form role="form" id="changePw-form" className="landing-form">
	        <span className="js-change-pw-status change-pw-status"></span>
	        <label for="create-new-password">
	          Create a New Password
	        </label>
	        <input type="password" id="create-new-password" name="js-new-userPw" value="" />
	        <label for="reenter-new-password">
	          Re-enter Password
	        </label>
	        <input type="password" id="reenter-new-password" name="js-confirm-userPw" value="" />
	        <button role="button" name="save-pw-button" className="login-button" id="js-changePw-button" type="submit">
	          Save Password
	        </button>
	      </form>
	    </div>
	  </main>
	)
}