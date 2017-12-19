import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomLink extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.alert('clicked!');
    this.setState({ clicked: true });
  }

  render() {
    const { title, url } = this.props;
    return <a href={url} onClick={this.handleClick}>{title}</a>;
  }
}

CustomLink.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CustomLink;
