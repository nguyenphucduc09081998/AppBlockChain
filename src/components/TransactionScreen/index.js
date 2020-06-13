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

class TransactionScreen extends React.Component {
    
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
                  
                    <View style={styles.input_profile}>
                        <View style={styles.title_profile}>
                            <Text style={styles.title}>Thông tin giao dịch</Text>
                            <Text style={styles.sub_title}>Thông tin chi tiết người nhận</Text>
                        </View>
                        <View style={styles.form_input}>
                            <View style={styles.form_group}>
                                <Text style={styles.left}> Private key người gửi</Text>
                                <TextInput style={[styles.Input]}/>
                            </View>
                            <View style={styles.form_group}>
                                <Text>Public key người nhận</Text>
                                <TextInput style={styles.Input}/>
                            </View>
                            <View style={styles.form_group}>
                                <Text>Số Tiền</Text>
                                <TextInput style={styles.Input}/>
                            </View>                            
                            <View style={styles.form_group}>
                                <Text>Nội dung</Text>
                                <TextInput style={styles.Input}/>
                            </View>
                        </View>
                    </View>
                   
                    <TouchableOpacity
                        style={styles.button}
                        // onPress={() => Alert.alert('Cannot press this one')}
                        >
                        <Text 
                            style={{color: '#fff',fontFamily: 'serif', fontSize: 14, fontWeight: '700'}}>
                                Chuyển khoản
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
        justifyContent: 'center',
        backgroundColor: '#0382F8',
        marginTop: 10,
        padding: 5,
        width: '100%',
        width: 150,
        height: 30,
        left: 23,
        borderRadius: 14,
        
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
export default withNavigation(TransactionScreen);