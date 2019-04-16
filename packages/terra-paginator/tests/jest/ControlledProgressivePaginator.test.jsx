import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl } from 'terra-enzyme-intl';

import ControlledProgressivePaginator from '../../src/ControlledProgressivePaginator';

describe('Paginator', () => {
  it('should render a controlled progressive paginator', () => {
    const wrapper = mountWithIntl(<ControlledProgressivePaginator onPageChange={e => typeof e} selectedPage={1} totalCount={2234} itemCountPerPage={20} />);
    expect(wrapper).toMatchSnapshot();
  });
});
