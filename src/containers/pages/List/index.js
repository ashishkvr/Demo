import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator, StatusBar, KeyboardAvoidingView } from "react-native";
import Header from "../components/Header";
import { data } from "../../utils/const";
import ListContent from "../components/ListContent";
import styles from "./styles";


class FlatListDemo extends Component {

  static navigationOptions = {
    headerMode: 'none',
    header: null,
    gesturesEnabled: false
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <StatusBar
          backgroundColor="#3bb2b2"
          barStyle="light-content"
        />
        <Header headerText="LOREM IPSUM"/>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ListContent listField={item.text} />
          )}
          keyExtractor={item => item.id}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default FlatListDemo;
