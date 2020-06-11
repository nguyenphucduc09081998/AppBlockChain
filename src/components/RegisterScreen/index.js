import React, { Component } from 'react'
import {StyleSheet,Text,View,TouchableOpacity,TextInput} from 'react-native'

export default class RegisterScreen extends Component {
    render(){
        return(
            <View style={styles.screenContainer}>
                <View style={styles.intro}>
                    <View style={styles.logo}>
                        <Text style={styles.logoText}>
                            BLOCKCHAIN
                        </Text>
                    </View>
                </View>
                <View style={styles.Register}>
                    <Text style={styles.header}>R E G I S T E R</Text>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.textinput} placeholder="Private Key" placeholderTextColor="#b1b1b1"
                            underlineColorAndroid={'transparent'} />

                        <TextInput style={styles.textinput} placeholder="Public Key" placeholderTextColor="#b1b1b1"
                            underlineColorAndroid={'transparent'} />    

                        <TextInput style={[styles.textinput, styles.noborderbottom]} placeholder="Message" placeholderTextColor="#b1b1b1"
                        secureTextEntry={true} underlineColorAndroid={'transparent'} />    
                    </View>
                    
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.btntext}>Sign Up</Text>
                    </TouchableOpacity>

                </View>    
            </View>
        );
    } 
}

const styles = StyleSheet.create({
    screenContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    intro: {
        height: '25%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {},
    logoText: {
        fontSize: 32,
    },
    Register: {
        alignSelf: 'stretch',
        paddingHorizontal: 35,
        paddingTop: 0
    },  
    header: {
        fontSize: 20,
        color: '#e0e0e0',
        marginBottom: 20,
        textAlign: 'center'
    },
    inputContainer: {
        borderColor: '#bdbdbd',
        borderWidth: 1,
        borderRadius: 4,
    },
    textinput: {
        alignSelf: 'stretch',
        paddingVertical: 9,
        marginBottom: 0,
        color: 'red',
        borderBottomColor: '#bdbdbd',
        borderBottomWidth: 1,
        /* borderColor: '#999999',
        borderWidth: 1, */
    },
    noborderbottom: {
        borderBottomColor: 'transparent',
        borderBottomWidth: 0,
    },
    button: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30,
        marginHorizontal: 10,
        borderRadius: 30,

        
    },
    btntext: {
        color:'#fff',
        fontWeight:'bold',
    }

});