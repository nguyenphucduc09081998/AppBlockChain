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

export default class TransactionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '2016-05-15',
      stock: 0,
      private_key: '426d4032eb945b3ae164273a073ea6159a0d9f3b34abc26c2379f27ce5cc31fc',
      public_key: '',
      //public_key:  45349a48fc30078dc98e226a0bc50b6f814eec2c3cb479ac40c758dd5d6fac68c0f543d53e93dabeed8f7b517424f9514183eb13466f87a24ac872080c1f6f01
      amount: 0,
      message: null
    };
  }
  getAvailableStock=() => {    
    let publicKey = globalVariable.userInfo ? globalVariable.userInfo.public_key : '';
    fetch( globalVariable.pythonDomain + "/balance?public_key=" + publicKey)
    .then((response) => response.json())
    .then((responseJson) => {    
      this.setState({stock: responseJson.balance});
    })
    .catch((error)=>{
    //  Alert.alert('Get stock fail');
      console.log('ERROR', error);
    });
  }

  createTransaction=() => {   
    console.log('GO TO CREATE');
    fetch( globalVariable.pythonDomain + "/transaction/create",{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "private_key": this.state.private_key,
        "public_key": this.state.public_key,
        "msg": this.state.message,
        "amount": this.state.amount
    })
    })
    .then((response) => response.json())
      .then((responseJson) => {    
        console.log('RESPONSE CREATE', responseJson);
        if(responseJson.code == responseCode.HTTP_OK){
          Alert.alert('Create transaction Success')
        }
      })
    .catch((error)=>{
      console.log('CREATE TRANSACTION FAIL', error);
      Alert.alert('Create transaction Fail')
    });
  }

  validCreateTransaction=() => {
    console.log('VALIDATE CREATE TRANSACTION');
    if(this.state.stock > this.state.amount){      
      this.createTransaction()
    }else{
      Alert.alert('You not enough stock');
    }
  }

  componentDidMount(){
    this.getAvailableStock();
  }

  componentDidUpdate() {    
    this.props.navigation.addListener('focus', ()=>{
      this.getAvailableStock();
    })
  }

  render() {
    return (
      <ScrollView contentContainerStyle={[styles.container]}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={styles.input_profile}>
            <View style={styles.title_profile}>
              <Text style={styles.title}>CREATE TRANSACTION</Text>
              <Text style={styles.sub_title}>
                Transaction Information
              </Text>
            </View>
            <View style={styles.stock}>
              <Text>Available Stock: {this.state.stock}</Text>
            </View>
            <View style={styles.form_input}>
              <View style={styles.form_group}>
                <Text style={styles.left}> Your Private key</Text>
                <TextInput 
                  style={[styles.Input]} 
                  onChangeText={(private_key) => this.setState({ private_key })} 
                  value={this.state.private_key}/>
              </View>
              <View style={styles.form_group}>
                <Text style={styles.left}>Partner Public key</Text>
                <TextInput 
                  style={styles.Input} 
                  onChangeText={(public_key) => this.setState({ public_key })} 
                  value={this.state.public_key}/>
              </View>
              <View style={styles.form_group}>
                <Text style={styles.left}>Amount</Text>
                <TextInput 
                  style={styles.Input} 
                  onChangeText={(amount) => this.setState({ amount })} 
                  value={this.state.amount}/>
              </View>
              <View style={styles.form_group}>
                <Text style={styles.left}>Message</Text>
                <TextInput
                  multiline={true}
                  numberOfLines={4}
                  textAlignVertical="top"
                  style={styles.Input} onChangeText={(message) => this.setState({ message })}
                  value={this.state.message}
                />
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={styles.button}
            // onPress={this.validCreateTransaction()}
            onPress={this.validCreateTransaction.bind(this)}

          >
            <Text style={styles.btnText}>Send</Text>
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
    marginBottom: 5,
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
  stock:{
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    fontFamily: 'Rubik-Medium',
    marginBottom: 4,
    color: '#0091ae',
  }
});