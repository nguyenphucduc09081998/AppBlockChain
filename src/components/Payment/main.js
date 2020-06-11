import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput
} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';

import { createAppContainer  } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';


class Credit extends React.Component {

  render() {
    return (
      <SafeAreaView>
      <ScrollView>
        <>
          <View style={{flexDirection: 'row', width: '100%', marginTop: 10
                    }}>
              <View style={{width: '35%'}}>
                  <Text style={{fontSize: 12, color: 'black', marginTop: '13%'}} >Mã thẻ Credit Card:<Text style={{color: 'red'}}>*</Text></Text>
              </View>
              <View style={{width: '55%'}}>
              <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Mã thẻ Credit Card"
                  placeholderTextColor = "#C6C6C6"
                  autoCapitalize = "none"/>
              </View>
          </View>
          <View style={{flexDirection: 'row', width: '100%', paddingBottom: 6      
                    }}>
              <View style={{width: '35%'}}>
                  <Text style={{fontSize: 12, color: 'black', marginTop: '30%'}} >Loại thẻ:<Text style={{color: 'red'}}>*</Text></Text>
              </View>
              <View style={{width: '55%'}}>
                <Dropdown
                      baseColor='#EA0C41'
                      textColor='#8D7E7E'
                      rippleCentered={true}
                      data={cardType}
                      value={'Chọn loại thẻ'}
                      fontSize={12}
                      labelFontSize={13}
                    />
              </View>
          </View>
        </>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

class Paypal extends React.Component {

  render() {
    return (
      <SafeAreaView>
      <ScrollView>
        <>
          <View style={{flexDirection: 'row', width: '100%', marginTop: 10   
                    }}>
              <View style={{width: '30%'}}>
                  <Text style={{fontSize: 12, color: 'black', marginTop: '13%'}} >Mã thẻ Visa:<Text style={{color: 'red'}}>*</Text></Text>
              </View>
              <View style={{width: '55%'}}>
              <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Mã thẻ Visa"
                  placeholderTextColor = "#C6C6C6"
                  autoCapitalize = "none"/>
              </View>
          </View>
          <View style={{flexDirection: 'row', width: '100%'
                    }}>
              <View style={{width: '30%'}}>
                  <Text style={{fontSize: 12, color: 'black', marginTop: '30%'}} >Loại thẻ:<Text style={{color: 'red'}}>*</Text></Text>
              </View>
              <View style={{width: '50%'}}>
                <Dropdown
                      baseColor='#EA0C41'
                      textColor='#8D7E7E'
                      rippleCentered={true}
                      data={cardType}
                      value={'Chọn loại thẻ'}
                      fontSize={12}
                      labelFontSize={13}
                    />
              </View>
          </View>
        </>
      </ScrollView>
      </SafeAreaView>
    );
  }
}




const TabPaymentNavigator  = createMaterialTopTabNavigator(
  {
    'Credit card': Credit,
    'Paypal': Paypal,
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 11,
        color: '#464646',
        fontWeight: '600',
        fontFamily: 'Lora',
      
      },
      tabStyle: {
        borderColor: '#C6C6C6',
        borderWidth: 0.4,
        borderRadius: 10
      },
      style: {
        backgroundColor: 'white',
        borderColor: 'black',
        marginRight: 10,
        width: '97%',
        height: 35,

      },
      activeTintColor:'red',
      upperCaseLabel:false,
    }
  }
);

const TabPayment = createAppContainer(TabPaymentNavigator );

export default TabPayment;

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row', 
    marginTop: 20, 
    width: '90%',
  },
  commentText: {
    fontSize: 11, 
    color: '#6A6767', 
    marginTop: 10,  
    paddingBottom: 15,
    width: '98%',
  },
  moreInfo: {
    fontSize: 10,
    color: '#696666',
    marginTop: 10

  },
  moreService: {
    fontSize: 7,
    color: '#696666',
    marginTop: 9.5,
    marginLeft: 5,
    fontWeight: '800'
  },
  descriptInfo: {
    fontSize: 13,
    color: '#373737',
    marginTop: 10
  },
  imgInfo: {
    width: 15, 
    height: 15,
  },
  imgService: {
    width: 20, 
    height: 20,
  },
  input: {
    marginTop: 10,
    height: 35,
    borderColor: '#C6C6C6',
    borderWidth: 1,
    fontSize: 10,
    borderRadius: 10
 },
});

const cardType = [
  { value: 'Vietcombank'},
  { value: 'Argribank' },
  { value: 'ACB' },
  { value: 'BIDV' },
];