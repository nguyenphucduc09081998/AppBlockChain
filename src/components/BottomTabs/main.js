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

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import HomeScreen from '../HomeScreen/index';
import RoomDetails from '../RoomDetails/index';
import FilterRoom from '../FilterRoom/filtering';
import Profile from '../Profile/index';
import Payment from '../Payment/index';
import RegisterScreen from '../RegisterScreen/index';
import TransactionScreen from '../TransactionScreen/index';
import HistoryScreen from '../HistoryScreen/index';
import DetailHistoryScreen from '../DetailHistoryScreen/index';

import { createAppContainer  } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Table, Rows } from 'react-native-table-component';

const TabNavigator  = createMaterialBottomTabNavigator  (
  {
    'Trang chủ': { 
      screen: () => <TransactionScreen/>, 
      navigationOptions: {
        tabBarLabel: 'Trang chủ',
        tabBarIcon: ({focused, tintColor:color}) => (
          <Image source={require('../../../img/home.png')}
                    style={{width: 22, height: 22, tintColor: color,}} />
        ),
        
      },
    },
    'Yêu thích': { 
      screen: RegisterScreen, 
      navigationOptions: {
        tabBarLabel: 'Yêu thích',
        tabBarIcon: ({focused, tintColor:color}) => (
          <Image source={require('../../../img/heart.png')}
                    style={{width: 22, height: 22, tintColor: color}} />
        ),
       
      },
    },
    'Đặt chỗ': { 
      screen: HistoryScreen, 
      navigationOptions: {
        tabBarLabel: 'Đặt chỗ',
        tabBarIcon: ({focused, tintColor:color}) => (
          <Image source={require('../../../img/booking.png')}
                    style={{width: 22, height: 22, tintColor: color}} />
        ),
       
      },
    },
    'Lọc': { 
      screen: () => <DetailHistoryScreen/>,
      navigationOptions: {
        tabBarLabel: 'Lọc',
        tabBarIcon: ({focused, tintColor:color}) => (
          <Image source={require('../../../img/filtering.png')}
                    style={{width: 22, height: 22, tintColor: color}} />
        ),
        marginRight: 50,
      },
    },
    'Tin nhắn': { 
      screen: DetailHistoryScreen, 
      navigationOptions: {
        tabBarLabel: 'Tin nhắn',
        tabBarIcon: ({focused, tintColor:color}) => (
          <Image source={require('../../../img/email.png')}
                    style={{width: 22, height: 22, tintColor: color}} />
        ),
      },
    },
    'Tài khoản': { 
      screen: DetailHistoryScreen, 
      navigationOptions: {
        tabBarLabel: 'Tài khoản',
        tabBarIcon: ({focused, tintColor:color}) => (
          <Image source={require('../../../img/user.png')}
                    style={{width: 22, height: 22, tintColor: color}} />
        ),
        marginRight: 30,
      },
    },
    'FilterRoom': { 
      screen: () => <FilterRoom/>, 
      navigationOptions: {
        activeColor: 'white',
      },
    },
    'RoomDetails': { 
      screen: () => <RoomDetails/>, 
      navigationOptions: {
        activeColor: 'red',
      },
    },
    'Profile': { 
      screen: () => <Profile/>, 
      navigationOptions: {
        activeColor: 'red',
      },
    },
    'Payment': { 
      screen: () => <Payment/>, 
      navigationOptions: {
        activeColor: 'red',
      },
    },
  },
  {
    shifting: true,
    activeColor: '#3e2465',
    inactiveColor: 'gray',
    barStyle: { backgroundColor: '#fff', shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    paddingLeft: 20,
    width: '160%',

    },  
    // inactiveTintColor: '#f0edf6',
    // activeTintColor: '#3e2465',
  },
  
);

const BottomTabs = createAppContainer(TabNavigator );

export default BottomTabs;

const styles = StyleSheet.create({
  imgSuggest: {
    width: '100%', 
    height: 110,
    marginTop: 10,
    borderRadius: 14, 
  },

  iconInfo: {
    width: 15,
    height: 15
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
  container: {paddingLeft: 0, paddingRight: 10, paddingTop: 20, width: '90%' },
  head: { height: 40, backgroundColor: '#f1f8ff', fontFamily: 'serif' },
  text: { margin: 6, textAlign: 'center', fontFamily: 'serif' },
  containerProgress: {  
    width: "100%",  
    height: 23,  
    borderColor: "#FAA",  
    borderWidth: 1,   
    marginTop: 5,  
    marginRight: 4,
    justifyContent: "center",
    backgroundColor: '#C9C1C1',  
  },  
  inner:{  
    width: "100%",  
    height: '100%',  
    backgroundColor:"#28a745",  
  },  
  label:{  
    fontSize:11,  
    color: "white",  
    position: "absolute",  
    zIndex: 1,  
    fontWeight: '600',
    paddingLeft: 7,
  }  
});