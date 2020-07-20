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
    // console.log('componentDidMount project detail');
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
      // <ScrollView contentContainerStyle={[styles.container]}>
      <View style={styles.container}>
        {/* <View style={styles.input_profile}> */}

        <View style={styles.title_profile}>
          <Text style={styles.sub_title}>
            Name:
            <Text style={styles.title}> {this.state.name}</Text>
          </Text>
        </View>

        <View>
          <Text style={styles.title_description}>Thông tin chi tiết dự án</Text>
        </View>

        <View style={styles.form_input}>
          <View style={styles.form_group}>
            <Text style={styles.left}>Stocks:</Text>
            <Text style={styles.lable_stock}> {this.state.stocks}</Text>
          </View>
          <View style={styles.form_group}>
            <Text style={styles.left}>Price:</Text>
            <Text style={styles.lable_stock}> {this.state.price}</Text>
          </View>
          <View style={styles.form_group}>
            <Text style={styles.left}>Description:</Text>
            <Text style={styles.lable_stock}>{this.state.description} </Text>
          </View>
        </View>
        {/* </View> */}
      </View>
      // </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 24,
    width: '100%',
    flexWrap: 'wrap',
    backgroundColor: '#fbfbfd',
  },
  lable_stock: {
    fontSize: wp('5%'),
    fontFamily: 'lucida grande',
    color: '#0091ae',
    width: '100%',
    marginLeft: 10,
  },

  title_profile: {
    marginBottom: 38,

  },
  title_description: {
    fontSize: wp('5%'),
    letterSpacing: 1.15,
    borderBottomColor: '#8A8383',
    borderBottomWidth: 2,
  },
  title: {
    fontFamily: 'Rubik-Medium',
    fontSize: wp('6%'),
    //marginBottom: 4,
    color: '#0091ae',
    letterSpacing: 1.15,
  },
  sub_title: {
    fontFamily: 'Rubik-Regular',
    color: '#8da1b4',
    fontSize: wp('3.75%'),
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff7a59',
    paddingVertical: hp('3%'),
    borderRadius: 28,
    height: 30,
    fontFamily: 'Rubik',
    // flex: 1
  },
  btnText: {
    color: '#fff',
    fontSize: wp('4%'),
    fontFamily: 'Rubik-Medium',
  },
  Input: {
    borderRadius: 6,
    width: '100%',
    backgroundColor: '#f1f2f5',
    marginBottom: 16,
    paddingVertical: wp('2.25%'),
    paddingHorizontal: wp('2%'),
    fontSize: wp('4%'),
    fontFamily: 'Inconsolata-Regular',
  },
  form_input: {
    marginTop: 10,
  },
  form_group: {
    marginTop: 5,
    flexWrap: 'wrap',
    flexDirection: 'row',
    borderWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  left: {
    justifyContent: 'flex-end',
    color: '#46596b',
    fontSize: wp('3.5%'),
    marginBottom: 8,
    fontWeight: "bold",
    fontFamily: 'Inconsolata-Regular',

  },
  right: {
    flexDirection: 'row-reverse',
    textAlign: 'right',
  },
  datePicker: {
    width: '100%',
  },
  stock: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    fontFamily: 'Rubik-Medium',
    marginBottom: 4,
    color: '#0091ae',
  }
});