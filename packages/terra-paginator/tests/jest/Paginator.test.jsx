import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl } from 'terra-enzyme-intl';

import Paginator from '../../src/Paginator';

describe('Paginator', () => {
  // Snapshot Tests
  it('should render a default paginator', () => {
    const wrapper = mountWithIntl(<Paginator onPageChange={e => typeof e} selectedPage={1} totalCount={2234} itemCountPerPage={20} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a paginator without page links', () => {
    const wrapper = mountWithIntl(<Paginator onPageChange={e => typeof e} />);
    expect(wrapper).toMatchSnapshot();
  });
});
