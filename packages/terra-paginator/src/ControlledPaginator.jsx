import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ResponsiveElement from 'terra-responsive-element';
import IconPrevious from 'terra-icon/lib/icon/IconPrevious';
import IconNext from 'terra-icon/lib/icon/IconNext';
import KeyCode from 'keycode-js';
import styles from './Paginator.module.scss';
import Button from '../../terra-button';
import { calculatePages, pageSet } from './_paginationUtils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Function to be executed when a navigation element is selected.
   */
  onPageChange: PropTypes.func.isRequired,
  /**
   * The active/selected page. Used to set the default selected page or maintain selection across renders.
   * Required when using totalCount and itemCountPerPage.
   */
  selectedPage: PropTypes.number.isRequired,
  /**
   * Total number of all items being paginated.
   * Required when using itemCountPerPage and selectedPage.
   */
  totalCount: PropTypes.number.isRequired,
  /**
   * Total number of items per page.
   * Required when using selectedPage and totalCount.
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

class Paginator extends React.Component {
  constructor(props) {
    super(props);

    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.hasNavContext = this.hasNavContext.bind(this);
    this.buildPageButtons = this.buildPageButtons.bind(this);
    this.reducedPaginator = this.reducedPaginator.bind(this);
  }

  handlePageChange(index) {
    return (event) => {
      event.preventDefault();

      if (Number.isNaN(Number(index))) {
        this.props.onPageChange(event.currentTarget.attributes['aria-label'].value);

        return false;
      }

      this.props.onPageChange(index);

      return false;
    };
  }

  handleOnKeyDown(index) {
    return (event) => {
      if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN || event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
        event.preventDefault();

        if (Number.isNaN(Number(index))) {
          this.props.onPageChange(event.currentTarget.attributes['aria-label'].value);

          return false;
        }

        this.props.onPageChange(index);
      }

      return false;
    };
  }

  buildPageButtons(totalPages, onClick) {
    const { totalCount, itemCountPerPage, selectedPage } = this.props;
    const pageSequence = pageSet(selectedPage, calculatePages(totalCount, itemCountPerPage));
    const pageButtons = [];

    pageSequence.forEach((val) => {
      const paginationLinkClassNames = cx([
        'nav-link',
        val === selectedPage ? 'is-selected' : null,
      ]);

      if (val > totalPages) {
        return;
      }
      pageButtons.push((
        <Button
          aria-label={`Page ${val}`}
          aria-current={val === selectedPage && 'page'}
          className={paginationLinkClassNames}
          tabIndex={val === selectedPage ? null : '0'}
          key={`pageButton_${val}`}
          onClick={onClick(val)}
          onKeyDown={this.handleOnKeyDown(val)}
          text={String(val)}
        />
      ));
    });

    return pageButtons;
  }

  hasNavContext() {
    return this.props.totalCount && this.props.itemCountPerPage;
  }

  defaultPaginator() {
    const totalPages = calculatePages(this.props.totalCount, this.props.itemCountPerPage);
    const { selectedPage } = this.props;
    const previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;
    const nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;
    const areLeftControlsDisabled = selectedPage === 1;
    const areRightControlsDisabled = selectedPage === totalPages;

    const fullView = (
      <div className={cx(['paginator', !this.hasNavContext() && 'pageless'])}>
        {
          this.hasNavContext() && (
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
          )
        }
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
        {this.hasNavContext() && this.buildPageButtons(totalPages, this.handlePageChange)}
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
        {
          this.hasNavContext() && (
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
          )
        }
      </div>
    );

    return fullView;
  }

  reducedPaginator() {
    const totalPages = calculatePages(this.props.totalCount, this.props.itemCountPerPage);
    const { selectedPage } = this.props;
    const previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;
    const nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;
    const areLeftControlsDisabled = selectedPage === 1;
    const areRightControlsDisabled = selectedPage === totalPages;

    const reducedView = (
      <div className={cx(['paginator', !this.hasNavContext() && 'pageless'])} role="navigation" aria-label="pagination">
        {
          this.hasNavContext() && (
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
          )
        }
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
        {this.hasNavContext() && this.context.intl.formatMessage({ id: 'Terra.paginator.pageIndex' }, { selectedPage })}
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
        {
          this.hasNavContext() && (
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
          )
        }
      </div>
    );

    return reducedView;
  }

  render() {
    return <ResponsiveElement defaultElement={this.reducedPaginator()} small={this.defaultPaginator()} />;
  }
}

Paginator.propTypes = propTypes;
Paginator.contextTypes = contextTypes;

export default Paginator;
