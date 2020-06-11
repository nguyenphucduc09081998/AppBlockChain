import React from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    StatusBar, 
    ListView, 
    ScrollView, 
    TouchableOpacity,
    Alert, 
    Image, 
    TextInput, 
    Group,
    TouchableHighlight,
    Button,

} from 'react-native';

import TabPayment from './main';
import { Dropdown } from 'react-native-material-dropdown';
import { withNavigation } from 'react-navigation';


export default class Payment extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            date:"2016-05-15",
        }
    }

    render(){
        return (
            <ScrollView style={{marginLeft: '3%'}}>
                <View style={{flexDirection: 'row',          
                        marginRight: 5,
                        
                        }}>
                    <View style={{width: '40%'}}>
                        <Image source={require('../../../img/room2.jpg')}
                            style={styles.imgSuggest} />
                    </View>
                    <View style={{width: '60%', marginLeft: 15, marginTop: 10}}>
                        <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 11.5, color: '#1B51DA',}}>Mường Thanh Luxury Apartment</Text>
                        <Text>
                            <Image source={require('../../../img/location.png')}
                            style={styles.iconInfo} />   <Text style={styles.moreInfo}>Ngũ Hành Sơn, Đà Nẵng, Việt Nam</Text>
                        </Text> 
                        <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 11, color: '#3E3C3C', marginTop: 5}}>1,800,000₫  <Text style={{fontSize: 8, color: '#696666'}}>(1 đêm)</Text></Text>
                        <View style={{borderBottomWidth: 0.7, borderBottomColor: '#c6c6c6', paddingBottom: 6}}></View>
                        <View style={{flexDirection: 'row',          
                        }}>
                            <View style={{width: '80%'}}>
                                <Text style={{fontSize:10, color: '#686262', marginTop: 6}} >
                                Khách hàng đề cử
                                </Text>
                            </View>
                            <View style={{width: '20%'}}>
                                <Text style={{fontSize:10, color: '#20CD04', marginTop: 6, fontWeight: '700'}} >97%</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row',          
                        }}>
                            <View style={{width: '80%'}}>
                                <Text style={{fontSize:10, color: '#686262', marginTop: 6}} >
                                Khách hàng đánh giá
                                </Text>
                            </View>
                            <View style={{width: '20%'}}>
                                <Text style={{fontSize:10, color: '#686262', marginTop: 6,}} ><Text style={{color: '#20CD04',fontWeight: '700'}}>4.5</Text>/5</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row', width: '70%'          
                }}>
                    <View style={{width: '25%'}}>
                        <Text style={{fontSize:10, color: 'black', marginTop: 6}} >1 phòng:</Text>
                    </View>
                    <View style={{width: '70%'}}>
                        <Text style={{fontSize:10, color: '#686262', marginTop: 6}} >1 đêm</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', width: '70%', paddingBottom: 6      
                }}>
                    <View style={{width: '25%'}}>
                        <Text style={{fontSize:10, color: 'black', marginTop: 6}} >Phòng đôi:</Text>
                    </View>
                    <View style={{width: '70%'}}>
                        <Text style={{fontSize:10, color: '#686262', marginTop: 6,}} >8/01/2020 - 10/01/2020</Text>
                    </View>
                </View>
                <View style={{borderBottomWidth: 0.7, borderBottomColor: '#c6c6c6', paddingBottom: 6}}></View>
                
                <View style={{flexDirection: 'row', width: '100%'          
                }}>
                    <View style={{width: '85%'}}>
                        <Text style={{fontSize:10, color: 'black', marginTop: 6}} >Giá thuê 1 đêm:</Text>
                    </View>
                    <View style={{width: '15%'}}>
                        <Text style={{fontSize:10, color: '#686262', marginTop: 6}} >1,800,000đ</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', width: '100%', paddingBottom: 6      
                }}>
                    <View style={{width: '85%'}}>
                        <Text style={{fontSize:10, color: 'black', marginTop: 6}} >Phí dọn dẹp:</Text>
                    </View>
                    <View style={{width: '15%'}}>
                        <Text style={{fontSize:10, color: '#686262', marginTop: 6, paddingLeft: '23%'}} >20,000đ</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', width: '100%', paddingBottom: 6      
                }}>
                    <View style={{width: '85%'}}>
                        <Text style={{fontSize:10, color: 'black', marginTop: 6}} >Thuế và phụ phí:</Text>
                    </View>
                    <View style={{width: '15%'}}>
                        <Text style={{fontSize:10, color: '#686262', marginTop: 6, paddingLeft: '23%'}} >10,000đ</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', width: '100%', paddingBottom: 6      
                }}>
                    <View style={{width: '84%'}}>
                        <Text style={{fontSize:10, color: 'black', marginTop: 6, fontWeight: '700'}} >Tổng tiền:</Text>
                    </View>
                    <View style={{width: '16%'}}>
                        <Text style={{fontSize:10, color: 'black', marginTop: 6, fontWeight: '700'}} >1,830,000đ</Text>
                    </View>
                </View>
                <View style={{marginBottom: 6}}>
                    <Text style={{fontSize:10, color: 'black', marginTop: 6, fontWeight: '600'}} >Chính sách hủy phòng:</Text>
                    <Text style={{fontSize:10, color: '#686262', marginTop: 6,}} ><Text style={{fontWeight: '700'}}>Trung bình: </Text> Miễn phí hủy phòng trong vòng 48h sau khi đặt phòng thành công và trước 5 ngày so 
                    với thời gian check-in. Sau đó, hủy phòng trước 5 ngày so với thời gian check-in, được hoàn lại 100% tổng số tiền đã trả (trừ phí dịch vụ).</Text>
                </View>
                <View style={{borderBottomWidth: 0.7, borderBottomColor: '#c6c6c6', paddingBottom: 6}}></View>
                <View style={styles.input_profile}>
                    <View style={styles.title_profile}>
                        <Text style={styles.title}>Thông tin đặt chỗ</Text>
                        <Text style={styles.sub_title}>Thông tin chi tiết khách hàng</Text>
                        <Text style={{fontSize:10, color: 'black', marginTop: 6,}} >Số khách: <Text style={{color: '#686262',fontSize: 9}}> 2 khách</Text> </Text>
                    </View>
                    <View style={{flexDirection: 'row', width: '100%', paddingBottom: 6      
                    }}>
                        <View style={{width: '30%'}}>
                            <Text style={{fontSize:10, color: 'black', marginTop: '13%'}} >Tên khách hàng:<Text style={{color: 'red'}}>*</Text></Text>
                        </View>
                        <View style={{width: '60%'}}>
                        <TextInput style = {styles.input}
                            underlineColorAndroid = "transparent"
                            placeholder = "Họ tên trên CMND/Thẻ căn cước"
                            placeholderTextColor = "#C6C6C6"
                            autoCapitalize = "none"/>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', width: '100%', paddingBottom: 6      
                    }}>
                        <View style={{width: '30%'}}>
                            <Text style={{fontSize:10, color: 'black', marginTop: '13%'}} >Số điện thoại:<Text style={{color: 'red'}}>*</Text></Text>
                        </View>
                        <View style={{flexDirection: 'row', width: '60%'}}>
                            <View style={styles.inputPhoneLeft}>
                                <View style={{width: '40%'}}>
                                    <Image source={require('../../../img/phoneCode.png')}
                                    style={{width: 20, height: 10, marginTop: '30%', marginLeft: '30%'}} />
                                </View>
                                
                                <Text style={{width: '40%', marginTop: '5%', marginLeft: '15%'}}>+84</Text>
                            </View>
                            <View style={{width: '70%'}}>
                                <TextInput style = {styles.inputPhone}
                                underlineColorAndroid = "transparent"
                                placeholder = "Số điện thoại"
                                placeholderTextColor = "#C6C6C6"
                                autoCapitalize = "none"/>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', width: '100%', paddingBottom: 6      
                    }}>
                        <View style={{width: '30%'}}>
                            <Text style={{fontSize:10, color: 'black', marginTop: '13%'}} >Email:<Text style={{color: 'red'}}>*</Text></Text>
                        </View>
                        <View style={{width: '60%'}}>
                        <TextInput style = {styles.input}
                            underlineColorAndroid = "transparent"
                            placeholder = "VD: email@example.com"
                            placeholderTextColor = "#C6C6C6"
                            autoCapitalize = "none"/>
                        </View>
                    </View>
                    <View style={styles.title_profile}>
                        <Text style={styles.title}>1 đêm tại Khách Sạn Vin Phòng 15</Text>
                        <View style={{flexDirection: 'row', width: '100%', paddingBottom: 6      
                        }}>
                            <View style={styles.flex_div}>
                                <View style={{borderBottomWidth: 3, borderBottomColor: '#20CD04', width: '45%', marginLeft: '5%', marginTop: '5%'}}></View>
                                <Text style={{fontSize:10, color: '#686262', marginTop: '2%', marginLeft: '5%'}} >Nhận phòng</Text>
                                <Text style={{fontSize:10, color: 'black', marginTop: '2%', marginLeft: '5%'}} >08/01/2020</Text>
                                <Text style={{fontSize:9, color: '#686262', marginTop: '2%', marginLeft: '5%'}} >Thứ tư</Text>
                            </View>
                            <View style={styles.flex_div}>
                                <View style={{borderBottomWidth: 3, borderBottomColor: '#CD1C04', width: '45%', marginLeft: '5%', marginTop: '5%'}}></View>
                                <Text style={{fontSize:10, color: '#686262', marginTop: '2%', marginLeft: '5%'}} >Trả phòng</Text>
                                <Text style={{fontSize:10, color: 'black', marginTop: '2%', marginLeft: '5%'}} >10/01/2020</Text>
                                <Text style={{fontSize:9, color: '#686262', marginTop: '2%', marginLeft: '5%'}} >Thứ sáu</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.input_profile}>
                    <View style={styles.title_profile}>
                        <Text style={styles.title}>Thông tin thanh toán</Text>
                        <Text style={styles.sub_title_payment}>Nhập mã coupon hoặc mã khuyến mãi</Text>
                        <Text style={{fontSize:10, color: 'black', marginTop: 6,}} >Số khách: <Text style={{color: '#686262',fontSize: 9}}> 2 khách</Text> </Text>
                    </View>
                    <TabPayment></TabPayment>
                </View>
                <View style={{borderBottomWidth: 0.7, borderBottomColor: '#c6c6c6', marginTop: 20}}></View>
                <TouchableOpacity
                        style={styles.button}
                        onPress={() => Alert.alert('Thanh toán thành công')}
                        >
                        <Text 
                            style={{color: '#fff',fontFamily: 'serif', fontSize: 14, fontWeight: '700'}}>
                                Thanh Toán
                        </Text>
                      
                    </TouchableOpacity>
            </ScrollView>
        )
    }
}
var styles = StyleSheet.create({
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
    moreInfo: {
        fontSize: 10,
        color: '#696666',
        marginTop: 10
    },
    title_profile: {
        marginTop: 15,
        marginBottom: 10,
        fontSize: 16
    },
    sub_title: {
        color: '#797474',
        fontSize: 9
    },
    input: {
        marginTop: 10,
        borderColor: '#C6C6C6',
        borderWidth: 1,
        fontSize: 10,
        borderRadius: 10,
        height: 35
     },
     inputPhone: {
        marginTop: 10,
        borderColor: '#C6C6C6',
        height: 35,
        borderWidth: 1,
        fontSize: 10,
        borderRadius: 10,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
     },

     inputPhoneLeft: {
        width: '30%', 
        flexDirection: 'row', 
        marginTop: '4.5%',
        height: 35, 
        borderColor: '#C6C6C6',
        borderWidth: 1,
        borderRadius: 10,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRightWidth: 0,
     },
     flex_div: {
        borderColor: '#C6C6C6',
        borderWidth: 1,
        borderRadius: 10,
        width: '44%', 
        marginTop: '3%',
        marginRight: '2%',
        backgroundColor: '#F0F0F0',
     },
     sub_title_payment: {
        color: '#797474',
        fontSize: 9,
        textDecorationLine: 'underline'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#0382F8',
        marginTop: 10,
        padding: 5,
        width: '100%',
        width: 150,
        height: 30,
        left: 0,
        borderRadius: 14,
        marginBottom: 15
    },
})

const review = [
    { value: 'Đánh giá 1'},
    { value: 'Đánh giá 2' },
    { value: 'Đánh giá 3' },
  ];

