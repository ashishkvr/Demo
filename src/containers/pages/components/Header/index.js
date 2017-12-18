import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from "./styles";

export default class Header extends Component {
  render() {
    let { headerText } = this.props;
    return (
      <View style={styles.header}>
        <Text style={styles.headerContent}>{headerText}</Text>
      </View>
    );
  }
}

Header.propTypes = {
  headerText: PropTypes.string,
};
