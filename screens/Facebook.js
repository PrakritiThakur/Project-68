import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
class Facebook extends React.Component {
  render() {
    return (
      <View >
        <Header
          backgroundColor={'blue'}
          centerComponent={{
            text: 'Buzz App',
            style: { color: 'white', fontSize: 20 },
          }}
        />
        <Image
          style={styles.imageIcon}
          source={require('../assets/Facebook.png')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  imageIcon: {
      marginTop : 100,
    width: 250,
    height: 200,
    marginLeft: 70,
  },
});
export default Facebook;
