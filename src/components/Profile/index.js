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
import responseCode from '../../../global/responseCode';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabs } from '../index';

import { withNavigation } from 'react-navigation';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: globalVariable.userInfo.name,
            Name_TITLE: globalVariable.userInfo.name,
            email: globalVariable.userInfo.email,
            // phone: globalVariable.userInfo.phone,
            password: "",
            password_confirmation: "",
            id: globalVariable.userInfo.id,
        }
    }

    componentDidUpdate() {
        console.log('screen logout componentDidUpdate');
        // this.props.navigation.addListener('focus', () => {
        //     this.getHistory();
        // })
    }

    doLogout = () => {
        globalVariable.Authorization = '';
        globalVariable.userInfo = '';
        console.log('click do Logout');
        this.props.navigation.navigate('LoginScreen');
    }

    doUpdate = () => {
        console.log('click do Update');
        if (this.state.password == this.state.password_confirmation) {
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
                        globalVariable.userInfo = responseJson.data.user;
                        // this.props.navigation.navigate('BottomTabs');
                        Alert.alert('Update User successfully');
                        this.setState({ Name_TITLE: this.state.name });
                        this.setState({ name: this.state.name });
                        this.setState({ email: this.state.email });

                    } else if(responseJson.code == 412){
                        Alert.alert('Email ton tai');
                    }else {
                        Alert.alert('The email has already been taken');
                    }
                    //AsyncStorage.setItem("@public_key", responseJson.data.user.public_key);
                })
                .catch((error) => {
                    Alert.alert('Update Fail');
                });
        } else {
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
                            <Text>{this.state.Name_TITLE}</Text>
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
                            {/* <View style={styles.form_group}>
                                <Text>Phone Number</Text>
                                <TextInput style={styles.Input} onChangeText={(phone) => this.setState({ phone })}
                                    value={this.state.phone} />
                            </View> */}
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
                        onPress={this.doLogout.bind(this)}
                    >
                        <Text style={styles.btnText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}


// const Profile = () => (
//     <NavigationContainer independent={true}>
//       <StackNavigations />
//     </NavigationContainer>  
//   );
//   const Stack = createStackNavigator();
//   const StackNavigations = () => (
//     <Stack.Navigator initialRouteName="Profile" screenOptions={{
//       headerShown: false
//     }}>
//         <Stack.Screen name="BottomTabs" component={BottomTabs} />
//         <Stack.Screen name="Profile" component={Profile123} />
//         {/* <Stack.Screen name="RegisterUserScreen" component={RegisterUserScreen} /> */}
//     </Stack.Navigator>
//   );

export default withNavigation(Profile);




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
        fontFamily: 'Barlow',
        fontSize: 15,
        fontWeight: 'bold',
    },
    sub_title: {
        color: '#797474',
        fontSize: 11
    },
    button: {
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
        borderRadius: 6,
        width: '100%',
        backgroundColor: '#f1f2f5',
        marginBottom: 10,
        paddingVertical: wp('2.25%'),
        paddingHorizontal: wp('2%'),
        fontSize: wp('4%'),
        fontFamily: 'Inconsolata-Regular',
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

//////////////////////
