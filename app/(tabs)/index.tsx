import React from 'react';
import { View,StyleSheet,Dimensions, Text } from 'react-native';
import StreaksCalendar from '@/components/StreaksCalendar';
import Header from '@/components/Header';
import Colors from '@/constants/Colors';
import CardCarousel from '@/components/CardCarousel';
import data from '@/assets/data.json';

const Index = () => {

  return (
    <View style={styles.container}>
      <Header />
      <StreaksCalendar />
      <CardCarousel unitId='1'  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: Dimensions.get('window').height * 0.07,
  }
});

export default Index;
