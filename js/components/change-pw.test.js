import React from 'react';
import {shallow, mount, render} from 'enzyme';

import ChangePw from './change-pw';

describe('<ChangePw />', () => {
	it('Renders without crashing', () => {
		shallow(<ChangePw />);
	});
});