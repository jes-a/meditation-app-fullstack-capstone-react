import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Dashboard(props) {
	return (
	  <main role="main" id="dashboard-screen" className="dashboard-main">
	    <section className="dashboard">
	        <div className="stat-row">
	            <div className="col col-6">
	              <div className="stat-box stat-top">
	                <i className="fas fa-spa fa-2x"></i>
	                <h4>Total number of meditation sessions</h4>
	                <div className="stat-big js-total-number">
	                </div>
	              </div>
	            </div>
	            <div className="col col-6">
	              <div className="stat-box stat-top">
	                <i className="fas fa-fire fa-2x"></i>
	                <h4>Days in a row w&#47; one or more sessions</h4>
	                <div className="stat-big js-streak-number">X
	                </div>
	              </div>
	            </div>
	        </div>
	        <div className="stat-row">
	            <div className="col col-12">
	              <div className="stat-box">
	                <i className="fas fa-calendar fa-lg"></i>
	                <h4>Last Ten Days</h4>
	                <div className="stat-circles">
	                </div>
	              </div>
	            </div>
	        </div>
	        <div className="stat-row">
	            <div className="col col-7">
	              <div className="stat-box stat-bottom">
	                <i className="fas fa-mobile fa-lg"></i>
	                <h4>Most Used Method</h4>
	                <div className="js-method"></div>
	              </div>
	            </div>
	            <div className="col col-5">
	              <div className="stat-box stat-bottom">
	                <i className="fas fa-clock fa-lg"></i>
	                <h4>Avg Time (min)</h4>
	                <div className="js-avg-time">
	                </div>
	              </div>
	            </div>
	        </div>
	    </section>
	    <section className="sb">
	        <div className="col sb-col col-12">
	          <div className="stat-box sb-tall">
	            <i className="far fa-lightbulb fa-2x"></i>
	            <h4>Latest Insights</h4>
	              <div className="js-latest-entries">
	              </div>
	              <div className="js-journal-link journal-link"><a href="#">See All <i className="far fa-chevron-circle-right"></i></a>
	              </div>
	            </div>            
	          </div>
	    </section>
	  </main>
	)
}
