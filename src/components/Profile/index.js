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
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import globalVariable from '../../../global/globalVariable';

import { withNavigation } from 'react-navigation';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: globalVariable.userInfo.name,
            email: globalVariable.userInfo.email,
            phone: globalVariable.userInfo.phone,
            password: "",
            password_confirmation: "",
            id: globalVariable.userInfo.id,
        }

    }

    doUpdate = () => {
        if (this.state.password == this.state.password_confirmation) {
            //Alert.alert('OK')
// console.log('responseJson', responseJson);
            fetch(globalVariable.phpDomain + "/api/auth/UserUpdate", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "email": this.state.email,
                    "name": this.state.name,
                    // "phone": this.state.phone,
                    "password": this.state.password,
                    "id": this.state.id
                })
            })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('responseJson', responseJson);
                if (responseJson.code == responseCode.HTTP_OK) {
                    
                    //this.setState({ email: null });
                    //this.setState({ password: null });
                    globalVariable.userInfo = responseJson.data.user;
                    this.props.navigation.navigate('BottomTabs');
                    Alert.alert('Update User successfully');
                } else {
                    Alert.alert('The email has already been taken');
                }
                //AsyncStorage.setItem("@public_key", responseJson.data.user.public_key);
            })
            .catch((error) => {
                Alert.alert('Update Fail');
                // console.log('ERROR', error);
            });
        }else{
            Alert.alert('The password confirmation does not match')
        }
       
    }

    render() {
        return (
            <ScrollView>
                <View style={[styles.container]}>
                    <View style={styles.avt_gr}>
                        <View style={[styles.col_md_4]}>
                            <Image source={require('../../../img/man.png')} style={{ marginLeft: 5 }} />
                            <Text>Lê Minh Hiếu</Text>
                        </View>
                    </View>
                    <View style={styles.input_profile}>
                        <View style={styles.title_profile}>
                            <Text style={styles.title}>Profile Detail</Text>
                            <Text style={styles.sub_title}>This is your profile, want to update it.</Text>
                        </View>
                        <View style={styles.form_input}>
                            <View style={styles.form_group}>
                                <Text style={styles.left}>Full Name</Text>
                                <TextInput style={[styles.Input]} onChangeText={(name) => this.setState({ name })}
                                    value={this.state.name} />
                            </View>
                            <View style={styles.form_group}>
                                <Text>Phone Number</Text>
                                <TextInput style={styles.Input} onChangeText={(phone) => this.setState({ phone })}
                                    value={this.state.phone} />
                            </View>
                            <View style={styles.form_group}>
                                <Text>Email</Text>
                                <TextInput style={styles.Input} onChangeText={(email) => this.setState({ email })}
                                    value={this.state.email} />
                            </View>
                            <View style={styles.form_group}>
                                <Text>Password</Text>
                                <TextInput style={styles.Input} secureTextEntry onChangeText={(password) => this.setState({ password })}
                                    />
                            </View>
                            <View style={styles.form_group}>
                                <Text>Confirm Password</Text>
                                <TextInput style={styles.Input} secureTextEntry onChangeText={(password_confirmation) => this.setState({ password_confirmation })}
                                    />
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.doUpdate.bind(this)}
                    >
                        <Text style={styles.btnText}>Update</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button_logout}
                    >
                        <Text style={styles.btnText}>Logout</Text>
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
        flexWrap: 'wrap',
        backgroundColor: '#fbfbfd',
    },
    avt_gr: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        borderBottomColor: '#8A8383',
        borderBottomWidth: 2,
        paddingBottom: 10,
        marginTop: 10
    },
    col_md_4: {
        width: '100%',
        // justifyContent: 'center',
        alignItems: 'center',
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
        // alignItems: 'center',
        // backgroundColor: '#0382F8',
        // marginTop: 10,
        // padding: 5,
        // width: '100%',
        // width: 150,
        // height: 30,
        // left: 23,
        // borderRadius: 14
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff7a59',
        paddingVertical: hp('3%'),
        borderRadius: 28,
        height: 30,
        fontFamily: 'Rubik',
        marginTop: 10,
    },
    button_logout: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ddd',
        paddingVertical: hp('3%'),
        borderRadius: 15,
        height: 15,
        fontFamily: 'Rubik',
        marginTop: 10,
    },
    btnText: {
        color: '#fff',
        fontSize: wp('4%'),
        fontFamily: 'Rubik-Medium',
    },
    Input: {
        // borderColor: '#CCC9C9',
        // borderWidth: 0.5,
        // borderRadius: 10,
        // width: '100%',

        ///
        borderRadius: 6,
        width: '100%',
        backgroundColor: '#f1f2f5',
        marginBottom: 10,
        paddingVertical: wp('2.25%'),
        paddingHorizontal: wp('2%'),
        fontSize: wp('4%'),
        fontFamily: 'Inconsolata-Regular',
        ///
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

//////////////////////
// import React from 'react';
// import {
//     Text,
//     View,
//     StyleSheet,
//     StatusBar,
//     ListView,
//     ScrollView,
//     TouchableOpacity,
//     Alert,
//     Image,
//     TextInput,
//     Group,
//     TouchableHighlight,
//     Button,
//   } from 'react-native';
//   import {withNavigation} from 'react-navigation';
// export default class Profile extends React.Component {
//     constructor(props) {
//       super(props);
//     }

//     render() {
//         return (
//             <View>
//                 <Text>this is stripe profile</Text>
//             </View>
//         );
//     }
// };

{/* <View style={styles.form_group}>
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
                            </View>       */}

{/* <View style={styles.input_address}>
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
                    </View> */}