import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  ScrollView,
  SafeAreaView,
  // Animated,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import RegisterScreen from '../RegisterScreen';
import LoginScreen from '../LoginScreen';
import RegisterUserScreen from '../RegisterUserScreen';
import TransactionScreen from '../TransactionScreen';
import PaymentView from '../TransactionScreen/PaymentView';
import HistoryScreen from '../HistoryScreen';
// import DetailHistoryScreen from '../DetailHistoryScreen';

import {createAppContainer} from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Table, Rows} from 'react-native-table-component';
import Icon from 'react-native-vector-icons/Fontisto';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs_New = () => {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      activeColor="#0091ae"
      inactiveColor="#000"
      // activeColor="#fff"
      labelStyle={{fontSize: 12}}
      barStyle={{backgroundColor: '#fbfbfd'}}

    >
      <Tab.Screen
        name="NestedTransaction"
        component={StackNavigations}
        options={{
          tabBarLabel: 'Giao Dịch',
          tabBarIcon: ({color}) => (
            <Icon name="dollar" color={color} size={wp('4%')} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'Lịch Sử',
          tabBarIcon: ({color}) => (
            <Icon name="history" color={color} size={wp('4%')} />
          ),
        }}
      />
      <Tab.Screen
        name="Registration"
        component={RegisterScreen}
        options={{
          tabBarLabel: 'Đăng Ký',
          tabBarIcon: ({color}) => (
            <Icon name="qrcode" color={color} size={wp('4%')} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Đăng Nhập',
          tabBarIcon: ({color}) => (
            <Icon name="key" color={color} size={wp('4%')} />
          ),
        }}
      />
      <Tab.Screen
        name="Signup"
        component={RegisterUserScreen}
        options={{
          tabBarLabel: 'Đăng Ký',
          tabBarIcon: ({color}) => (
            <Icon name="comments" color={color} size={wp('4%')} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const StackNavigations = () => (
  <Stack.Navigator initialRouteName="Transactions" screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Transactions" component={TransactionScreen} />
      <Stack.Screen name="PaymentView" component={PaymentView} />
  </Stack.Navigator>
);

const WrappedBottomTabs = () => (
  <NavigationContainer>
    <BottomTabs_New />
  </NavigationContainer>
);

export default WrappedBottomTabs;

const styles = StyleSheet.create({
  imgSuggest: {
    width: '100%',
    height: 110,
    marginTop: 10,
    borderRadius: 14,
  },

  iconInfo: {
    width: 15,
    height: 15,
  },
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
    marginTop: 10,
  },
  moreService: {
    fontSize: 7,
    color: '#696666',
    marginTop: 9.5,
    marginLeft: 5,
    fontWeight: '800',
  },
  descriptInfo: {
    fontSize: 13,
    color: '#373737',
    marginTop: 10,
  },
  imgInfo: {
    width: '100%',
    height: 100,
    marginTop: 10,
    borderRadius: 5,
  },
  imgService: {
    width: 20,
    height: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#e2e5e8',
    padding: 5,
    width: 135,
    height: 25,
    borderRadius: 12,
    marginBottom: 20,
    marginTop: 20,
  },
  buttonBack: {
    alignItems: 'center',
    backgroundColor: '#07a',
    padding: 5,
    width: 125,
    height: 32,
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  container: {paddingLeft: 0, paddingRight: 10, paddingTop: 20, width: '90%'},
  head: {height: 40, backgroundColor: '#f1f8ff', fontFamily: 'serif'},
  text: {margin: 6, textAlign: 'center', fontFamily: 'serif'},
  containerProgress: {
    width: '100%',
    height: 23,
    borderColor: '#FAA',
    borderWidth: 1,
    marginTop: 5,
    marginRight: 4,
    justifyContent: 'center',
    backgroundColor: '#C9C1C1',
  },
  inner: {
    width: '100%',
    height: '100%',
    backgroundColor: '#28a745',
  },
  label: {
    fontSize: 11,
    color: 'white',
    position: 'absolute',
    zIndex: 1,
    fontWeight: '600',
    paddingLeft: 7,
  },
});
