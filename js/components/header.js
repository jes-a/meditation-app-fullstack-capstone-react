import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Header(props) {
	return (
	  <main role="main" id="landing-screen" className="bg">
	    <div className="landing-width">
	      <div className="landing-bg" id="landing-screen-text">
	        <h2>
	          insight•full
	        </h2>
	        <h5>
	          insight•full is a free and easy to use app that allows you to gain insights about your meditation practice. After you meditate, simply add your session and any insights you had and save. 
	        </h5>
	        <h5>
	          The app allows you to easily see how your meditation practice is going, and keeps a journal of your meditation insights. 
	        </h5>
	        <h5>    
	          Stay mindful, and stay insight•full!
	        </h5>
	        <button role="link" id="js-landing-link" className="landing-link">
	          Log In<i className="far fa-sign-in-alt button-icon"></i>
	        </button>
	        <a href="#" className="account-link js-signup">
	          If you don't have an account, Sign Up...
	        </a>
	      </div>
	    </div>
	    <p className="photo-credit">Photos in app from <a href="https://unsplash.com/" target="_blank">Unsplash</a></p>
	  </main>
	)
}