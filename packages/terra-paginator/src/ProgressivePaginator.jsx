import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ResponsiveElement from 'terra-responsive-element';
import KeyCode from 'keycode-js';
import IconPrevious from 'terra-icon/lib/icon/IconPrevious';
import IconNext from 'terra-icon/lib/icon/IconNext';
import Button from '../../terra-button';
import styles from './Paginator.module.scss';

import { calculatePages } from './_paginationUtils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Function to be executed when a navigation element is selected.
   */
  onPageChange: PropTypes.func.isRequired,
  /**
   * The active/selected page.
   */
  selectedPage: PropTypes.number.isRequired,
  /**
   * Total number of all items being paginated.
   */
  totalCount: PropTypes.number.isRequired,
  /**
   * Total number of items per page.
   */
  itemCountPerPage: PropTypes.number.isRequired,
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  },
};

class ProgressivePaginator extends React.Component {
  constructor(props) {
    super(props);

    const { selectedPage, totalCount } = this.props;

    this.state = {
      selectedPage: selectedPage && totalCount ? selectedPage : undefined,
    };

    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.defaultProgressivePaginator = this.defaultProgressivePaginator.bind(this);
    this.reducedProgressivePaginator = this.reducedProgressivePaginator.bind(this);
  }

  handlePageChange(index) {
    return (event) => {
      event.preventDefault();

      this.props.onPageChange(index);
      this.setState({ selectedPage: index });
    };
  }

  handleOnKeyDown(index) {
    return (event) => {
      if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN || event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
        event.preventDefault();

        if (Number.isNaN(Number(index))) {
          this.props.onPageChange(event.target.text.trim().toLowerCase());

          return false;
        }

        this.props.onPageChange(index);
        this.setState({
          selectedPage: index,
        });
      }

      return false;
    };
  }

  defaultProgressivePaginator() {
    const totalPages = calculatePages(this.props.totalCount, this.props.itemCountPerPage);
    const { selectedPage } = this.state;
    const previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;
    const nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;
    const areLeftControlsDisabled = selectedPage === 1;
    const areRightControlsDisabled = selectedPage === totalPages;

    return (
      <div className={cx(['paginator', 'progressive'])} role="navigation" aria-label="pagination">
        <div>
          {this.context.intl.formatMessage({ id: 'Terra.paginator.pageCount' }, { selectedPage, totalPages })}
        </div>
        <div>
          <Button
            className={cx(['nav-link', areLeftControlsDisabled && 'is-disabled'])}
            isDisabled={areLeftControlsDisabled}
            aria-disabled={areLeftControlsDisabled}
            aria-label="first"
            tabIndex={areLeftControlsDisabled ? null : '0'}
            onClick={this.handlePageChange(1)}
            onKeyDown={this.handleOnKeyDown(1)}
            text={this.context.intl.formatMessage({ id: 'Terra.paginator.first' })}
          />
          <Button
            className={cx(['nav-link', 'previous', areLeftControlsDisabled && 'is-disabled'])}
            icon={<IconPrevious />}
            isDisabled={areLeftControlsDisabled}
            aria-disabled={areLeftControlsDisabled}
            aria-label="previous"
            tabIndex={areLeftControlsDisabled ? null : '0'}
            onClick={this.handlePageChange(previousPageIndex)}
            onKeyDown={this.handleOnKeyDown(previousPageIndex)}
            text={this.context.intl.formatMessage({ id: 'Terra.paginator.previous' })}
          />
          <Button
            className={cx(['nav-link', 'next', areRightControlsDisabled && 'is-disabled'])}
            icon={<IconNext />}
            isReversed
            isDisabled={areRightControlsDisabled}
            aria-disabled={areRightControlsDisabled}
            aria-label="next"
            tabIndex={areRightControlsDisabled ? null : '0'}
            onClick={this.handlePageChange(nextPageIndex)}
            onKeyDown={this.handleOnKeyDown(nextPageIndex)}
            text={this.context.intl.formatMessage({ id: 'Terra.paginator.next' })}
          />
          <Button
            className={cx(['nav-link', areRightControlsDisabled && 'is-disabled'])}
            isDisabled={areRightControlsDisabled}
            aria-disabled={areRightControlsDisabled}
            aria-label="last"
            tabIndex={areRightControlsDisabled ? null : '0'}
            onClick={this.handlePageChange(totalPages)}
            onKeyDown={this.handleOnKeyDown(totalPages)}
            text={this.context.intl.formatMessage({ id: 'Terra.paginator.last' })}
          />
        </div>
      </div>
    );
  }

  reducedProgressivePaginator() {
    const totalPages = calculatePages(this.props.totalCount, this.props.itemCountPerPage);
    const { selectedPage } = this.state;
    const previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;
    const nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;
    const areLeftControlsDisabled = selectedPage === 1;
    const areRightControlsDisabled = selectedPage === totalPages;

    return (
      <div className={cx(['paginator'])} role="navigation" aria-label="pagination">
        <div>
          <Button
            className={cx(['nav-link', areLeftControlsDisabled && 'is-disabled'])}
            isDisabled={areLeftControlsDisabled}
            aria-disabled={areLeftControlsDisabled}
            aria-label="first"
            tabIndex={areLeftControlsDisabled ? null : '0'}
            onClick={this.handlePageChange(1)}
            onKeyDown={this.handleOnKeyDown(1)}
            text={this.context.intl.formatMessage({ id: 'Terra.paginator.first' })}
          />
          <Button
            className={cx(['nav-link', 'previous', areLeftControlsDisabled && 'is-disabled'])}
            icon={<IconPrevious />}
            isIconOnly
            isDisabled={areLeftControlsDisabled}
            aria-disabled={areLeftControlsDisabled}
            aria-label="previous"
            tabIndex={areLeftControlsDisabled ? null : '0'}
            onClick={this.handlePageChange(previousPageIndex)}
            onKeyDown={this.handleOnKeyDown(previousPageIndex)}
            text={this.context.intl.formatMessage({ id: 'Terra.paginator.previous' })}
          />
        </div>
        <div>
          {this.context.intl.formatMessage({ id: 'Terra.paginator.pageCount' }, { selectedPage, totalPages })}
        </div>
        <div>
          <Button
            className={cx(['nav-link', 'next', areRightControlsDisabled && 'is-disabled'])}
            icon={<IconNext />}
            isIconOnly
            isDisabled={areRightControlsDisabled}
            aria-disabled={areRightControlsDisabled}
            aria-label="next"
            tabIndex={areRightControlsDisabled ? null : '0'}
            onClick={this.handlePageChange(nextPageIndex)}
            onKeyDown={this.handleOnKeyDown(nextPageIndex)}
            text={this.context.intl.formatMessage({ id: 'Terra.paginator.next' })}
          />
          <Button
            className={cx(['nav-link', areRightControlsDisabled && 'is-disabled'])}
            isDisabled={areRightControlsDisabled}
            aria-disabled={areRightControlsDisabled}
            aria-label="last"
            tabIndex={areRightControlsDisabled ? null : '0'}
            onClick={this.handlePageChange(totalPages)}
            onKeyDown={this.handleOnKeyDown(totalPages)}
            text={this.context.intl.formatMessage({ id: 'Terra.paginator.last' })}
          />
        </div>
      </div>
    );
  }

  render() {
    return <ResponsiveElement defaultElement={this.reducedProgressivePaginator()} tiny={this.defaultProgressivePaginator()} />;
  }
}

ProgressivePaginator.propTypes = propTypes;
ProgressivePaginator.contextTypes = contextTypes;

export default ProgressivePaginator;
