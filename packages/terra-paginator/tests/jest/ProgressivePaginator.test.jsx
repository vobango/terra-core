import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl } from 'terra-enzyme-intl';

import ProgressivePaginator from '../../src/ProgressivePaginator';

describe('ProgressivePaginator', () => {
  // Snapshot Tests
  it('should render a default ProgressivePaginator', () => {
    const wrapper = mountWithIntl(<ProgressivePaginator onPageChange={e => typeof e} selectedPage={1} totalCount={2234} itemCountPerPage={20} />);
    expect(wrapper).toMatchSnapshot();
  });
});
