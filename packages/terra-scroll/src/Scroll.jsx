import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Scroll.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The child content to present in the scrollable region.
   */
  children: PropTypes.node,
  /**
   * Function callback for the ref of the scrollable container.
   */
  refCallback: PropTypes.func,
};

const Scroll = ({ children, refCallback, ...customProps }) => {
  let debounce;
  let originalPointerEvents;

  const scrollableElementRef = (element) => {
    if (element) {
      originalPointerEvents = element.style.pointerEvents;
    }

    if (refCallback) {
      refCallback(element);
    }
  };

  const handleOnScroll = (event) => {
    clearTimeout(debounce);

    const scrollElement = event.target;
    scrollElement.style.pointerEvents = 'none'; // Suppress Pointer Events.
    debounce = setTimeout(() => {
      if (originalPointerEvents !== null) {
        scrollElement.style.pointerEvents = originalPointerEvents; // Restore Pointer Events.
      }
    }, 50);
  };

  return (
    <div
      {...customProps}
      className={cx(['scroll', customProps.className])}
      ref={scrollableElementRef}
      onScroll={handleOnScroll}
    >
      {children}
    </div>
  );
};

Scroll.propTypes = propTypes;

export default Scroll;
