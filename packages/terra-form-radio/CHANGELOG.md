ChangeLog
=========

Unreleased
----------
### Fixed
* Fixed lint warnings for multiple empty lines

3.31.0 - (October 15, 2019)
------------------
### Changed
* Minor dependency version bump

3.30.0 - (October 14, 2019)
------------------
### Changed
* Minor dependency version bump
* Updated `isInvalid` prop description.

3.29.0 - (October 3, 2019)
------------------
### Changed
* Minor dependency version bump

3.28.0 - (September 19, 2019)
------------------
### Changed
* Removed `details` tag from doc-site.

### Added
* Added en-CA translations.

3.27.0 - (September 6, 2019)
------------------
### Added
* Props table markdown file import added to doc site page

3.26.0 - (September 3, 2019)
------------------
### Changed
* Minor dependency version bump

3.25.0 - (August 21, 2019)
------------------
### Changed
* Import for package version from package.json added to doc page
* Switch from Object.assign to Object spread syntax.
* Cleaned up imports in examples and test files

3.24.0 - (August 14, 2019)
------------------
### Changed
* Components updated to use `FormattedMessage` to interface with `react-intl's` `intl` context.
* updated package.json test scripts

3.23.0 - (July 30, 2019)
------------------
### Changed
* Minor dependency version bump

3.22.0 - (July 25, 2019)
------------------
### Added
* Added documentation to mock window.matchMedia for jest tests.

3.21.0 - (July 24, 2019)
------------------
### Changed
* Minor dependency version bump

3.20.0 - (July 17, 2019)
------------------
### Changed
* Minor dependency version bump

3.19.0 - (July 17, 2019)
------------------
### Changed
* Minor dependency version bump

3.18.0 - (July 16, 2019)
------------------
### Added
* Added documentation on required peerDependencies

3.17.0  - (July 11, 2019)
------------------
### Changed
* Components updated to use `injectIntl` to interface with `react-intl's` `intl` context.
* Update tests to use `Terra.describeViewports` for setting viewports and use `Terra.it.validatesElement`
* Updated Docs around the requirement of terra-base and aggregate-translations.

3.16.0 - (July 9, 2019)
------------------
### Changed
* Minor dependency version bump

3.15.0 - (June 28, 2019)
------------------
### Changed
* Removed all inline styles from Dev-site components and implemented the same styles using external css.

3.14.0 - (June 18, 2019)
------------------
### Changed
* Enabled ability to mark RadioField as required

3.13.1 - (June 12, 2019)
------------------
### Changed
* Patch dependency version bump

3.13.0 - (June 11, 2019)
------------------
### Removed
* Removed node_modules from .npmignore

### Changed
* Made required updates to consume terra-toolkit v5 and terra-dev-site v5

3.12.0 - (May 1, 2019)
------------------
### Changed
* Minor dependency version bump

### Added
* Doc site examples that can be toggled to demonstrate isInline and isInvalid props

3.11.0 - (April 16, 2019)
------------------
### Changed
* Minor dependency version bump

3.10.0 - (April 9, 2019)
------------------
### Changed
* Adding a validation of falsey values to the child components to avoid a crash

3.9.0 - (April 2, 2019)
------------------
### Changed
* Minor dependency version bump

3.8.0 - (March 26, 2019)
------------------
### Changed
* Update react/react-dom peer-dependency to latest stable minor release

### Removed
* Removed peer dependency on terra-base
* Removed baseStyles import from terra-base

3.7.0 - (March 21, 2019)
------------------
### Changed
* Update Jest tests to use terra-enzyme-intl

### Added
* Added aria-describedby to better announce legend, help text, and error text in the Radio Field component

3.6.0 - (February 26, 2019)
------------------
### Changed
* Minor dependency version bump

### Added
* Added stylelint-enable at end of Radio.module.scss
* Added en-AU translations

3.5.0 - (February 12, 2019)
------------------
### Changed
* Minor dependency version bump

3.4.0 - (February 5, 2019)
------------------
### Changed
* Minor dependency version bump

3.3.0 - (January 26, 2019)
------------------
### Changed
* Minor dependency version bump

3.2.0 - (January 22, 2019)
------------------
### Changed
* Minor dependency version bump

3.1.0 - (January 22, 2019)
------------------
### Changed
* Minor dependency version bump

3.0.0 - (January 8, 2019)
------------------
### Changed
* Updated theme variables
* radio-field: render error icon down one level of markup

