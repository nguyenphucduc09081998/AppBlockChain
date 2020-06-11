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
import DatePicker from 'react-native-datepicker';

import { withNavigation } from 'react-navigation';

class Profile extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            date:"2016-05-15",
        }
    }

    render(){
        return (
            <ScrollView>
                <View style={[styles.container]}>
                    <View style={styles.avt_gr}>
                        <View style={[styles.col_md_4]}> 
                            <Image source={require('../../../img/man.png')} style={{marginLeft: 5}}/>
                            <Text>Lê Minh Hiếu</Text>
                        </View>
                        <View style={styles.col_md_4}>
                            <Text>05</Text>
                            <Text>Chuyến đi</Text>
                        </View>
                        <View style={styles.col_md_4}>
                            <Text>02</Text>
                            <Text>Địa điểm</Text>
                        </View>
                    </View>
                    <View style={styles.input_profile}>
                        <View style={styles.title_profile}>
                            <Text style={styles.title}>Thông tin cá nhân</Text>
                            <Text style={styles.sub_title}>Thông tin chi tiết khách hàng</Text>
                        </View>
                        <View style={styles.form_input}>
                            <View style={styles.form_group}>
                                <Text style={styles.left}> Tên Khách Hàng</Text>
                                <TextInput style={[styles.Input]}/>
                            </View>
                            <View style={styles.form_group}>
                                <Text>Số điện thoại</Text>
                                <TextInput style={styles.Input}/>
                            </View>
                            <View style={styles.form_group}>
                                <Text>Email</Text>
                                <TextInput style={styles.Input}/>
                            </View>                            
                            <View style={styles.form_group}>
                                <Text style={{marginTop: '2%'}}>Ngày sinh: </Text>
                                <DatePicker
                                    style={styles.datePicker}
                                    date={this.state.date}
                                    mode="date"
                                    placeholder="select date"
                                    format="DD-MM-YYYY"
                                    minDate="01-05-2016"
                                    maxDate="01-05-2030"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: -2,
                                        top: 9,
                                        marginLeft: 10,
                                        width: '10%',
                                        height: '55%',
                                    },
                                    dateInput: {
                                        paddingLeft: 10,
                                        borderWidth: 1,
                                        borderColor: '#C6C6C6',
                                        height: 34,
                                        borderRadius: 7, 
                                    },
                        
                                    // ... You can check the source to find the other keys.
                                    }}
                                    onDateChange={(date) => {this.setState({date: date})}}
                                />
                            </View>      
                        </View>
                    </View>
                    <View style={styles.input_address}>
                        <Text style={[styles.title_profile, styles.title]}>Thông tin địa chỉ</Text>
                        <View style={styles.form_input}>
                            <View style={styles.form_group}>
                                <Text style={styles.left}> Tên công ty</Text>
                                <TextInput style={[styles.Input]}/>
                            </View>
                            <View style={styles.form_group}>
                                <Text style={styles.left}> Địa chỉ</Text>
                                <TextInput style={[styles.Input]}/>
                            </View>
                            <View style={styles.form_group}>
                                <Text style={styles.left}>Mã Zip: </Text>
                                <TextInput style={[styles.Input]}/>
                            </View>
                            <View style={styles.form_group}>
                                <Text style={styles.left}>Quốc gia: </Text>
                                <TextInput style={[styles.Input]}/>
                            </View>
                            <View style={styles.form_group}>
                                <Text style={styles.left}>Thành phố: </Text>
                                <TextInput style={[styles.Input]}/>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => Alert.alert('Cannot press this one')}
                        >
                        <Text 
                            style={{color: '#fff',fontFamily: 'serif', fontSize: 14, fontWeight: '700'}}>
                                Đăng ký
                        </Text>
                      
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        paddingBottom: 10,
        width: '100%',
        flexWrap: 'wrap'
    },
    avt_gr: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        borderBottomColor: '#8A8383',
        borderBottomWidth: 2,
        paddingBottom: 10,  
    },
    col_md_4: {
        width: '33%',
        justifyContent: 'center'
    },
    title_profile: {
        marginTop: 15,
        borderBottomColor: '#CCC9C9',
        borderBottomWidth: 1,
        paddingBottom: 10,  
        marginBottom: 20,
    },
    title: {
        fontFamily: 'Lora',
        fontSize: 15,
        fontWeight: 'bold',
    },
    sub_title: {
        color: '#797474',
        fontSize: 11
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#0382F8',
        marginTop: 10,
        padding: 5,
        width: '100%',
        width: 150,
        height: 30,
        left: 23,
        borderRadius: 14
    },
    Input: {
        borderColor: '#CCC9C9',
        borderWidth: 0.5,
        borderRadius: 10,
        width: '100%', 
        
    },
    form_group: {
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    left: {
        justifyContent: 'flex-end'
    },
    right: {
        flexDirection: 'row-reverse',
        textAlign: 'right'
    },
    datePicker: {
        width: '100%',
               
    },
})
export default withNavigation(Profile);