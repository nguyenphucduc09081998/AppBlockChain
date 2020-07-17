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

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     date: '2016-05-15',
  //     stock: 0
  //   };
  //   console.log('PROPS', this.props);
  // }
  // getAvailableStock=() => {
  //   console.log('Get avail stock');

  //   let publicKey = globalVariable.userInfo ? globalVariable.userInfo.public_key : '';
  //   fetch( globalVariable.pythonDomain + "/balance?public_key=" + publicKey)
  //   .then((response) => response.json())
  //   .then((responseJson) => {    
  //     Alert.alert('Get stock success')
  //     console.log("responseJson:", responseJson);
  //     this.setState({stock: responseJson.balance});
  //   })
  //   .catch((error)=>{
  //     Alert.alert('Get stock fail');
  //     console.log('ERROR', error);
  //   });
  // }

  componentDidMount() {
    console.log('MOUNT FUNC');
    console.log("globalVariable:", globalVariable.userInfo);
    //this.getAvailableStock();
  }

  // componentDidUpdate() {
  //   console.log('Component did update');

  //   this.props.navigation.addListener('focus', ()=>{
  //     this.getAvailableStock();
  //   })
  // }

  render() {
    return (
      <ScrollView contentContainerStyle={[styles.container]}>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View style={styles.input_profile}>

            <View style={styles.title_profile}>
              <Text style={styles.sub_title}>
                Name:
                <Text style={styles.title}> Duc Nguyen Hihi</Text>
              </Text>
            </View>

            <View>
              <Text style={styles.title_description}>Thông tin chi tiết dự án</Text>
            </View>

            <View style={styles.form_input}>
              <View style={styles.form_group}>
                <Text style={styles.left}>Stocks:</Text>
                <Text style={styles.lable_stock}> Duc Nguyen Hihi</Text>
              </View>
              <View style={styles.form_group}>
                <Text style={styles.left}>Price:</Text>
                <Text style={styles.lable_stock}> Duc Nguyen Hihi</Text>
              </View>
              <View style={styles.form_group}>
                <Text style={styles.left}>Description:</Text>
                <Text style={styles.lable_stock}> Is there an equivalent to this n equivalent to this CSS in React Native, so that the app uses the same font everywhere ?</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
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
  title_description:{
    fontSize: wp('5%'),
    letterSpacing: 1.15,

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
    marginBottom: hp('1.25%'),
  },
  form_group: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  left: {
    justifyContent: 'flex-end',
    color: '#46596b',
    fontSize: wp('3.5%'),
    marginBottom: 8,
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