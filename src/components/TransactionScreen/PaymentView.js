import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    ListView,
    ScrollView,
    TouchableOpacity,
    Alert,
    Image,
    TextInput,
    Group,
    TouchableHighlight,
    Button,
  } from 'react-native';
  import {withNavigation} from 'react-navigation';
export default class PaymentView extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
        return (
            <View>
                <Text>this is stripe component</Text>
            </View>
        );
    }
};