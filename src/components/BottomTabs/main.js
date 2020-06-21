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

import HomeScreen from '../HomeScreen/index';
import RoomDetails from '../RoomDetails/index';
import FilterRoom from '../FilterRoom/filtering';
// import Profile from '../Profile/index';
import Payment from '../Payment';
import RegisterScreen from '../RegisterScreen';
import TransactionScreen from '../TransactionScreen';
import HistoryScreen from '../HistoryScreen';
import DetailHistoryScreen from '../DetailHistoryScreen';

import {createAppContainer} from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Table, Rows} from 'react-native-table-component';

// const TabNavigator = createMaterialBottomTabNavigator(
//   {
//     'Giao Dịch': {
//       screen: () => <TransactionScreen />,
//       navigationOptions: {
//         tabBarLabel: 'Giao Dịch',
//         tabBarIcon: ({focused, tintColor:color}) => (
//           <Image source={require('../../../img/transaction.png')}
//                     style={{width: 22, height: 22}} />
//         ),
//       },
//     },
//     'Lịch Sử': {
//       screen: () => <HistoryScreen />,
//       navigationOptions: {
//         tabBarLabel: 'Lịch Sử',
//         tabBarIcon: ({focused, tintColor:color}) => (
//           <Image source={require('../../../img/booking.png')}
//                     style={{width: 22, height: 22}} />
//         ),
//       },
//     },
//     'Đăng Kí': {
//       screen: () => <RegisterScreen />,
//       navigationOptions: {
//         tabBarLabel: 'Đăng Kí',
//         tabBarIcon: ({focused, tintColor:color}) => (
//           <Image source={require('../../../img/register.png')}
//                     style={{width: 22, height: 22}} />
//         ),
//       },
//     },
//   },
//   // {
//   //   shifting: true,
//   //   activeColor: '#3e2465',
//   //   inactiveColor: 'gray',
//   //   barStyle: { backgroundColor: '#fff', shadowColor: '#000',
//   //   shadowOffset: { width: 1, height: 1 },
//   //   shadowOpacity: 0.8,
//   //   shadowRadius: 2,
//   //   elevation: 5,
//   //   paddingLeft: 20,
//   //   width: '160%',

//   //   },
//   //   // inactiveTintColor: '#f0edf6',
//   //   // activeTintColor: '#3e2465',
//   // },

// );

// const BottomTabs = createAppContainer(TabNavigator);

const Tab = createMaterialBottomTabNavigator();

const BottomTabs_New = () => {
  return (
    <Tab.Navigator
      initialRouteName="Transactions"
      activeColor="#fff"
      labelStyle={{fontSize: 12}}
      barStyle={{backgroundColor: '#0091ae'}}
      style={{backgroundColor: '#0091ae'}}>
      <Tab.Screen
        name="Transactions"
        component={TransactionScreen}
        options={{
          tabBarLabel: 'Giao Dịch',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../../img/transaction.png')}
              style={{width: 22, height: 22}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'Lịch Sử',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../../img/booking.png')}
              style={{width: 22, height: 22}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Registration"
        component={RegisterScreen}
        options={{
          tabBarLabel: 'Đăng Ký',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../../img/register.png')}
              style={{width: 22, height: 22}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

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
