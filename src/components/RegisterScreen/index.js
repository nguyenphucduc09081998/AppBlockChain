import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class RegisterScreen extends Component {
  render() {
    return (
      <View style={styles.screenContainer}>
        <View style={styles.intro}>
          <View style={styles.logo}>
            <View style={styles.logoBlock}>
              <Text>
                <Text style={styles.logoBlockTxt}>BLOCKR</Text>{' '}
                <Text style={styles.logoDotTxt}>.</Text>
              </Text>
            </View>
            {/* <View style={styles.logoChain}>
                <Text style={styles.logoChainTxt}>CHAIN</Text>
              </View> */}
          </View>
        </View>
        <View style={styles.Register}>
          <Text style={styles.header}>Welcome.</Text>
          <View style={styles.inputContainer}>
            <View style={styles.form_group}>
              <TextInput placeholder={'Private Key'} style={styles.Input} />
            </View>

            <View style={styles.form_group}>
              <TextInput placeholder={'Public Key'} style={styles.Input} />
            </View>

            <View style={styles.form_group}>
              <TextInput placeholder={'Message'} style={styles.Input} />
            </View>
          </View>

          {/* <TouchableOpacity style={styles.button}>
                        <Text style={styles.btntext}>Sign Up</Text>
                    </TouchableOpacity> */}
          <TouchableOpacity
            style={styles.button}
            // onPress={() => Alert.alert('Cannot press this one')}
          >
            <Text style={styles.btnText}>Đăng ký</Text>
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
  },
  intro: {
    height: '35%',
    display: 'flex',
    justifyContent: 'flex-start',
    // backgroundColor: 'pink',
    paddingHorizontal: 54,
    paddingTop: 40,
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
    paddingHorizontal: 35,
    paddingTop: 0,
  },
  header: {
    fontSize: 24,
    fontFamily: 'Rubik-Medium',
    color: '#000',
    marginBottom: 28,
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
    backgroundColor: '#ff7a59',
    marginTop: 10,
    paddingVertical: 16,
    width: '100%',
    borderRadius: 20,
  },
  btnText: {
    color: '#fff',
    fontFamily: 'Rubik-Medium',
    fontSize: 20,
  },
  Input: {
    borderRadius: 6,
    width: '100%',
    backgroundColor: '#f1f2f5',
    marginBottom: 28,
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
});
