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
import HistoryScreen from '../HistoryScreen/index';
import DetailHistoryScreen from '../DetailHistoryScreen/index';

import { createAppContainer  } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Table, Rows } from 'react-native-table-component';


// class YeuThich extends React.Component {
  
//   render() {
//     return (
//       <SafeAreaView>
//       <ScrollView>
//         <>
//         <View style={{marginTop: 15, marginLeft: 10, }}>
//           <Text style={{fontSize: 14, fontWeight: '600'}}>Bộ sưu tập của bạn</Text>
//           <Text style={{fontSize: 9, color: '#929191' }}>Tận hưởng không gian sống tuyệt vời tại thương hiệu đô thị hàng đầu Việt Nam
// </Text>
//           <View style={{flexDirection: 'row',          
//                         marginRight: 5,
                
//                         }}>
//             <View style={{width: '40%'}}>
//               <TouchableOpacity  onPress={() => {
//                 this.props.navigation.navigate('RoomDetails');
//               }}>
//                 <Image source={require('../../../img/room2.jpg')}
//                     style={styles.imgSuggest} />
//               </TouchableOpacity>
//             </View>
//             <View style={{width: '60%', marginLeft: 15, marginTop: 10}}>
//               <TouchableOpacity  onPress={() => {
//                 this.props.navigation.navigate('RoomDetails');
//               }}>
//                 <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 10, color: '#1B51DA',}}>Mường Thanh Luxury Apartment</Text>
//                 <Text>
//                   <Image source={require('../../../img/location.png')}
//                   style={styles.iconInfo} />   <Text style={styles.moreInfo}>Ngũ Hành Sơn, Đà Nẵng, Việt Nam</Text>
//                 </Text> 
//                 <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 11, color: '#3E3C3C', marginTop: 5}}>1,800,000₫  <Text style={{fontSize: 8, color: '#696666'}}>(1 đêm)</Text></Text>
//                 <View style={{borderBottomWidth: 0.7, borderBottomColor: '#c6c6c6', paddingBottom: 6}}></View>
//                 <View style={{width: '95%'}}>
//                   <Text style={{fontSize: 9, color: '#6A6767', marginTop: 6}} >
//                   Được xây dựng theo tiêu chuẩn 5 sao Mường Thanh Luxury Đà Nẵng nằm bên bờ biển Mỹ Khê xinh đẹp, quý phái,... 
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//             </View>
//           </View>

//           <View style={{flexDirection: 'row',          
//                         marginRight: 5,
//                         marginTop: 20,
//                         }}>
//             <View style={{width: '40%'}}>
//               <TouchableOpacity  onPress={() => {
//                 this.props.navigation.navigate('RoomDetails');
//               }}>
//               <Image source={require('../../../img/room4.jpg')}
//                     style={styles.imgSuggest} />
//               </TouchableOpacity>
//             </View>
//             <View style={{width: '60%', marginLeft: 15, marginTop: 10}}>
//               <TouchableOpacity  onPress={() => {
//                 this.props.navigation.navigate('RoomDetails');
//               }}>
//                 <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 10, color: '#1B51DA'}}>Noble Apartment Studio 1</Text>
//                 <Text>
//                   <Image source={require('../../../img/location.png')}
//                   style={styles.iconInfo} />   <Text style={styles.moreInfo}>Cầu Giấy, Hà Nội, Việt Nam</Text>
//                 </Text> 
//                 <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 11, color: '#3E3C3C', marginTop: 5}}>1,000,000₫  <Text style={{fontSize: 8, color: '#696666'}}>(1 đêm)</Text></Text>
//                 <View style={{borderBottomWidth: 0.7, borderBottomColor: '#c6c6c6', paddingBottom: 6}}></View>
//                 <View style={{width: '95%'}}>
//                   <Text style={{fontSize: 9, color: '#6A6767', marginTop: 6}} >
//                   Được xây dựng theo tiêu chuẩn 5 sao Mường Thanh Luxury Đà Nẵng nằm bên bờ biển Mỹ Khê xinh đẹp, quý phái,... 
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//             </View>
//           </View>

