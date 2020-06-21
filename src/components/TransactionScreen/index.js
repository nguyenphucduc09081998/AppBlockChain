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
    fontSize: 24,
    marginBottom: 4,
    color: '#0091ae',
    letterSpacing: 1.15,
  },
  sub_title: {
    fontFamily: 'Rubik-Regular',
    color: '#8da1b4',
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff7a59',
    paddingVertical: 28,
    marginTop: 10,
    borderRadius: 28,
    height: 30,
    fontSize: 20,
    fontFamily: 'Rubik',
    // flex: 1
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Rubik-Medium',
  },
  Input: {
    borderRadius: 6,
    width: '100%',
    backgroundColor: '#f1f2f5',
    marginBottom: 16,
    paddingVertical: 14,
    paddingHorizontal: 12,
    fontSize: 20,
    fontFamily: 'Inconsolata-Regular',
  },
  form_input: {
    marginBottom: 14,
  },
  form_group: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  left: {
    justifyContent: 'flex-end',
    color: '#46596b',
    fontSize: 14,
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
