import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  ScrollView,
  SafeAreaView,
  Animated,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import CalendarsScreen from './calendar';

import { createAppContainer  } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { Table, Rows } from 'react-native-table-component';


class TomTat extends React.Component {

  render() {
    return (
      <SafeAreaView>
      <ScrollView>
        <>
        <View style={styles.titleHotel}>
          <Text h4 style={{fontFamily: 'serif', fontWeight: '700'}}>Mường Thanh Luxury Apartment</Text> 
          <Text>
              <Image source={require('../../../img/location.png')}
              style={styles.imgInfo} />   <Text style={styles.moreInfo}>Ngũ Hành Sơn, Đà Nẵng, Việt Nam</Text>
          </Text>
          <Text>
              <Image source={require('../../../img/home.png')}
              style={styles.imgInfo} />   <Text style={styles.moreInfo}>Căn hộ chung cư · 65 m2</Text>
          </Text>
          <Text style={styles.descriptInfo} >Nguyên căn · 2 phòng tắm · 2 giường · 6 khách (tối đa 6 khách)</Text>
          <Text style={{ fontSize: 12, color: '#373737', marginTop: 10}} >Giới thiệu tổng quan</Text>
          <Text style={{ fontSize: 12, color: '#6A6767', marginTop: 6}} >
            Được xây dựng theo tiêu chuẩn 5 sao Mường Thanh Luxury Đà Nẵng nằm bên bờ biển Mỹ Khê xinh đẹp, sẽ mang đến cho du khách một không gian sang trọng, quý phái,... 
          </Text>
          <Text style={{ fontSize: 12, color: '#F65E39', marginTop: 8, textDecorationLine: 'underline',}} >Xem thêm</Text>
        </View>

        <View style={styles.titleHotel}>
            <Text h4 style={{ color: '#A19F9F', fontWeight: '700', fontFamily: 'serif' }}>Wifi Miễn Phí</Text>
        </View>

        <View style={styles.titleHotel}>
            <Text h4 style={{ color: '#A19F9F', fontWeight: '700', fontFamily: 'serif' }}>Cơ Sở Vật Chất</Text>
        </View>
        
        </>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

class TienNghi extends React.Component {
  
  render() {
    return (
      <SafeAreaView>
      <ScrollView>
        <>
        <View style={styles.titleHotel}>
          <Text style={{ fontSize: 12, color: '#6A6767', marginTop: 6}} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan bibendum tincidunt. Praesent quis consectetur ipsum. Sed faucibus dolor et ante hendrerit condimentum. 
          </Text>
          <Text style={{ fontSize: 12, color: '#F65E39', marginTop: 8, textDecorationLine: 'underline',}} ></Text>
        </View>

        <View style={styles.titleHotel}>
            <Text h4 style={{ color: 'black', fontWeight: '700', fontFamily: 'serif', marginBottom: 10 }}>Tiện nghi phòng</Text>
            <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
              <View style={{width:'30%'}}>
                <Text>
                  <Image source={require('../../../img/check.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Facility A</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('../../../img/check.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Facility B</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('../../../img/check.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Facility C</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('../../../img/check.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Facility D</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('../../../img/check.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Facility E</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('../../../img/check.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Facility F</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('../../../img/check.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Facility M</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('../../../img/check.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Facility N</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('../../../img/check.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Facility P</Text>
                </Text>
              </View>
            </View>
        </View>

        <View style={styles.titleHotel}>
            <Text h4 style={{ color: 'black', fontWeight: '700', fontFamily: 'serif', marginBottom: 10 }}>Tiện nghi giải trí</Text>
            <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
              <View style={{width:'30%'}}>
                <Text>
                  <Image source={require('../../../img/check_1.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Giải trí A</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('../../../img/check_1.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Giải trí B</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('../../../img/check_1.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Giải trí C</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('../../../img/check_1.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Giải trí D</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('../../../img/check_1.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Giải trí E</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('../../../img/check_1.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Giải trí F</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('../../../img/check_1.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Giải trí M</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('../../../img/check_1.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Giải trí N</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('../../../img/check_1.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Giải trí P</Text>
                </Text>
              </View>
            </View>
        </View>
      
        </>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

class GiaVaDatLich extends React.Component {

  state = {
    modalVisible: false,
      tableData: [
        ['Thứ hai - Thứ năm', '1,600,000đ'],
        ['Thứ sáu- Chủ nhật', '1,700,000đ'],
        ['Phí khách tăng thêm', '100,000đ (sau 6 khách)'],
        ['Số đêm tối thiểu', '1 đêm'],
      ],
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <SafeAreaView>
      <ScrollView>
        <>
        <View style={styles.titleHotel}>
          <Text h4 style={{fontFamily: 'serif', fontWeight: '700'}}>Giá Phòng</Text> 
          <Text style={{ fontSize: 12, color: '#6A6767', marginTop: 10}} >Giá có thể tăng vào cuối tuần hoặc ngày lễ</Text>
          <View style={styles.container}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Rows data={this.state.tableData} textStyle={styles.text}/>
            </Table>
          </View>
          <Text style={{ fontSize: 12, color: '#F65E39', marginTop: 8, textDecorationLine: 'underline',}} >Xem thêm</Text>
        </View>

        <View style={styles.titleHotel}>
            <Text h4 style={{ color: 'black', fontWeight: '700', fontFamily: 'serif' }}>Availability</Text>
            <CalendarsScreen></CalendarsScreen>
        </View>

        </>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

class DanhGia extends React.Component {
  state = {
    progressStatus: 0,  
    progressStatusReview: 0,  
  };
  
  anim = new Animated.Value(0);  
  componentDidMount(){  
      this.onAnimate();  
      
  }  

  onAnimate = () =>{  
      this.anim.addListener(({value})=> {  
          this.setState({progressStatus: parseInt(value,10)});  
      });  
      Animated.timing(this.anim,{  
            toValue: 80,  
            duration: 3000,  
      }).start();  
  }  

  render() {
    return (
      <SafeAreaView>
      <ScrollView>
        <>
        <View style={styles.titleHotel}>
          <Text h4 style={{fontFamily: 'serif', fontWeight: '700'}}>Đánh giá trung bình</Text> 
          
          <View style={styles.block}>
              <View style={{width: '35%'}}>
                  <Text style={[styles.label], {color: 'orange', fontSize: 25, marginTop: 12, marginRight: 'auto', marginBottom: 0, marginLeft: 'auto', fontFamily:'serif', 
                  fontWeight: '800'}} >4.0 / 5</Text>
              </View>
              <View style={{width: '65%'}}>
                  <View style={styles.containerProgress}>  
                      <Animated.View  
                          style={[  
                              styles.inner,{width: this.state.progressStatus +"%"},  
                          ]}  
                      />  
                      <Animated.Text style={styles.label}>  
                          {this.state.progressStatus }% thu thập ý kiến từ khách hàng 
                      </Animated.Text>  
                  </View>  
                  <View style={styles.containerProgress}>  
                      <View  
                          style={styles.inner}  
                      />  
                      <Text style={styles.label}>  
                          100% đánh giá dựa trên các bản Review
                      </Text>  
                </View> 
              </View>
          </View>
          
          <Text style={{ fontSize: 12, color: '#F65E39', marginTop: 8, textDecorationLine: 'underline',}} ></Text>
        </View>

        <View style={styles.titleHotel}>
            <Text h4 style={{ color: 'black', fontWeight: '700', fontFamily: 'serif' }}>Đánh giá dịch vụ</Text>
            <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
              <View style={{width:'30%'}}>
                <Text style={{position: "relative"  }}>
                  <Image source={require('../../../img/circle.png')}
                  style={styles.imgService} />   <Text style={styles.moreInfo}>Dịch vụ 1</Text>
                </Text>
                <View style={{position: "absolute",  zIndex: 1, top: 0, left: 0}}>
                  <Text style={styles.moreService}>4.0</Text>
                </View>
              </View>
              <View style={{width:'30%'}}>
                <Text style={{position: "relative"  }}>
                  <Image source={require('../../../img/circle.png')}
                  style={styles.imgService} />   <Text style={styles.moreInfo}>Dịch vụ 4</Text>
                </Text>
                <View style={{position: "absolute",  zIndex: 1, top: 0, left: 0}}>
                  <Text style={styles.moreService}>3.8</Text>
                </View>
              </View>
              <View style={{width:'30%'}}>
                <Text style={{position: "relative"  }}>
                  <Image source={require('../../../img/circle.png')}
                  style={styles.imgService} />   <Text style={styles.moreInfo}>Dịch vụ 7</Text>
                </Text>
                <View style={{position: "absolute",  zIndex: 1, top: 0, left: 0}}>
                  <Text style={styles.moreService}>4.0</Text>
                </View>
              </View>
              <View style={{width:'30%'}}>
                <Text style={{position: "relative"  }}>
                  <Image source={require('../../../img/circle.png')}
                  style={styles.imgService} />   <Text style={styles.moreInfo}>Dịch vụ 2</Text>
                </Text>
                <View style={{position: "absolute",  zIndex: 1, top: 0, left: 0}}>
                  <Text style={styles.moreService}>3.5</Text>
                </View>
              </View>
              <View style={{width:'30%'}}>
                <Text style={{position: "relative"  }}>
                  <Image source={require('../../../img/circle.png')}
                  style={styles.imgService} />   <Text style={styles.moreInfo}>Dịch vụ 5</Text>
                </Text>
                <View style={{position: "absolute",  zIndex: 1, top: 0, left: 0}}>
                  <Text style={styles.moreService}>3.8</Text>
                </View>
              </View>
              <View style={{width:'30%'}}>
                <Text style={{position: "relative"  }}>
                  <Image source={require('../../../img/circle.png')}
                  style={styles.imgService} />   <Text style={styles.moreInfo}>Dịch vụ 8</Text>
                </Text>
                <View style={{position: "absolute",  zIndex: 1, top: 0, left: 0}}>
                  <Text style={styles.moreService}>4.0</Text>
                </View>
              </View>
              <View style={{width:'30%'}}>
                <Text style={{position: "relative"  }}>
                  <Image source={require('../../../img/circle.png')}
                  style={styles.imgService} />   <Text style={styles.moreInfo}>Dịch vụ 3</Text>
                </Text>
                <View style={{position: "absolute",  zIndex: 1, top: 0, left: 0}}>
                  <Text style={styles.moreService}>3.0</Text>
                </View>
              </View>
              <View style={{width:'30%'}}>
                <Text style={{position: "relative"  }}>
                  <Image source={require('../../../img/circle.png')}
                  style={styles.imgService} />   <Text style={styles.moreInfo}>Dịch vụ 6</Text>
                </Text>
                <View style={{position: "absolute",  zIndex: 1, top: 0, left: 0}}>
                  <Text style={styles.moreService}>4.0</Text>
                </View>
              </View>
              <View style={{width:'30%'}}>
                <Text style={{position: "relative"  }}>
                  <Image source={require('../../../img/circle.png')}
                  style={styles.imgService} />   <Text style={styles.moreInfo}>Dịch vụ 9</Text>
                </Text>
                <View style={{position: "absolute",  zIndex: 1, top: 0, left: 0}}>
                  <Text style={styles.moreService}>4.0</Text>
                </View>
              </View>
            </View>
        </View>

        <View style={styles.titleHotel}>
            <Text h4 style={{ color: 'black', fontWeight: '700', fontFamily: 'serif' }}>Bình luận</Text>
            <View style={styles.block}>
              <View style={{width:'10%'}}>
                <Image source={require('../../../img/man.png')}
                  style={{width: 30, height: 30}} />
              </View>
              
              <View style={{width:'85%'}}>
              <Text style={{ fontWeight: '700', fontFamily: 'serif', fontSize: 12 }}>Natalie</Text>
              <Text style={{ color: '#A19F9F', fontWeight: '700', fontFamily: 'serif', fontSize: 10 }}>October 2019</Text>
              </View>
            </View>
            <Text style={[styles.commentText, {borderBottomWidth: 0.5, borderBottomColor: '#8A8383',}]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan bibendum tincidunt. Praesent quis consectetur ipsum.
            </Text>
            

            <View style={styles.block}>
              <View style={{width:'10%'}}>
                <Image source={require('../../../img/boy.png')}
                  style={{width: 30, height: 30}} />
              </View>
              
              <View style={{width:'85%'}}>
              <Text style={{ fontWeight: '700', fontFamily: 'serif', fontSize: 12 }}>Ashley</Text>
              <Text style={{ color: '#A19F9F', fontWeight: '700', fontFamily: 'serif', fontSize: 10 }}>October 2019</Text>
              </View>
            </View>
            <Text style={[styles.commentText, {borderBottomWidth: 0.5, borderBottomColor: '#8A8383',}]}>
            It doesn't get better than this. Book it
            </Text>

            <View style={styles.block}>
              <View style={{width:'10%'}}>
                <Image source={require('../../../img/man.png')}
                  style={{width: 30, height: 30}} />
              </View>
              
              <View style={{width:'85%'}}>
              <Text style={{ fontWeight: '700', fontFamily: 'serif', fontSize: 12 }}>John Roman</Text>
              <Text style={{ color: '#A19F9F', fontWeight: '700', fontFamily: 'serif', fontSize: 10 }}>October 2019</Text>
              </View>
            </View>
            <Text style={styles.commentText}>
            There are a number of choices about flat to look for of Sydney. There’s a hop on hop off flat that takes you around to The City, 
            next to The Harbour Bridge and a few other places as well.
            </Text>
        </View>
      
        </>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

const TabNavigator  = createMaterialTopTabNavigator(
  {
    'Tóm Tắt': TomTat,
    'Tiện Nghi': TienNghi,
    'Giá & Đặt Lịch': GiaVaDatLich,
    'Đánh Giá': DanhGia,
  },
  {
    tabBarOptions: {
      showIcon: true,
      pressColor: Colors.dark,
      labelStyle: {
        fontSize: 11,
        color: '#464646',
        fontWeight: '700',
        fontFamily: 'Lora',
      },
      tabStyle: {
       
      },
      style: {
        backgroundColor: 'white',
        
      },
      activeTintColor:'orange',
      upperCaseLabel:false,
    }
  }
);

const AppContainer = createAppContainer(TabNavigator );

export default AppContainer;

const styles = StyleSheet.create({
  titleHotel: {
    marginLeft: 10,
    marginTop: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#8A8383',
    paddingBottom: 13,
    fontFamily: 'serif',
    width: '100%',
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
    width: 15, 
    height: 15,
  },
  imgService: {
    width: 20, 
    height: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'rgba(234, 12, 65, 0.84)',
    padding: 5,
    width: 125,
    height: 32,
    borderRadius: 20,
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