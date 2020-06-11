/*This is an example of React Native App Intro Slider */
import React from 'react';
//import react in project
import { StyleSheet, View, Text, Image } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class ContentMore extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Check In', 'Check Out'],
      tableData: [
        ['Thứ 4, 20/11', 'Thứ 5, 21/11'],
      ],
      tableHead2: ['Khách', 'Người lớn', 'Trẻ em'],
      tableData2: [
        ['04', '02', '02'],
      ],
    }
  }

  render() {
    return (
      <View style={{marginBottom: 6}}>
        <View style={{flex: 1, flexDirection: 'row', marginBottom: 40}}>
          <View style={{height: 20, marginTop: 20, marginLeft: 14, flex: 1, flexDirection: 'row', width: '66%'}}>
            <Image source={require('../../../img/star.png')}
              style={styles.image}
            />
            <Image source={require('../../../img/star.png')}
              style={styles.image}
            />
            <Image source={require('../../../img/star.png')}
              style={styles.image}
            />
            <Image source={require('../../../img/star.png')}
              style={styles.image}
            />
            <Image source={require('../../../img/star.png')}
              style={styles.image}
            />
          </View>
          <View style={{width: '34%', marginTop: 20,}}>
            <Text style={{ color: '#F83101', fontFamily: 'serif'}}>Mã chỗ ở: 23332</Text>
          </View>
        </View>
        <View style={{ marginTop: 20, marginLeft: 40, marginRight: 40, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{ textAlign: 'center', fontSize: 17, fontFamily: 'serif'}}>Giảm 35% cho đặt phòng có checkin từ 01/11 đến 30/11</Text>
        </View>

        <View style={styles.container}>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
            <Rows data={this.state.tableData} textStyle={styles.text}/>
          </Table>
        </View>

        <View style={styles.container}>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={this.state.tableHead2} style={styles.head} textStyle={styles.text}/>
            <Rows data={this.state.tableData2} textStyle={styles.text}/>
          </Table>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: 14, 
    height: 14,  
    borderWidth: 1, 
    marginLeft: 5,
  },
  container: {paddingLeft: 44, paddingRight: 40, paddingTop: 20, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6, textAlign: 'center', fontFamily: 'serif' }
});
 
