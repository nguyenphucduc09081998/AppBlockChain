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
            <ScrollView contentContainerStyle={[styles.container]}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={styles.input_profile}>
                        <View style={styles.title_profile}>
                            <Text style={styles.title}>THÔNG TIN GIAO DỊCH</Text>
                            <Text style={styles.sub_title}>Thông tin chi tiết người nhận</Text>
                        </View>
                        <View style={styles.form_input}>
                            <View style={styles.form_group}>
                                <Text style={styles.left}> Private key người gửi</Text>
                                <TextInput style={[styles.Input]}/>
                            </View>
                            <View style={styles.form_group}>
                                <Text style={styles.left}>Public key người nhận</Text>
                                <TextInput style={styles.Input}/>
                            </View>
                            <View style={styles.form_group}>
                                <Text style={styles.left}>Số Tiền</Text>
                                <TextInput style={styles.Input}/>
                            </View>                            
                            <View style={styles.form_group}>
                                <Text style={styles.left}>Nội dung</Text>
                                <TextInput style={styles.Input}/>
                            </View>
                        </View>
                    </View>
                   
                    <TouchableOpacity
                        style={styles.button}
                        // onPress={() => Alert.alert('Cannot press this one')}
                        >
                        <Text 
                            style={{color: '#fff', fontSize: 14, fontWeight: '700'}}>
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
        paddingHorizontal: 24,
        paddingTop: 24,
        width: '100%',
        flexWrap: 'wrap',
        backgroundColor: '#fbfbfd',
    },
    title_profile: {
        marginBottom: 30,
    },
    title: {
        fontFamily: 'Lora',
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#0091ae'
    },
    sub_title: {
        color: '#797474',
        fontSize: 12
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff7a59',
        paddingVertical: 24,
        marginTop: 10,
        borderRadius: 24,
        height: 30,
        fontSize: 16
        // flex: 1
    },
    Input: {
        borderRadius: 6,
        width: '100%', 
        backgroundColor: '#f1f2f5',
        marginBottom: 12,
    },
    form_group: {
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    left: {
        justifyContent: 'flex-end',
        color: '#46596b',
        fontSize: 12,
        marginBottom: 6,
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