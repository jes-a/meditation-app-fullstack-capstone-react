import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Dashboard from './dashboard';

describe('<Dashboard />', () => {
	it('Renders without crashing', () => {
		shallow(<Dashboard />);
	});
});