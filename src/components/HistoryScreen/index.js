import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  Picker,
  ListView,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import globalVariable from '../../../global/globalVariable';
import responseCode from '../../../global/responseCode';

export default class HistoryScreen extends Component {
  constructor() {
    super();
    this.state = {
      histories: [],
      condition: "0",
    };
  }

  componentDidMount(){
    this.getHistory();
  };

  componentDidUpdate() {    
    this.props.navigation.addListener('focus', ()=>{
      this.getHistory();
    })
  }
  setSelectedValue=(itemValue) =>{
    this.state.condition = itemValue;
    this.getHistory();
  }
  getHistory=() => {
    fetch( globalVariable.phpDomain + "/api/transaction-history?type=" + this.state.condition, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + globalVariable.Authorization
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {    
        this.state.histories = responseJson;
        console.log('HISTORY', this.state.histories[0].amount);
      })
      .catch((error)=>{
        Alert.alert('Get History fail');
        console.log('ERROR', error);
      });
  };
  renderFilter = () => {
    return (
      <View style={styles.filterConainter}>
        {/* <TouchableOpacity>
          <View style={styles.filterBtn}>
            <Text style={styles.filterText}>Filter</Text>
            <Icon name="caretdown" size={wp('2%')} color="#0091ae" />
          </View>
        </TouchableOpacity> */}
        <Picker
          selectedValue={this.state.condition}
          style={styles.filterBtn}
          selectedValue={this.state.condition}
          onValueChange={(itemValue, itemIndex) => this.setSelectedValue(itemValue)}
        >
          <Picker.Item label="Receive" value="0" style={styles.filterText}/>
          <Picker.Item label="Given" value="1" style={styles.filterText}/>
        </Picker>
      </View>
    );
  };

  renderItem = ({item, index}) => {
    return (
      <View style={styles.transactionItemContainer}>
        <View style={styles.viewitem}>
          {/* Icon */}
          <View>
            <Icon
              name="arrowleft"
              size={wp('4.5%')}
              color="#fff"
              style={styles.itemIconContainer}
            />
          </View>
          {/* Transaction content */}
          <View style={styles.viewitemheader}>
            <Text style={styles.message}>{item.email}</Text>
            <Text style={styles.public_key}>{item.transaction}</Text>
            {/* <Text style={styles.time}>{item.time}</Text> */}
          </View>
          {/* Amount */}
          <View style={styles.viewitembody}>
            <View style={styles.priceContainer}>
              <Text style={styles.amount}>{item.amount}</Text>
            </View>
          </View>
        </View>
        {/* <View style={styles.separator} /> */}
      </View>
    );
  };

  render() {
    return (
      <View style={styles.HistoryComponent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>TRANSACTION HISTORY</Text>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={this.state.histories}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={({highlighted}) => (
              <View style={styles.separator} />
            )}
            ListHeaderComponent={this.renderFilter}
            //ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  HistoryComponent: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fbfbfd',
    paddingTop: 24,
    // backgroundColor: '#fff4fa',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  transactionItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleContainer: {
    paddingHorizontal: 28,
    marginBottom: 38,
  },
  title: {
    fontFamily: 'Rubik-Medium',
    fontSize: wp('6%'),
    marginBottom: 4,
    color: '#0091ae',
    letterSpacing: 1.15,
  },

  amount: {
    color: 'green',
    fontFamily: 'Inconsolata-Bold',
    fontSize: wp('4%'),
  },
  public_key: {
    fontFamily: 'Inconsolata-Regular',
    color: '#999999',
    fontSize: wp('3%'),
  },
  message: {
    fontFamily: 'Rubik-Medium',
    fontSize: wp('4%'),
  },
  viewitem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 18,
    // borderColor: 'rgb(176,224,230, 0.6)',
  },
  itemIconContainer: {
    backgroundColor: 'grey',
    borderRadius: 19,
    padding: wp('4.25%'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewitemheader: {
    display: 'flex',
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    paddingRight: 10,
    paddingTop: 4,
    paddingBottom: 6,
    marginHorizontal: 18,
  },
  viewitembody: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  type: {
    color: '#46596b',
    fontFamily: 'Rubik-Medium',
  },
  time: {
    color: '#748da4',
    fontFamily: 'Rubik-Regular',
    fontSize: wp('2.8%'),
  },
  priceContainer: {},
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#bfbfbf',
  },
  filterConainter: {
    backgroundColor: '#fff',
    display: 'flex',
    flex: 1,
    paddingTop: 8,
    paddingHorizontal: 22,
  },
  filterBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#ebfcff',
    borderRadius: wp('4%'),
    paddingVertical: wp('2%'),
    paddingHorizontal: wp('4%'),
    height: 50,
    width: 100,
  },
  filterText: {
    fontFamily: 'Rubik-Medium',
    fontSize: wp('3.5%'),
    marginRight: wp('3.25%'),
    color: '#0091ae',
  },
});

const DATA = [
  {
    amount: '100,000',
    public_key: 'akgfdgdusufbsdgnsgufdsgnuidfsgdf',
    message: 'Chuyen tien tra no',
    image: './../images/new.png',
    type: 'Chuyen Di',
    time: '08/06/2020',
  },
  {
    amount: '120,000',
    public_key: 'akgfdgdusufbsdgnsgufdsgnuidfsgdf',
    message: 'Chuyen tien tra no',
    image: './../images/new.png',
    type: 'Nhan Ve',
    time: '18/07/2020',
  },
  {
    amount: '155,000',
    public_key: 'akgfdgdusufbsdgnsgufdsgnuidfsgdf',
    message: 'Chuyen tien tra no',
    image: './../images/new.png',
  },
];
