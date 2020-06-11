import React from 'react';
import RoomDetailSlider from './slider';
import ModalView from './modal';
import AppContainer from './main';
import {
  ScrollView,
  SafeAreaView,
} from 'react-native';

export default class RoomDetails extends React.Component {

  render() {
    return (
      <>
      <RoomDetailSlider></RoomDetailSlider>
      <AppContainer></AppContainer>
      <SafeAreaView>
      <ScrollView>
        <ModalView></ModalView>
      </ScrollView>
      </SafeAreaView>
      
    </>
    );
  }
}

