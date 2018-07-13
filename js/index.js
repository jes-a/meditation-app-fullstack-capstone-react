import React from 'react';
import ReactDOM from 'react-dom';
const render = ReactDOM.render;
import {Provider} from 'react-redux';

// import '../assets/css/main.css';

import Header from '../js/components/header';
import Login from '../js/components/login';
import Signin from '../js/components/signin';
import Navbar from '../js/components/navbar';
import Dashboard from '../js/components/dashboard';
import Journal from '../js/components/journal';
import ChangePw from '../js/components/change-pw';
import Footer from '../js/components/footer';



document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<Header />,
		document.getElementById('reactHeader'));} );

document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<Login />,
		document.getElementById('reactLogin'));} );

document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<Signin />,
		document.getElementById('reactSignin'));} );

document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<Navbar />,
		document.getElementById('reactNavbar'));} );

document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<Dashboard />,
		document.getElementById('reactDashboard'));} );

document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<Journal />,
		document.getElementById('reactJournal'));} );

document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<ChangePw />,
		document.getElementById('reactChangePw'));} );

document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<Footer />,
		document.getElementById('reactFooter'));} );