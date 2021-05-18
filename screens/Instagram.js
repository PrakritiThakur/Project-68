import * as React from 'react';
import{StyleSheet,Text,View,Image} from 'react-native';
import {Header} from 'react-native-elements';
class Instagram extends React.Component{
  render(){
    return(
      <View>
        <Header backgroundColor={'magenta'}
          centerComponent={{
            text: 'Buzz App',
            style: { color: 'white', fontSize: 20 },
          }}/>
        <Image
              style = {styles.imageIcon}
              source ={require('../assets/Insta.jpg')}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  imageIcon : {
    marginTop : 100,
    width: 250,
    height: 200,
    marginLeft: 70,
  },
  
})
export default Instagram;