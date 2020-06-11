import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View, Image,
  CheckBox,
  TouchableOpacity
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import ModalFilterView from './modal';
export {
  ModalFilterView,
};
import DatePicker from 'react-native-datepicker'
import { withNavigation } from 'react-navigation';

class FilterRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date:"2016-05-15"}
  }

  render() {

    return (
      <ScrollView style={styles.container}>
        <View style={{flexDirection: 'row',
                      borderWidth: 1,
                      borderRadius: 20,
                      borderColor: '#ddd',
                      borderBottomWidth: 1,
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.8,
                      shadowRadius: 2,
                      elevation: 1,
                      marginRight: 5,
                      marginTop: 20,
                      marginBottom: 5,
                      paddingBottom: 23
                      }}>
          <View style={{width: '30%', marginTop: 40, paddingLeft: 20}}>
            <Text style={{fontSize: 15, fontFamily: 'serif', fontWeight: '700'}}>Lọc Theo</Text>
          </View>
          <View style={styles.screen}>
            <View style={styles.container}>
              <Dropdown
                label='Tất cả điều kiện lọc'
                baseColor='#EA0C41'
                rippleCentered={true}
                data={typographyData}
              />
            </View>
          </View>
        </View>
        
        <View style={{flex: 1, flexDirection: 'row',
                      borderWidth: 1,
                      borderRadius: 20,
                      borderColor: '#ddd',
                      borderBottomWidth: 1,
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.8,
                      shadowRadius: 2,
                      elevation: 1,
                      marginRight: 5,
                      marginTop: 20,
                      marginBottom: 5,
                      paddingBottom: 13
                      }}>
          <View style={{width: '25%'}}>
            <TouchableOpacity  onPress={() => {
                   this.props.navigation.navigate('RoomDetails');
                  }}>
                <Image source={require('../../../img/room2.jpg')}
                    style={styles.imgInfo} />
            </TouchableOpacity>
          </View>
          <View style={{width: '75%', marginLeft: 65, marginTop: 10}}>
            <TouchableOpacity  onPress={() => {
                   this.props.navigation.navigate('RoomDetails');
                  }}>
              <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 10, color: '#1B51DA',}}>Mường Thanh Luxury Apartment</Text>
              <Text>
                <Image source={require('../../../img/location.png')}
                style={styles.iconInfo} />   <Text style={styles.moreInfo}>Ngũ Hành Sơn, Đà Nẵng, Việt Nam</Text>
              </Text> 
              <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 11, color: '#3E3C3C', marginTop: 5}}>1,800,000₫  <Text style={{fontSize: 8, color: '#696666'}}>(1 đêm)</Text></Text>
              <View style={{borderBottomWidth: 0.7, borderBottomColor: '#c6c6c6', paddingBottom: 6}}></View>
              <View style={{width: '75%'}}>
                <Text style={{fontSize: 9, color: '#6A6767', marginTop: 6}} >
                Được xây dựng theo tiêu chuẩn 5 sao Mường Thanh Luxury Đà Nẵng nằm bên bờ biển Mỹ Khê xinh đẹp, quý phái,... 
                </Text>
              </View>
              <View style={{marginLeft: '35%', marginTop: 2}}>
                <Text>
                  <Image source={require('../../../img/man.png')}
                  style={styles.avatarInfo} />   <Text style={styles.moreInfo}>Britian John</Text>
                </Text> 
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flex: 1, flexDirection: 'row',
                      borderWidth: 1,
                      borderRadius: 20,
                      borderColor: '#ddd',
                      borderBottomWidth: 1,
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.8,
                      shadowRadius: 2,
                      elevation: 1,
                      marginRight: 5,
                      marginTop: 20,
                      marginBottom: 5,
                      paddingBottom: 13
                      }}>
          <View style={{width: '25%'}}>
            <TouchableOpacity  onPress={() => {
                   this.props.navigation.navigate('RoomDetails');
                  }}>
              <Image source={require('../../../img/room4.jpg')}
                  style={styles.imgInfo} />
                  </TouchableOpacity>
          </View>
          <View style={{width: '75%', marginLeft: 65, marginTop: 10}}>
            <TouchableOpacity  onPress={() => {
                   this.props.navigation.navigate('RoomDetails');
                  }}>
              <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 10, color: '#1B51DA'}}>Noble Apartment Studio 1</Text>
              <Text>
                <Image source={require('../../../img/location.png')}
                style={styles.iconInfo} />   <Text style={styles.moreInfo}>Cầu Giấy, Hà Nội, Việt Nam</Text>
              </Text> 
              <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 11, color: '#3E3C3C', marginTop: 5}}>1,000,000₫  <Text style={{fontSize: 8, color: '#696666'}}>(1 đêm)</Text></Text>
              <View style={{borderBottomWidth: 0.7, borderBottomColor: '#c6c6c6', paddingBottom: 6}}></View>
              <View style={{width: '75%'}}>
                <Text style={{fontSize: 9, color: '#6A6767', marginTop: 6}} >
                Được xây dựng theo tiêu chuẩn 5 sao Mường Thanh Luxury Đà Nẵng nằm bên bờ biển Mỹ Khê xinh đẹp, quý phái,... 
                </Text>
              </View>
              <View style={{marginLeft: '35%', marginTop: 2}}>
                <Text>
                  <Image source={require('../../../img/boy.png')}
                  style={styles.avatarInfo} />   <Text style={styles.moreInfo}>Alice Tina</Text>
                </Text> 
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flex: 1, flexDirection: 'row',
                      borderWidth: 1,
                      borderRadius: 20,
                      borderColor: '#ddd',
                      borderBottomWidth: 1,
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.8,
                      shadowRadius: 2,
                      elevation: 1,
                      marginRight: 5,
                      marginTop: 20,
                      marginBottom: 5,
                      paddingBottom: 13
                      }}>
          <View style={{width: '25%'}}>
            <TouchableOpacity  onPress={() => {
                   this.props.navigation.navigate('RoomDetails');
                  }}>
              <Image source={require('../../../img/room3.jpg')}
                  style={styles.imgInfo} />
            </TouchableOpacity>
          </View>
          <View style={{width: '75%', marginLeft: 65, marginTop: 10}}>
            <TouchableOpacity  onPress={() => {
                   this.props.navigation.navigate('RoomDetails');
                  }}>
              <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 10, color: '#1B51DA'}}>Luxury Apartment - The Golden</Text>
              <Text>
                <Image source={require('../../../img/location.png')}
                style={styles.iconInfo} />   <Text style={styles.moreInfo}>Hoàn Kiếm, Hà Nội, Việt Nam</Text>
              </Text> 
              <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 11, color: '#3E3C3C', marginTop: 5}}>3,500,000₫  <Text style={{fontSize: 8, color: '#696666'}}>(1 đêm)</Text></Text>
              <View style={{borderBottomWidth: 0.7, borderBottomColor: '#c6c6c6', paddingBottom: 6}}></View>
              <View style={{width: '75%'}}>
                <Text style={{fontSize: 9, color: '#6A6767', marginTop: 6}} >
                Được xây dựng theo tiêu chuẩn 5 sao Mường Thanh Luxury Đà Nẵng nằm bên bờ biển Mỹ Khê xinh đẹp, quý phái,... 
                </Text>
              </View>
              <View style={{marginLeft: '35%', marginTop: 2}}>
                <Text>
                  <Image source={require('../../../img/boy.png')}
                  style={styles.avatarInfo} />   <Text style={styles.moreInfo}>Alice Tina</Text>
                </Text> 
              </View>
            </TouchableOpacity>
          </View>
        </View>
        
        <ModalFilterView></ModalFilterView>
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 2,
    backgroundColor: '#eee'
  },

  screen: {
    padding: 0,
    width: '65%',
  },

  container: {
    marginHorizontal: 2,
    marginVertical: 1,
    paddingHorizontal: 8,
  },

  text: {
    textAlign: 'center',
  },

  textContainer: {
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 2,
    elevation: 1,
    shadowRadius: 1,
    shadowOpacity: 0.3,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  imgInfo: {
    width: 132, 
    height: 122,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 14, 
  },
  iconInfo: {
    width: 15,
    height: 15
  },
  avatarInfo:{
    width: 20,
    height: 20
  },
  moreInfo: {
    fontSize: 10,
    color: '#696666',
    marginTop: 10
  },
  moreInfo: {
    fontSize: 10,
    color: '#2F64A2',
    marginTop: 13

  },
});

const typographyData = [
  { value: 'Display2', label: 'Display 2' },
  { value: 'Display1', label: 'Display 1' },
  { value: 'Headline' },
  { value: 'Title' },
  { value: 'Subheading' },
  { value: 'Body' },
  { value: 'Caption' },
];

export default withNavigation(FilterRoom);