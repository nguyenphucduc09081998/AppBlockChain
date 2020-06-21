import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class HistoryScreen extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
      //isLoading:true
    };
  }

  renderFilter = () => {
    return (
      <View style={styles.filterConainter}>
        <TouchableOpacity>
          <View style={styles.filterBtn}>
            <Text style={styles.filterText}>Filter</Text>
            <Icon name="caretdown" size={14} color="#0091ae" />
          </View>
        </TouchableOpacity>
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
              size={30}
              color="#fff"
              style={styles.itemIconContainer}
            />
          </View>
          {/* Transaction content */}
          <View style={styles.viewitemheader}>
            <Text style={styles.message}>{item.message}</Text>
            <Text style={styles.public_key}>{item.public_key}</Text>
            <Text style={styles.time}>{item.time}</Text>
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

  // renderSeparator = () => {
  //     return (
  //         <View style={styles.separator}></View>
  //     )
  // }

  render() {
    return (
      <View style={styles.HistoryComponent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>LỊCH SỬ GIAO DỊCH</Text>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={DATA}
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
    fontSize: 24,
    marginBottom: 4,
    color: '#0091ae',
    letterSpacing: 1.15,
  },
  listContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  amount: {
    color: 'green',
    fontFamily: 'Inconsolata-Bold',
    fontSize: 18,
  },
  public_key: {
    fontFamily: 'Inconsolata-Regular',
    color: '#999999',
    fontSize: 14,
  },
  message: {
    fontFamily: 'Rubik-Medium',
    fontSize: 18,
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
    padding: 18,
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
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  filterText: {
    fontFamily: 'Rubik-Medium',
    fontSize: 16,
    marginRight: 16,
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
