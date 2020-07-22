import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  Alert
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import globalVariable from '../../../global/globalVariable';
import responseCode from '../../../global/responseCode';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class ProjectScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stocks: "",
      price: "",
      description: ""
    }
  }

  componentDidMount() {
    fetch(globalVariable.phpDomain + "/api/auth/projectdetail")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ stocks: responseJson[0].stocks });
        this.setState({ name: responseJson[0].name });
        this.setState({ price: responseJson[0].price });
        this.setState({ description: responseJson[0].description });
      })
      .catch(error => {
        console.error(error);
      });

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title_profile}>
          <Text style={styles.sub_title}>
            Name:
            <Text style={styles.title}> {this.state.name}</Text>
          </Text>
          <Text style={styles.title_description}>Thông tin chi tiết dự án</Text>
        </View>

        <View  style={styles.content}>
          <View style={[styles.form_group, styles.borderBtm]}>
            <Text style={styles.left}>Stocks:</Text>
            <Text style={styles.lable_stock}> {this.state.stocks}</Text>
          </View>
          <View style={[styles.form_group, styles.borderBtm]}>
            <Text style={styles.left}>Price:</Text>
            <Text style={styles.lable_stock}> {this.state.price}</Text>
          </View>
          <View style={styles.form_group}>
            <Text style={styles.left}>Description:</Text>
            <Text style={styles.lable_stock}>{this.state.description} </Text>
          </View>
        </View>
        
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    paddingTop: 24,
    width: '100%',
    height: '100%',
    backgroundColor: '#fbfbfd',
    fontFamily: 'Barlow',
  },
  lable_stock: {
    fontSize: wp('5%'),
    color: '#0091ae',
    marginLeft: 10,
  },
  title_profile: {
    borderBottomColor: '#8A8383',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  title_description: {
    fontSize: wp('4%'),
    letterSpacing: 1.15,
  },
  title: {
    fontSize: wp('6%'),
    color: '#0091ae',
    letterSpacing: 1.15,
  },
  sub_title: {
    color: '#8da1b4',
    fontSize: wp('3.75%'),
    marginBottom: 20,
  },
  content: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#8da1b4',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    paddingBottom: 15,
  },
  form_group: {
    display: 'flex',
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    color: '#46596b',
    fontSize: wp('3.5%'),
    fontWeight: "bold",
  },
  borderBtm: {
    borderBottomWidth: 1,
    borderBottomColor: '#46596b',
    paddingBottom: 10,
  },
});