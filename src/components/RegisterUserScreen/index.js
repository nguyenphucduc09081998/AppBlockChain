import React, {Component} from 'react';
import globalVariable from '../../../global/globalVariable'
import responseCode from '../../../global/responseCode'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


export default class RegisterScreen extends Component {

  constructor(props){
    super(props);
    this.state ={
      name: "",
      email: "",
      password: "",
      comfirm_password: ""
    }
  }

  doRegister=()=>{
    fetch( globalVariable.phpDomain + "/api/auth/register",{
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          "name": this.state.name,
          "email": this.state.email,
          "password": this.state.password,
          "comfirm_password": this.state.comfirm_password,
          })
       })
      .then((response) => response.json())
        .then((responseJson) => {    
          if(responseJson.code == responseCode.HTTP_OK){
            Alert.alert('Register Success')
          }
        })
      .catch((error)=>{
        console.log('REGISTER FAIL', error);
      });
  }

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
          <Text style={styles.subHeader}>Signup to continue.</Text>
          <View style={styles.inputContainer}>
            <View style={styles.form_group}>
              <TextInput placeholder={'Name'} style={styles.Input} 
                  onChangeText={(name) => this.setState({name})}
                  value={this.state.name}  
              />
            </View>

            <View style={styles.form_group}>
              <TextInput placeholder={'Email'} style={styles.Input} 
                  onChangeText={(email) => this.setState({email})}    
                  value={this.state.email}  
              />
            </View>

            <View style={styles.form_group}>
              <TextInput placeholder={'Password'} style={styles.Input} secureTextEntry
                  onChangeText={(password) => this.setState({password})}
                  value={this.state.password}
              />
            </View>

            <View style={styles.form_group}>
              <TextInput
                placeholder={'Confirm Password'} style={styles.Input} secureTextEntry
                onChangeText={(confirm_password) => this.setState({confirm_password})}
                value={this.state.confirm_password}
              />
            </View>
          </View>

          {/* <TouchableOpacity style={styles.button}>
                        <Text style={styles.btntext}>Sign Up</Text>
                    </TouchableOpacity> */}
          <TouchableOpacity
            style={styles.button} 
            onPress={this.doRegister.bind(this)}
            // onPress={() => Alert.alert('Cannot press this one')}
          >
            <Text style={styles.btnText}>Signup</Text>
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
    paddingHorizontal: wp('8%'),
    paddingTop: 40,
  },
  intro: {
    height: hp('18%'),
    display: 'flex',
    justifyContent: 'flex-start',
    // backgroundColor: 'pink',
  },
  logo: {
    display: 'flex',
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 18,
    // backgroundColor: 'grey',
  },
  logoBlock: {
    // position: 'absolute',
    // backgroundColor: 'red',
    width: 90,
    height: 50,
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
    // textAlign: 'center',
  },
  subHeader: {
    fontFamily: 'Rubik-Regular',
    color: '#8da1b4',
    fontSize: wp('3.75%'),
    marginBottom: wp('5.25%'),
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
