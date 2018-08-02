import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Journal(props) {
	return (
	  <main role="main" id="journal-screen">
	      <section className="row">
          	<span class="js-delete-success change-status"></span>
	        <div className="page-title journal-bkgnd">
	          <h1>Insights</h1>
	        </div>
	          <div className="col col-6 journal-entries">
	          </div>
	          <div className="col col-6 large-image">
	              <div className="img-div-journal">
	                  <img src="assets/img/journal-column.jpg" />
	              </div>
	          </div>
	      </section>
	  </main>
	)
}