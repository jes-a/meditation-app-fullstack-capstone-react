import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Journal from './journal';

describe('<Journal />', () => {
	it('Renders without crashing', () => {
		shallow(<Journal />);
	});
});