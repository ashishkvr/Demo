import {
  StyleSheet,
  Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginBottom: 10,
  },
  header: {
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
    alignItems:"center",
    flexDirection: "row",
    padding: 20,
  },
  headerContent: {
    fontSize: 15,
    color: "#000"
  },
  collapseView: {
    backgroundColor: "#fff",
    padding: 10
  },
  viewStyles: {
    flexDirection: "row",
    margin:15,
    alignItems: "center",
  },
  image: {
    width: width/8.6,
    height: height/15
  },
  textField: {
    color: "#000",
    fontSize: 13
  },
  textMessage: {
    paddingLeft: 20
  },
  commentArea: {
    margin: 10,
    borderRadius: 5,
    flexDirection: "row",
    backgroundColor: "#ededed",
    alignSelf: "center",
    width: width/1.3,
    justifyContent: "space-between",
    padding: 5
  },
  commentInput: {
    borderRadius: 5,
  },
  iconSend: {
    justifyContent: "center"
  }
});

module.exports = styles;
