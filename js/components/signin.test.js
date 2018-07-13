import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Signin from './signin';

describe('<Signin />', () => {
	it('Renders without crashing', () => {
		shallow(<Signin />);
	});
});