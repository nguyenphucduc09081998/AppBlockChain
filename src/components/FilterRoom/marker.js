import React from 'react';
import { StyleSheet, View } from 'react-native';

class CustomMarker extends React.Component {
  render() {
    return (
          <View style={styles.myButton}></View>
    );
  }
}

const styles = StyleSheet.create({
  myButton:{
    padding: 5,
    height: 15,
    width: 15,  //The Width must be the same as the height
    borderRadius:400, //Then Make the Border Radius twice the size of width or Height   
    backgroundColor:'white',
    borderColor: 'gray',
    borderWidth: 0.5,
  }
});

export default CustomMarker;