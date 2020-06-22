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
import DatePicker from 'react-native-datepicker';

import {withNavigation} from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class TransactionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '2016-05-15',
    };
  }

  render() {
    return (
      <ScrollView contentContainerStyle={[styles.container]}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={styles.input_profile}>
            <View style={styles.title_profile}>
              <Text style={styles.title}>THÔNG TIN GIAO DỊCH</Text>
              <Text style={styles.sub_title}>
                Thông tin chi tiết người nhận
              </Text>
            </View>
            <View style={styles.form_input}>
              <View style={styles.form_group}>
                <Text style={styles.left}> Private key người gửi</Text>
                <TextInput style={[styles.Input]} />
              </View>
              <View style={styles.form_group}>
                <Text style={styles.left}>Public key người nhận</Text>
                <TextInput style={styles.Input} />
              </View>
              <View style={styles.form_group}>
                <Text style={styles.left}>Số Tiền</Text>
                <TextInput style={styles.Input} />
              </View>
              <View style={styles.form_group}>
                <Text style={styles.left}>Nội dung</Text>
                <TextInput
                  multiline={true}
                  numberOfLines={4}
                  textAlignVertical="top"
                  style={styles.Input}
                />
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={styles.button}
            // onPress={() => Alert.alert('Cannot press this one')}
          >
            <Text style={styles.btnText}>Chuyển khoản</Text>
          </TouchableOpacity>
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
  title_profile: {
    marginBottom: 38,
  },
  title: {
    fontFamily: 'Rubik-Medium',
    fontSize: wp('6%'),
    marginBottom: 4,
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
});
export default withNavigation(TransactionScreen);