//           <View style={{flexDirection: 'row',          
//                         marginRight: 5,
//                         marginTop: 20,
//                         }}>
//             <View style={{width: '40%'}}>
//               <TouchableOpacity  onPress={() => {
//                 this.props.navigation.navigate('RoomDetails');
//               }}>
//               <Image source={require('../../../img/room3.jpg')}
//                     style={styles.imgInfo} />
//             </TouchableOpacity>
//             </View>
//             <View style={{width: '60%', marginLeft: 15, marginTop: 10}}>
//               <TouchableOpacity  onPress={() => {
//                 this.props.navigation.navigate('RoomDetails');
//               }}>
//                 <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 10, color: '#1B51DA'}}>Luxury Apartment - The Golden</Text>
//                 <Text>
//                   <Image source={require('../../../img/location.png')}
//                   style={styles.iconInfo} />   <Text style={styles.moreInfo}>Hoàn Kiếm, Hà Nội, Việt Nam</Text>
//                 </Text> 
//                 <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 11, color: '#3E3C3C', marginTop: 5}}>3,500,000₫  <Text style={{fontSize: 8, color: '#696666'}}>(1 đêm)</Text></Text>
//                 <View style={{borderBottomWidth: 0.7, borderBottomColor: '#c6c6c6', paddingBottom: 6}}></View>
//                 <View style={{width: '95%'}}>
//                   <Text style={{fontSize: 9, color: '#6A6767', marginTop: 6}} >
//                   Được xây dựng theo tiêu chuẩn 5 sao Mường Thanh Luxury Đà Nẵng nằm bên bờ biển Mỹ Khê xinh đẹp, quý phái,... 
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//             </View>
//           </View>
//           <View style={{paddingTop: 0, marginTop: 0, marginLeft: '30%'}}>
//               <TouchableHighlight
//                 style={styles.button}
//                 >
//                 <Text style={{color: '#292929',fontFamily: 'serif', fontSize: 10, fontWeight: '700'}}>Xem thêm</Text>
//               </TouchableHighlight>
//             </View>
//         </View>
//         </>
//       </ScrollView>
//       </SafeAreaView>
//     );
//   }
// }

// class DatCho extends React.Component {

//   render() {
//     return (
//       <SafeAreaView>
//       <ScrollView>
//         <>
//         <View style={{marginTop: 15, marginLeft: 10, }}>
//           <Text style={{fontSize: 14, fontWeight: '600'}}>Danh sách phòng đã đặt</Text>
//           <Text style={{fontSize: 9, color: '#929191' }}>Tận hưởng không gian sống tuyệt vời tại thương hiệu đô thị hàng đầu Việt Nam
// </Text>
//           <View style={{flexDirection: 'row',          
//                         marginRight: 5,
                
//                         }}>
//             <View style={{width: '40%'}}>
//               <TouchableOpacity  onPress={() => {
//                 this.props.navigation.navigate('RoomDetails');
//               }}>
//                 <Image source={require('../../../img/room2.jpg')}
//                     style={styles.imgSuggest} />
//               </TouchableOpacity>
//             </View>
//             <View style={{width: '60%', marginLeft: 15, marginTop: 10}}>
//               <TouchableOpacity  onPress={() => {
//                 this.props.navigation.navigate('RoomDetails');
//               }}>
//                 <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 10, color: '#1B51DA',}}>Mường Thanh Luxury Apartment</Text>
//                 <Text>
//                   <Image source={require('../../../img/location.png')}
//                   style={styles.iconInfo} />   <Text style={styles.moreInfo}>Ngũ Hành Sơn, Đà Nẵng, Việt Nam</Text>
//                 </Text> 
//                 <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 11, color: '#3E3C3C', marginTop: 5}}>1,800,000₫  <Text style={{fontSize: 8, color: '#696666'}}>(1 đêm)</Text></Text>
//                 <View style={{borderBottomWidth: 0.7, borderBottomColor: '#c6c6c6', paddingBottom: 6}}></View>
//                 <View style={{width: '95%'}}>
//                   <Text style={{fontSize: 9, color: '#6A6767', marginTop: 6}} >
//                   Được xây dựng theo tiêu chuẩn 5 sao Mường Thanh Luxury Đà Nẵng nằm bên bờ biển Mỹ Khê xinh đẹp, quý phái,... 
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//             </View>
//           </View>

