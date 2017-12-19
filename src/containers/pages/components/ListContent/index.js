import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
// import { Icon } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import Collapsible from 'react-native-collapsible';
import { AVATAR } from "../../../utils/const";
import styles from "./styles";

export default class ListContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.onClicked = this.onClicked.bind(this);
  }

  onClicked() {
    this.setState({clicked: !this.state.clicked})
  }

  commentMessage(name, message) {
    return (
      <View style={styles.viewStyles}>
        <Image source={AVATAR} style={styles.image}/>
        <View style={styles.textMessage}>
          <Text style={styles.textField}>{name}</Text>
          <Text style={[styles.textField,{color: "blue"}]}>{message}</Text>
        </View>
      </View>
    )
  }

  commentBox() {
    return (
      <View style={styles.commentArea}>
        <View style={styles.commentInput}>
          <TextInput placeholder="Enter comments..." underlineColorAndroid="transparent"/>
        </View>
        <TouchableOpacity style={styles.iconSend}>
          <Icon name="ios-paper-plane" size={25} color="blue" />
        </TouchableOpacity>
      </View>
    )
  }

  content() {
    return(
      <View style={styles.collapseView}>
        <View style={{borderBottomWidth: .4}}/>
        {this.commentMessage("JOHN DOE","message1")}
        <View style={{borderBottomWidth: .4}}/>
        {this.commentMessage("JOHN DOE","message2")}
        <View style={{borderBottomWidth: .4}}/>
        {this.commentBox()}
        <View style={{borderBottomWidth: .4}}/>
      </View>
    )
  }
  render() {
    let { listField } = this.props;
    let { clicked } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.header} onPress={this.onClicked}>
          <Text style={styles.headerContent}>{listField}</Text>
          <TouchableOpacity onPress={this.onClicked}>
            <Icon name={ clicked ? "ios-arrow-down" : "ios-arrow-forward" } size={25} color= "blue"/>
          </TouchableOpacity>
        </TouchableOpacity>
        <Collapsible collapsed={!clicked}>
          {this.content()}
        </Collapsible>
      </View>
    );
  }
}

ListContent.propTypes = {
  listField: PropTypes.string,
};
