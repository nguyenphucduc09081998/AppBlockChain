import React, { Component } from 'react'
import {StyleSheet,Text,View,TouchableOpacity,TextInput} from 'react-native'

export default class TransactionScreen extends Component {
    render(){
        return(
            <View style={styles.Register}>
                <Text style={styles.header}>xxx TransactionScreen</Text>
                <TextInput style={styles.textinput} placeholder="Privatefd Key" 
                    underlineColorAndroid={'transparent'} />

                <TextInput style={styles.textinput} placeholder="Publicdf Key" 
                    underlineColorAndroid={'transparent'} />    

                <TextInput style={styles.textinput} placeholder="Message" 
                   secureTextEntry={true} underlineColorAndroid={'transparent'} />    
                
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btntext}>Sign Up</Text>
                </TouchableOpacity>

            </View>    
        );
    } 
}

const styles = StyleSheet.create({
    Register :{
        alignSelf:'stretch',
        paddingLeft:60,
        paddingRight:60,
        marginTop:30
    },  
    header:{
        fontSize:24,
        color:'#fff',
        paddingBottom:10,
        marginBottom:40,
        borderBottomColor:'#6F2DA8',
        borderBottomWidth:1,
    },
    textinput:{
        alignSelf:'stretch',
        height:40,
        marginBottom:30,
        color:'red',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
    button:{
        alignSelf:'stretch',
        alignItems:'center',
        padding:20,
        backgroundColor:'#59cbbd',
        marginTop: 30,
    },
    btntext:{
        color:'#fff',
        fontWeight:'bold',
    }

})