//           <View style={{flexDirection: 'row',          
//                         marginRight: 5,
//                         marginTop: 20,
//                         }}>
//             <View style={{width: '40%'}}>
//               <TouchableOpacity  onPress={() => {
//                 this.props.navigation.navigate('RoomDetails');
//               }}>
//               <Image source={require('../../../img/room4.jpg')}
//                     style={styles.imgSuggest} />
//               </TouchableOpacity>
//             </View>
//             <View style={{width: '60%', marginLeft: 15, marginTop: 10}}>
//               <TouchableOpacity  onPress={() => {
//                 this.props.navigation.navigate('RoomDetails');
//               }}>
//                 <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 10, color: '#1B51DA'}}>Noble Apartment Studio 1</Text>
//                 <Text>
//                   <Image source={require('../../../img/location.png')}
//                   style={styles.iconInfo} />   <Text style={styles.moreInfo}>Cầu Giấy, Hà Nội, Việt Nam</Text>
//                 </Text> 
//                 <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 11, color: '#3E3C3C', marginTop: 5}}>1,000,000₫  <Text style={{fontSize: 8, color: '#696666'}}>(1 đêm)</Text></Text>
//                 <View style={{borderBottomWidth: 0.7, borderBottomColor: '#c6c6c6', paddingBottom: 6}}></View>
//                 <View style={{width: '95%'}}>
//                   <Text style={{fontSize: 9, color: '#6A6767', marginTop: 6}} >
//                   Được xây dựng theo tiêu chuẩn 5 sao Mường Thanh Luxury Đà Nẵng nằm bên bờ biển Mỹ Khê xinh đẹp, quý phái,... 
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//             </View>
//           </View>

//           <View style={{paddingTop: 0, marginTop: 0, marginLeft: '30%'}}>
//               <TouchableHighlight
//                 style={styles.button}
//                 >
//                 <Text style={{color: '#292929',fontFamily: 'serif', fontSize: 10, fontWeight: '700'}}>Xem thêm</Text>
//               </TouchableHighlight>
//             </View>
//         </View>
//         </>
//       </ScrollView>
//       </SafeAreaView>
//     );
//   }
// }

// class TinNhan extends React.Component {

//   render() {
//     return (
//       <SafeAreaView>
//       <ScrollView>
//         <>

//         </>
//       </ScrollView>
//       </SafeAreaView>
//     );
//   }
// }

// class TaiKhoan extends React.Component {

//   render() {
//     return (
//       <SafeAreaView>
//       <ScrollView>
//         <>
//           <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', marginTop: 40}}>
//               <View style={{width: '33.33%'}}>
//                   <TouchableOpacity  onPress={() => {
//                    this.props.navigation.navigate('Profile');
//                   }}>
//                   <Image source={require('../../../img/profile/edit.png')}
//                       style={{width: 20, height: 20, marginLeft: '85%', marginTop: '10%'}} />
//                       </TouchableOpacity>
//               </View>
//               <View style={{width: '30%', justifyContent: 'center', alignItems: 'center',}}>
//                 <Image source={require('../../../img/man.png')}
//                       style={{width: 55, height: 55}}/>
//                 <Text style={{ fontSize: 11, textAlign: 'center', fontWeight: '700',}}>Alex Hitchen</Text>
//                 <Text style={{fontSize: 8, textAlign: 'center', color: 'gray', fontWeight: '700'}}>Hà Nội, Việt Nam</Text>
//               </View>
//               <View style={{width: '30%'}}>
//                 <Image source={require('../../../img/profile/settings.png')}
//                       style={{width: 20, height: 20, marginLeft: '0%', marginTop: '12%'}} />
//               </View>
//           </View>
//           <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', marginTop: 30}}>
//               <View style={{width: '33.33%'}}>
//                 <Text style={{ fontSize: 16, textAlign: 'center', fontWeight: '700',}}>02</Text>
//                 <Text style={{fontSize: 10, textAlign: 'center', color: 'gray', fontWeight: '700'}}>Chuyến Đi</Text>
//               </View>
//               <View style={{width: '32%'}}>
//                 <Text style={{ fontSize: 16, textAlign: 'center', fontWeight: '700',}}>05</Text>
//                 <Text style={{fontSize: 10, textAlign: 'center', color: 'gray', fontWeight: '700'}}>Địa Điểm</Text>
//               </View>
//               <View style={{width: '30%'}}>
//               <Text style={{ fontSize: 16, textAlign: 'center', fontWeight: '700',}}>4.5</Text>
//                 <Text style={{fontSize: 10, textAlign: 'center', color: 'gray', fontWeight: '700'}}>Đánh Giá Trung Bình</Text>
//               </View>
//           </View>
          
//           <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', marginTop: 30}}>
//           <Text style={{fontSize: 11, color: 'black', fontWeight: '700', width: '100%', marginLeft: '7%',  marginBottom: '1%'}}>Chuyến đi trước</Text>
//               <View style={{width: '33.33%', position: 'relative'}}>
//                 <Image source={require('../../../img/profile/distance.png')}
//                       style={{width: 20, height: 20, position: 'absolute', top: 15, right: -15}} />
//                 <Text style={{fontSize: 8, textAlign: 'center', color: 'gray', fontWeight: '700',}}>07.02.2020</Text>
//                 <Text style={{fontSize: 14, textAlign: 'center', fontWeight: '700'}}>07:25</Text>
//                 <Text style={{fontSize: 10, textAlign: 'center', color: 'gray', fontWeight: '700'}}>Cà Mau</Text>
                
