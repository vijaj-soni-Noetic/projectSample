import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DefaultCss from './default.css';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
       
        <span className="ml-auto" style={{marginRight: '30%'}}><strong>Copyright © 2020 All Rights Reserved Software Solutions Provided by NIC-BSU <a href="#">NIC-BSU</a></strong></span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
