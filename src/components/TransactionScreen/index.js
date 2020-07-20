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
      public_key: '30f13fbf1340d2df2afbbff7ba7120a23600949d680a468e37a0c2b49c7caba42d2c97f9bcc172122854152b45e6280a0d28211c56f6d2704ceeaa1f67de8906',
      amount: 0,
      message: null
    };
  }
  getAvailableStock=() => {    
    let publicKey = globalVariable.userInfo ? globalVariable.userInfo.public_key : '';
    fetch( globalVariable.pythonDomain + "/balance?public_key=" + publicKey)
    .then((response) => response.json())
    .then((responseJson) => {    
      Alert.alert('Get stock success')
      console.log("responseJson:", responseJson);
      this.setState({stock: responseJson.balance});
    })
    .catch((error)=>{
      Alert.alert('Get stock fail');
      console.log('ERROR', error);
    });
  }

  createTransaction=() => {   
    let formData = new FormData();
    formData.append("private_key", this.state.private_key);
    formData.append("public_ley", this.state.public_key);
    formData.append("msg", this.state.message);
    formData.append("amount", this.state.amount);
    fetch( globalVariable.pythonDomain + "/transaction/create",{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: formData
    })
    .then((response) => response.json())
      .then((responseJson) => {    
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
    if(this.state.stock > this.state.amount){
      this.createTransaction()
    }else{
      Alert.alert('You not enough stock');
    }
  }

  componentDidMount(){
    console.log('MOUNT FUNC');
    this.getAvailableStock();
  }

  componentDidUpdate() {
    console.log('Component did update');
    
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
                <TextInput style={[styles.Input]} value={this.state.private_key}/>
              </View>
              <View style={styles.form_group}>
                <Text style={styles.left}>Partner Public key</Text>
                <TextInput style={styles.Input}  value={this.state.public_key}/>
              </View>
              <View style={styles.form_group}>
                <Text style={styles.left}>Amount</Text>
                <TextInput style={styles.Input}  value={this.state.amount}/>
              </View>
              <View style={styles.form_group}>
                <Text style={styles.left}>Message</Text>
                <TextInput
                  multiline={true}
                  numberOfLines={4}
                  textAlignVertical="top"
                  style={styles.Input}
                  value={this.state.message}
                />
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={this.validCreateTransaction()}
          >
            <Text style={styles.btnText}>Create Transaction</Text>
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
  stock:{
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    fontFamily: 'Rubik-Medium',
    marginBottom: 4,
    color: '#0091ae',
  }
});