2.36.0 - (January 2, 2019)
------------------
### Changed
* Minor dependency version bump

2.35.1 - (November 20, 2018)
------------------
### Changed
* Patch dependency version bump

2.35.0 - (November 19, 2018)
------------------
### Changed
* Minor dependency version bump

2.34.0 - (November 13, 2018)
------------------
### Changed
* Minor dependency version bump

2.33.0 - (November 9, 2018)
------------------
### Changed
* Minor dependency version bump

2.32.0 - (October 30, 2018)
------------------
### Changed
* Minor dependency version bump
* Update mixin import to be more explicit

2.31.0 - (October 24, 2018)
------------------
### Changed
* Minor dependency version bump

2.30.0 - (October 16, 2018)
------------------
### Changed
* Minor dependency version bump

2.29.0 - (October 8, 2018)
------------------
### Changed
* Minor dependency version bump

2.28.0 - (October 2, 2018)
------------------
### Changed
* Minor dependency version bump

2.27.0 - (September 25, 2018)
------------------
### Changed
* Minor dependency version bump

2.26.1 - (September 6, 2018)
------------------
### Changed
* Patch dependency version bump

2.26.0 - (September 5, 2018)
------------------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

2.25.0 - (September 4, 2018)
------------------
### Changed
* Minor dependency version bump

2.24.0 - (August 29, 2018)
------------------
### Changed
* Minor dependency version bump

2.23.0 - (August 22, 2018)
------------------
### Changed
* Added additional theming variables, minor styles update, updated wdio tests

2.22.0 - (August 21, 2018)
------------------
### Changed
* Minor dependency version bump

2.21.0 - (August 8, 2018)
------------------
### Removed
* Removed unnecessary onChange handler call in Optional RadioField example

### Changed
* Changed the questions to be accurate for the options in the RadioField examples
* Updated component internationalization error message

2.20.0 - (August 1, 2018)
------------------
### Changed
* Minor dependency version bump

2.19.0 - (July 26, 2018)
------------------
### Added
* Added sv and sv-SE translations

2.18.0 - (July 19, 2018)
------------------
### Changed
* Add .module extension to SCSS file(s)

2.17.0 - (July 17, 2018)
------------------
### Changed
* Minor dependency version bump
* Formatting changes per eslint v4 update
* Required props no longer set a default prop

2.16.0 - (July 10, 2018)
------------------
### Changed
* Minor dependency version bump

2.15.0 - (June 28, 2018)
------------------
### Changed
* Minor dependency version bump

### Added
* Added change log to the documentation on terra-dev-site

2.14.0 - (June 22, 2018)
------------------
### Changed
* Moved terra-base from dependency to peerDependency
* Updated test selectors to work with theme repos

2.13.0 - (June 12, 2018)
------------------
### Changed
* Updated field documentation to be more inline with other examples
* Updated "test:jest" script to work on windows.

2.12.0 - (May 30, 2018)
------------------
### Changed
* Updated structure to match terra-dev-site 1.0 and moved doc examples internal.

2.11.0 - (May 25, 2018)
------------------
### Changed
* Updated the README example code

2.10.0 - (May 23, 2018)
------------------
### Changed
* Minor dependency version bump

2.9.0 - (May 16, 2018)
------------------
### Changed
* Minor dependency version bump

2.8.0 - (May 9, 2018)
------------------
### Changed
* Minor dependency version bump

2.7.0 - (May 2, 2018)
------------------
### Changed
* Minor dependency version bump

2.6.0 - (April 20, 2018)
------------------
### Changed
* Minor dependency version bump

2.5.0 - (April 15, 2018)
------------------
### Changed
* Minor dependency version bump

2.4.0 - (April 5, 2018)
------------------
### Changed
* Minor dependency version bump

2.3.0 - (March 30, 2018)
------------------
### Changed
* Minor dependency version bump

2.2.0 - (March 6, 2018)
------------------
### Removed
* Removed props-table script from package.json

2.1.0 - (February 26, 2018)
------------------
### Changed
* Minor dependency version bump

2.0.1 - (February 13, 2018)
------------------
### Changed
* Updated peerDependencies

2.0.0 - (February 12, 2018)
------------------
### Changed
* Updated to use React 16
* Update theming values to initial browser default for various properties
* Merged border-color, border-width, and border-style into short-hand syntax

1.1.0 - (February 1, 2018)
------------------
### Changed
* Minor dependency version bump

1.0.0 - (January 18, 2018)
-----------------
* Initial stable release
