import React from 'react';
import ReactDOM from 'react-dom';
const render = ReactDOM.render;
import {Provider} from 'react-redux';

// import '../assets/css/main.css';

import Header from '../js/components/header';
import Footer from '../js/components/footer';
import ChangePw from '../js/components/footer';



document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<Header />,
		document.getElementById('reactHeader'));} );

