import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View, 
  Modal,
  TouchableHighlight,
} from 'react-native';
import ContentFilterMore from './content';
import { ScrollView } from 'react-native-gesture-handler';
export {
  ContentFilterMore,
};

export default class ModalFilterView extends Component {

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 0}}>
          <Modal 
            style={styles.modal}
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            >
            <View  style={{
              backgroundColor:'transparent',
              flex:1,
              justifyContent:'flex-end'
                  }}>
              
              <View style={{
                    backgroundColor:'white',
                    width: '100%',
                    borderWidth: 1,
                    borderRadius: 20,
                    borderColor: '#ddd',
                    borderBottomWidth: 0,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    elevation: 1,
                    marginRight: 5,
                    marginTop: 20,
                    marginBottom: 5,
                    height: 370
                  }}>
                <ScrollView>
                  <ContentFilterMore></ContentFilterMore>
                  <View style={{borderBottomWidth: 0.5, borderBottomColor: '#8A8383', paddingBottom: 10}}></View>
                  <View style={{ flex: 1, flexDirection: 'row', marginLeft: 30}}>
                      <View style={{width: '50%', paddingTop: 0, marginTop: 0}}>
                          <TouchableHighlight
                          style={styles.buttonBack}
                          onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                          }}>
                          <Text style={{color: 'white',fontFamily: 'serif', fontSize: 15, fontWeight: '700'}}>Trở Lại</Text>
                        </TouchableHighlight>
                      </View>
                      <View style={{width: '50%', paddingTop: 0, marginTop: 0}}>
                      <TouchableHighlight
                        style={styles.button}>
                        <Text style={{color: 'white',fontFamily: 'serif', fontSize: 15, fontWeight: '700'}}>Tìm Kiếm</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
              </ScrollView>
              </View>
            </View>
          </Modal>

          <View style={{
                        flex: 1, flexDirection: 'row', paddingLeft: 10, borderWidth: 1,
                        borderRadius: 20,
                        borderColor: '#ddd',
                        borderBottomWidth: 0,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        elevation: 1,
                        marginLeft: 5,
                        marginRight: 5,
                        marginTop: 20,
                        marginBottom: 5,
                        height: 60}}>
            <View style={{width: '60%', paddingTop: 20, paddingLeft: 10, }}>
            <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 20, color: '#373737'}}>Lọc nâng cao</Text>
            </View>
            <View style={{paddingTop: 0, marginTop: 0}}>
              <TouchableHighlight
                style={styles.button}
                onPress={() => {
                  this.setModalVisible(true);
                }}>
                <Text style={{color: 'white',fontFamily: 'serif', fontSize: 15, fontWeight: '700'}}>Tìm Kiếm</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
    );
  }

  
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'rgba(234, 12, 65, 0.84)',
    padding: 5,
    width: 125,
    height: 32,
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  buttonBack: {
    alignItems: 'center',
    backgroundColor: '#07a',
    padding: 5,
    width: 125,
    height: 32,
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 20,
  },
});