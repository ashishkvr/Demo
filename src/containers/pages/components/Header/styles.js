import {
  StyleSheet,
  Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#55ffff",
    justifyContent: "center",
    alignItems: "center",
    height: height/10
  },
  headerContent: {
    fontSize: 15,
    color: "#000",
    fontWeight: "bold"
  },
});

module.exports = styles;
