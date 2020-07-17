/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// import {createStackNavigator} from "react-navigation";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import { BottomTabs } from './src/components';
import RegisterScreen from './src/components/RegisterScreen';// navigation OK
import LoginScreen from './src/components/LoginScreen';// navigation fail
import RegisterUserScreen from './src/components/RegisterUserScreen'; // navigation OK
import TransactionScreen from './src/components/TransactionScreen';// navigation OK
import PaymentView from './src/components/TransactionScreen/PaymentView';// navigation OK
import HistoryScreen from './src/components/HistoryScreen';// navigation OK
import ProjectDetail from './src/components/ProjectDetail';// navigation OK
// const App = createStackNavigator({
//   RegisterScreen: { screen: RegisterScreen},
//   BottomTabs: {screen: BottomTabs},
//   // RegisterUserScreen:{screen: RegisterUserScreen},
// },{
//   initialRouteName: 'RegisterScreen'
// });
const App = () => (
  <NavigationContainer>
    <StackNavigations />
  </NavigationContainer>  
);
const Stack = createStackNavigator();
const StackNavigations = () => (
  <Stack.Navigator initialRouteName="BottomTabs" screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterUserScreen" component={RegisterUserScreen} />
  </Stack.Navigator>
);


// const Stack = createStackNavigator();

// const StackNavigations = () => (
//   <Stack.Navigator initialRouteName="Transactions" screenOptions={{
//     headerShown: false
//   }}>
//       <Stack.Screen name="Transactions" component={TransactionScreen} />
//       <Stack.Screen name="PaymentView" component={PaymentView} />
//   </Stack.Navigator>
// );

/// dung
// const App: () => React$Node = () => {
//   return (
//     <>
//     <BottomTabs></BottomTabs>
//     </>
//   );
// };
export default App;
