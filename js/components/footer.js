import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Footer(props) {
	return (
		<footer role="footer" id="footer-section">
		  <div className="footer-div">
		    <p className="copyright">© 2018 Jes Albro</p>
		    <div className="social-links">
		      <a href="https://www.linkedin.com/in/jesalbro/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
		      <a href="https://github.com/jes-a" target="_blank"><i className="fab fa-github"></i></a>
		      <a href="mailto:jesalbro@gmail.com?subject=Email from insight•full site"><i className="far fa-at"></i></a>
		    </div>
		  </div>
		</footer>
	)
}