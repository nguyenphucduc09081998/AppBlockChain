/*This is an example of React Native App Intro Slider */
import React from 'react';
//import react in project
import { StyleSheet, View, Text, Image, TextInput, ScrollView, CheckBox } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import DatePicker from 'react-native-datepicker';
import { Dropdown } from 'react-native-material-dropdown';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomMarker from './marker';


export default class ContentFilterMore extends React.Component {

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
      date:"2016-05-15",
      nonCollidingMultiSliderValue: [1500000, 3500000],
    }
  }

  currencyFormat(num) {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + 'đ';
  }

  nonCollidingMultiSliderValuesChange = values => {
    this.setState({
        nonCollidingMultiSliderValue: [values[0], values[1]],
    });
};

  render() {
    return (
      <ScrollView>
      <View style={{marginBottom: 6}}>
        <View style={{flexDirection: 'row', marginBottom: 20, borderBottomWidth: 0.5, borderBottomColor: '#8A8383',paddingBottom: 13,}}>
          <View style={{height: 20, marginTop: 20, marginLeft: 40, width: '70%'}}>
            <Text style={{ color: '#333232', fontFamily: 'serif', fontWeight: '700'}}>FILTERS</Text>
          </View>
          <View style={{width: '30%', marginTop: 20,}}>
            <Text style={{ color: '#6A6767', fontFamily: 'serif',fontWeight: '700'}}>Reset</Text>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={{ color: '#373737', fontFamily: 'notoserif',fontWeight: '700', fontSize: 13}}>Địa Điểm</Text>
          <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Thành Phố Hồ Chí Minh"
               placeholderTextColor = "#C6C6C6"
               autoCapitalize = "none"/>
        </View>

        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <View style={{height: 20, marginTop: 10, marginLeft: 20, width: '44%'}}>
            <Text style={{ color: '#373737', fontFamily: 'notoserif', fontWeight: '700', fontSize: 13}}>Check In</Text>
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
                width: '20%',
                height: '55%',
              },
              dateInput: {
                paddingLeft: 10,
                borderWidth: 1,
                borderColor: '#C6C6C6',
                height: 34,
              },
 
              // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => {this.setState({date: date})}}
            />
          </View>
          <View style={{height: 20, marginTop: 10, marginLeft: 20, width: '44%', marginBottom: 30}}>
              <Text style={{ color: '#373737', fontFamily: 'notoserif', fontWeight: '700', fontSize: 13}}>Check Out</Text>
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
                width: '20%',
                height: '55%',
              },
              dateInput: {
                paddingLeft: 10,
                borderWidth: 1,
                borderColor: '#C6C6C6',
                height: 34,
              },
                // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({date: date})}}
              />
            </View>
          </View>

          <View style={{flexDirection: 'row', marginBottom: 60,}}>
            <View style={{height: 20, marginTop: 10, marginLeft: 20, width: '25%'}}>
            <Dropdown
                    label='Phòng'
                    baseColor='#EA0C41'
                    textColor='#8D7E7E'
                    rippleCentered={true}
                    data={typeRoom}
                    value={'----'}
                    fontSize={12}
                    labelFontSize={13}
                  />
            </View>
            <View style={{height: 20, marginTop: 10, marginLeft: 20, width: '25%'}}>
              <Dropdown
                    label='Người lớn'
                    baseColor='#EA0C41'
                    textColor='#8D7E7E'
                    rippleCentered={true}
                    data={childrens}
                    value={'----'}
                    fontSize={12}
                    labelFontSize={13}
                  />
            </View>
            <View style={{height: 20, marginTop: 10, marginLeft: 20, width: '25%'}}>
              <Dropdown
                    label='Trẻ em'
                    baseColor='#EA0C41'
                    textColor='#8D7E7E'
                    rippleCentered={true}
                    data={teenagers}
                    value={'----'}
                    fontSize={12}
                    labelFontSize={13}
                  />
            </View>
          </View>
          <View style={{borderBottomWidth: 0.5, borderBottomColor: '#8A8383', paddingBottom: 6}}></View>

          <View style={[styles.container, {marginTop: 20}]}>
            <Text style={{ color: '#373737', fontFamily: 'notoserif', fontWeight: '700', fontSize: 13}}>Khoảng giá</Text>
            <MultiSlider
                values={[
                    this.state.nonCollidingMultiSliderValue[0],
                    this.state.nonCollidingMultiSliderValue[1],
                ]}
                sliderLength={350}
                onValuesChange={this.nonCollidingMultiSliderValuesChange}
                min={0}
                max={6000000}
                step={100000}
                allowOverlap={false}
                snapped
                minMarkerOverlapDistance={500000}
                customMarker={CustomMarker}
            />
            <View style={[styles.sliderOne, {flexDirection: 'row'}]}>
                <View style={[styles.boxPrice, {width: '30%'}]}>
                  <Text style={styles.textPrice}>{this.currencyFormat(this.state.nonCollidingMultiSliderValue[0])} </Text>
                </View>
                <View style={{width: '40%'}}></View>
                <View style={[styles.boxPrice, {width: '30%'}]}>
                  <Text style={styles.textPrice}>{this.currencyFormat(this.state.nonCollidingMultiSliderValue[1])}</Text>
                </View>
            </View>
          </View>
          
          
          <View style={[styles.container, {marginTop: 25}]}>
            <Text style={{ color: '#373737', fontFamily: 'notoserif',fontWeight: '700'}}>Chỗ ở và Dịch vụ</Text>
            <Text style={{ color: '#6A6767', fontFamily: 'notoserif', fontSize: 11}}>Loại chỗ ở</Text>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', }}>
                <View style={{width:'40%'}}>
                  <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                      value={this.state.checked1}
                      onValueChange={() => this.setState({ checked1: !this.state.checked1 })}
                      containerStyle={{backgroundColor:'transparent'}}
                    />
                    <Text style={styles.serInfo}>Chung cư (820)</Text>
                  </View>
                </View>
                <View style={{width:'40%'}}>
                  <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                      style={{ marginLeft: 0 }}
                      value={this.state.checked2}
                      onValueChange={() => this.setState({ checked2: !this.state.checked2 })}
                    />
                    <Text style={styles.serInfo}>Khách sạn (250)</Text>
                  </View>
                </View>
                <View style={{width:'40%'}}>
                  <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                      value={this.state.checked3}
                      onValueChange={() => this.setState({ checked3: !this.state.checked3 })}
                    />
                    <Text style={styles.serInfo}>Biệt thự (150)</Text>
                  </View>
                </View>
                <View style={{width:'40%'}}>
                  <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                      value={this.state.checked4}
                      onValueChange={() => this.setState({ checked4: !this.state.checked4 })}
                    />
                    <Text style={styles.serInfo}>Nhà Riêng (120)</Text> 
                  </View>
                </View>
                <View style={{width:'40%'}}>
                  <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                      value={this.state.checked5}
                      onValueChange={() => this.setState({ checked5: !this.state.checked5 })}
                    />
                    <Text style={styles.serInfo}>Tất cả (820)</Text>
                  </View>
                </View>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginBottom: 50}}>
            <View style={{height: 20, marginTop: 10, marginLeft: 20, width: '40%'}}>
            <Dropdown
                    label='Tiện nghi chỗ ở'
                    baseColor='#EA0C41'
                    rippleCentered={true}
                    data={typeRoom}
                    value={'Tất cả tiện nghi'}
                  />
            </View>
            <View style={{height: 20, marginTop: 10, marginLeft: 20, width: '40%'}}>
              <Dropdown
                    label='Dịch vụ'
                    baseColor='#EA0C41'
                    rippleCentered={true}
                    data={childrens}
                    value={'Tất cả dịch vụ'}
                  />
            </View>
          </View>
          
          <View style={[styles.container, {marginTop: 25}]}>
          <Text style={{ color: '#373737', fontFamily: 'notoserif',fontWeight: '700'}}>Đề xuất giá</Text>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                <View style={{width:'40%'}}>
                  <View style={{ flexDirection: 'column'}}>
                    <View style={{ flexDirection: 'row' }}>
                      <CheckBox
                        value={this.state.checkedTK}
                        onValueChange={() => this.setState({ checkedTK: !this.state.checkedTK })}
                      />
                      <Text style={styles.serInfo}>Giá Tiết Kiệm</Text>
                    </View>
                  </View>   
                </View>
                <View style={{width:'40%'}}>
                  <View style={{ flexDirection: 'column'}}>
                    <View style={{ flexDirection: 'row' }}>
                      <CheckBox
                        value={this.state.checkedNS}
                        onValueChange={() => this.setState({ checkedNS: !this.state.checkedNS })}
                      />
                      <Text style={styles.serInfo}>Giá Ngân Sách</Text>
                    </View>
                  </View>   
                </View>
                <View style={{width:'40%'}}>
                  <View style={{ flexDirection: 'column'}}>
                    <View style={{ flexDirection: 'row' }}>
                      <CheckBox
                        value={this.state.checkedHigh}
                        onValueChange={() => this.setState({ checkedHigh: !this.state.checkedHigh })}
                      />
                      <Text style={styles.serInfo}>Giá Cao Cấp</Text>
                    </View>
                  </View>   
                </View>
                <View style={{width:'40%'}}>
                  <View style={{ flexDirection: 'column'}}>
                    <View style={{ flexDirection: 'row' }}>
                      <CheckBox
                        value={this.state.checkedDB}
                        onValueChange={() => this.setState({ checkedDB: !this.state.checkedDB })}
                      />
                      <Text style={styles.serInfo}>Giá Đặc Biệt</Text>
                    </View>
                  </View>   
                </View>
            </View>
          </View>
          
      </View>
      </ScrollView>
      
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: 14, 
    height: 14, 
    borderColor: 'black', 
    borderWidth: 1, 
    marginLeft: 5,
  },
  input: {
    marginTop: 10,
    height: 34,
    borderColor: '#C6C6C6',
    borderWidth: 1
 },
 datePicker: {
  marginTop: 10,
  width: 150,

  marginBottom: 30
  },
  container: {paddingLeft: 20, paddingRight: 40, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6, textAlign: 'center', fontFamily: 'serif' },
  textPrice: {
    alignSelf: 'center',
    paddingVertical: 5,
    color: '#F6510A',
    fontSize: 12,
  },
  sliderOne: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  boxPrice:{
    width: 100,  //The Width must be the same as the height
    borderColor: '#C6C6C6',
    borderWidth: 0.8,
  },
  serInfo: {
    fontSize: 10,
    color: '#696666',
    marginTop: 10
  },
});
 
const priceRange = [
  { value: '500,000đ - 1,000,000đ'},
  { value: '1,000,000đ - 1,500,000đ'},
  { value: '1,500,000đ - 2,000,000đ'},
  { value: '2,000,000đ - 2,500,000đ'},
  { value: '2,500,000đ - 3,000,000đ'},
];

const typeRoom = [
  { value: 'Biệt Thự'},
  { value: 'Chung Cư' },
  { value: 'Nhà Riêng' },
];

const childrens = [
  { value: '01'},
  { value: '02' },
  { value: '03' },
];

const teenagers = [
  { value: '01'},
  { value: '02' },
  { value: '03' },
];
