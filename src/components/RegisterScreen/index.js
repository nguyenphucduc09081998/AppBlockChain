import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class RegisterScreen extends Component {
  render() {
    return (
      <View style={styles.screenContainer}>
        <View style={styles.intro}>
          <View style={styles.title_profile}>
            <Text style={styles.title}>DANG KY BLOCKCHAIN</Text>
            <Text style={styles.sub_title}>Subtite de o day!</Text>
          </View>
        </View>
        <View style={styles.Register}>
          <View style={styles.inputContainer}>
            <View style={styles.form_group}>
              <TextInput placeholder={'Private Key'} style={styles.Input} />
            </View>

            <View style={styles.form_group}>
              <TextInput placeholder={'Public Key'} style={styles.Input} />
            </View>

            <View style={styles.form_group}>
              <TextInput
                placeholder={'Message'}
                multiline={true}
                numberOfLines={4}
                textAlignVertical="top"
                style={styles.Input}
              />
            </View>
          </View>

          {/* <TouchableOpacity style={styles.button}>
                        <Text style={styles.btntext}>Sign Up</Text>
                    </TouchableOpacity> */}
          <TouchableOpacity
            style={styles.button}
            // onPress={() => Alert.alert('Cannot press this one')}
          >
            <Text style={styles.btnText}>Đăng ký Blockchain</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fbfbfd',
    paddingHorizontal: 28,
    paddingTop: 24,
  },
  intro: {
    display: 'flex',
    justifyContent: 'flex-start',
    // backgroundColor: 'pink',
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
  logo: {
    display: 'flex',
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // backgroundColor: 'grey',
  },
  logoBlock: {
    // position: 'absolute',
    // backgroundColor: 'red',
    width: 90,
    height: 100,
  },
  logoBlockTxt: {
    fontFamily: 'Rubik-Medium',
    fontSize: 36,
    color: '#0091ae',
  },
  logoDotTxt: {
    fontFamily: 'Rubik-Medium',
    fontSize: 36,
    color: '#ff7a59',
  },
  logoChain: {
    backgroundColor: 'blue',
  },
  logoChainTxt: {
    fontFamily: 'Inconsolata-Regular',
    fontSize: 36,
    color: '#0091ae',
  },
  logoText: {
    backgroundColor: 'green',
  },
  Register: {
    alignSelf: 'stretch',
    paddingTop: 0,
  },
  header: {
    fontSize: wp('5.5%'),
    fontFamily: 'Rubik-Medium',
    color: '#000',
    marginBottom: wp('5.25%'),
    // textAlign: 'center',
  },
  inputContainer: {},
  textinput: {
    alignSelf: 'stretch',
    paddingVertical: 9,
    marginBottom: 0,
    color: 'red',
    borderBottomColor: '#bdbdbd',
    borderBottomWidth: 1,
    /* borderColor: '#999999',
        borderWidth: 1, */
  },
  noborderbottom: {
    borderBottomColor: 'transparent',
    borderBottomWidth: 0,
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
    marginBottom: 18,
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
});