//               </View>
//               <View style={{width: '30%', position: 'relative'}}>
//                 <Image source={require('../../../img/profile/distance.png')}
//                       style={{width: 20, height: 20, position: 'absolute', top: 15, right: -15}} />
//                 <Text style={{ fontSize: 8, textAlign: 'center', color: 'gray', fontWeight: '700',}}>08.02.2020</Text>
//                 <Text style={{fontSize: 14, textAlign: 'center', fontWeight: '700'}}>18:40</Text>
//                 <Text style={{fontSize: 10, textAlign: 'center', color: 'gray', fontWeight: '700'}}>Đất Mũi</Text>
//               </View>
//               <View style={{width: '30%'}}>
//                 <Text style={{ fontSize: 8, textAlign: 'center', color: 'gray', fontWeight: '700',}}>09.02.2020</Text>
//                 <Text style={{fontSize: 14, textAlign: 'center', fontWeight: '700'}}>20:45</Text>
//                 <Text style={{fontSize: 10, textAlign: 'center', color: 'gray', fontWeight: '700'}}>Cần Thơ</Text>
//               </View>
//           </View>
//           <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', marginTop: 30}}>
//           <Text style={{fontSize: 11, color: 'black', fontWeight: '700', width: '100%', marginLeft: '7%',  marginBottom: '1%'}}>Chuyến đi gần đây</Text>
//               <View style={{width: '23%', marginLeft: '5%', marginRight: '1%'}}>
//                 <TouchableOpacity  onPress={() => {
//                   this.props.navigation.navigate('RoomDetails');
//                 }}>
//                   <Image source={require('../../../img/room1.jpg')}
//                         style={styles.imgInfo} />
//                   <Text style={{fontSize: 8, textAlign: 'center', color: '#1B51DA', fontWeight: '700',}}>Mường Thanh Luxury Apartment</Text>
//                   <Text style={{fontSize: 10, textAlign: 'center', color: 'gray', fontWeight: '600'}}>Hà Nội</Text>
//                 </TouchableOpacity>
//               </View>
//               <View style={{width: '22%', marginRight: '1%'}}>
//                 <TouchableOpacity  onPress={() => {
//                   this.props.navigation.navigate('RoomDetails');
//                 }}>
//                   <Image source={require('../../../img/room2.jpg')}
//                         style={styles.imgInfo} />
//                   <Text style={{fontSize: 8, textAlign: 'center', color: '#1B51DA', fontWeight: '700',}}>San House - The Golden</Text>
//                   <Text style={{fontSize: 10, textAlign: 'center', color: 'gray', fontWeight: '600'}}>Bà Rịa</Text>
//                 </TouchableOpacity>
//               </View>
//               <View style={{width: '22%', marginRight: '1%'}}>
//                 <TouchableOpacity  onPress={() => {
//                   this.props.navigation.navigate('RoomDetails');
//                 }}>
//                   <Image source={require('../../../img/room3.jpg')}
//                         style={styles.imgInfo} />
//                   <Text style={{fontSize: 8, textAlign: 'center', color: '#1B51DA', fontWeight: '700',}}>Noble Apartment Studio 1</Text>
//                   <Text style={{fontSize: 10, textAlign: 'center', color: 'gray', fontWeight: '600'}}>Cà Mau</Text>
//                 </TouchableOpacity>
//               </View>
//               <View style={{width: '23%', marginRight: '1%'}}>
//                 <TouchableOpacity  onPress={() => {
//                   this.props.navigation.navigate('RoomDetails');
//                 }}>
//                   <Image source={require('../../../img/room4.jpg')}
//                         style={styles.imgInfo} />
//                   <Text style={{fontSize: 8, textAlign: 'center', color: '#1B51DA', fontWeight: '700',}}>Luxury Apartment - The Golden</Text>
//                   <Text style={{fontSize: 10, textAlign: 'center', color: 'gray', fontWeight: '600'}}>Phú Quốc</Text>
//                 </TouchableOpacity>
//               </View>
//           </View>
//         </>
//       </ScrollView>
//       </SafeAreaView>
//     );
//   }
// }

const TabNavigator  = createMaterialBottomTabNavigator  (
  {
    'Trang chủ': { 
      screen: () => <HistoryScreen/>, 
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
      screen: DetailHistoryScreen, 
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