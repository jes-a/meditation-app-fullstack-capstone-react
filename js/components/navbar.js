import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Navbar(props) {
	return (
	  <nav role="navigation" id="site-nav" className="nav-bg">
	      <ul className="nav-links">
	          <li className="nav-title js-nav-title" aria-label="Home">insight•full</li>
	          <li className="add-session js-add-session nav-right">
	              <i className="far fa-plus-circle" aria-label="Add Session"></i>
	              <div className="nav-text">Add Session</div>
	          </li>
	          <li className="journal js-journal nav-right">
	              <i className="far fa-lightbulb" aria-label="Insights"></i>
	              <div className="nav-text">Insights</div>
	          </li>
	          <li className="settings js-settings nav-right nav-last">
	              <i className="far fa-user-circle" aria-label="Settings"></i>
	          </li>
	          <li className="js-settings-dropdown settings-dropdown">
	            <div className="js-settings-close settings-close">
	              <i className="fas fa-times fa-2x"></i>
	            </div>
	            <div className="settings-bg">
	              <h3>Settings</h3>
	              <ul>
	                <li className="js-change-pw">Change Password</li>
	                <li className="js-logout-link logout-link"><i className="fas fa-sign-out-alt"></i>Log Out
	                  <input type="hidden" className="logged-in-user" value="" />
	                </li>
	              </ul>
	            </div>
	          </li>
	      </ul>
	  </nav>
	)
}
