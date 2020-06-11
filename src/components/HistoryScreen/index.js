import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, FlatList, ActivityIndicator } from 'react-native';


export default class HistoryScreen extends Component {

    constructor(){
        super()
        this.state ={
            dataSource: [],
            //isLoading:true
        }
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.viewitem}>
                <View style={styles.viewitemheader}>
                    <Text style={styles.type}>
                            {item.type}
                    </Text>
                    <Text style={styles.time}>
                            {item.time}
                    </Text>
                </View>
                <View style={styles.viewitembody}>
                    <View style={styles.summary}>
                        <Text style={styles.public_key}>
                            {item.public_key}
                        </Text>
                        <Text style={styles.message}>
                            {item.message}
                        </Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={styles.amount}>
                            {item.amount}
                        </Text>
                    </View>
                </View>
                
            </View>
        )
    }

    // renderSeparator = () => {
    //     return (
    //         <View style={styles.separator}></View>
    //     )
    // }

    render() {
        return (
           
            <View style={styles.HistoryComponent} >
                <FlatList
                    data={DATA}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index}
                    //ItemSeparatorComponent={this.renderSeparator}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    HistoryComponent: {
        flex: 1,
        backgroundColor: '#fff4fa',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    amount: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 17,
    },
    public_key: {
        fontSize: 14,
    },
    message: {
        fontSize: 14,
    },
    viewitem: {
        flex: 1,
        // marginLeft: 15,
        margin: 10,
        borderRadius: 10,
        margin: 10, 
       // borderColor: 'rgb(176,224,230, 0.6)', 
        borderWidth: 1,
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: 'black',
    },
    viewitemheader: {
        display: 'flex',
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: '#f2352f',
        paddingRight: 10,
        paddingTop: 4,
        paddingBottom: 6,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    viewitembody: {
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 8,
        display: 'flex',
        flexDirection: 'row',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    type: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 10,
    },
    time: {
        color: 'white',
        fontWeight: 'bold',
    },
    summary: {
        flex: 1,
    },
    priceContainer: {
        marginLeft: 14,
    }
})


const DATA = [
    {
        amount: '100,000',
        public_key: 'akgfdgdusufbsdgnsgufdsgnuidfsgdf',
        message: 'Chuyen tien tra no',
        image: './../images/new.png',
        type: 'Chuyen Di',
        time: '08/06/2020'
    },
    {
        amount: '120,000',
        public_key: 'akgfdgdusufbsdgnsgufdsgnuidfsgdf',
        message: 'Chuyen tien tra no',
        image: './../images/new.png',
        type: 'Nhan Ve',
        time: '18/07/2020'
    },
    {
        amount: '155,000',
        public_key: 'akgfdgdusufbsdgnsgufdsgnuidfsgdf',
        message: 'Chuyen tien tra no',
        image: './../images/new.png',

    },
    
    
];