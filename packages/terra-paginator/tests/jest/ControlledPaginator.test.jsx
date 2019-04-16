import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl } from 'terra-enzyme-intl';

import ControlledPaginator from '../../src/ControlledPaginator';

describe('Paginator', () => {
  it('should render a controlled paginator', () => {
    const wrapper = mountWithIntl(<ControlledPaginator onPageChange={e => typeof e} selectedPage={1} totalCount={2234} itemCountPerPage={20} />);
    expect(wrapper).toMatchSnapshot();
  });
});
